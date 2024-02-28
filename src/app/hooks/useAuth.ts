import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../redux/slice/loginSlice";
import { LoginFormValues } from "../pages/LoginPage";
import { NavigateFunction } from "react-router-dom";
import baseApi from "../utils/baseApi";
import { AxiosError } from "axios";
import { LoginError } from "../../constants/login";
import { SignupFormValues } from "../pages/SignupPage";

export function useAuth() {
  const state = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogin = async (
    value: LoginFormValues,
    navigate: NavigateFunction,
  ) => {
    dispatch(loginStart());
    try {
      const { data } = await baseApi.post(`/auth/login`, {
        ...value,
      });
      const { link, access_token, ...user } = data.data;
      dispatch(loginSuccess(user));
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("link", JSON.stringify(link));
      navigate(link);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error?.response?.data?.error?.message;
        if (errorResponse in LoginError) {
          const translatedError =
            LoginError[errorResponse as keyof typeof LoginError];
          dispatch(loginFailure(translatedError));
        } else {
          dispatch(loginFailure(errorResponse));
        }
      } else {
        dispatch(loginFailure("Đã có lỗi xảy ra"));
      }
    }
  };
  const handleSignup = async (
    value: SignupFormValues,
    navigate: NavigateFunction,
  ) => {
    dispatch(loginStart());
    try {
      const signupResponse = await baseApi.post(`/auth/signup`, {
        ...value,
      });
      console.log(signupResponse);
      const { data } = await baseApi.post(`/auth/login`, {
        ...value,
      });
      const { link, access_token, ...user } = data.data;
      dispatch(loginSuccess(user));
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("link", JSON.stringify(link));
      navigate(link);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error?.response?.data?.error?.message;
        if (errorResponse in LoginError) {
          const translatedError =
            LoginError[errorResponse as keyof typeof LoginError];
          dispatch(loginFailure(translatedError));
        } else {
          dispatch(loginFailure(errorResponse));
        }
      } else {
        dispatch(loginFailure("Đã có lỗi xảy ra"));
      }
    }
  };

  return { state, handleLogin, handleSignup };
}
