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
import { jwtDecode } from "jwt-decode";

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
      const { token, data: userData } = data;
      dispatch(loginSuccess(userData.user));
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData.user));
      const decode = jwtDecode(token) as any;
      localStorage.setItem("userId", decode.id);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorResponse = error?.response?.data?.message;
        console.log(errorResponse);
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
      const { data } = await baseApi.post(`/auth/signup`, {
        ...value,
      });
      const { token, data: userData } = data;
      dispatch(loginSuccess(userData.user));
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData.user));
      const decode = jwtDecode(token) as any;
      localStorage.setItem("userId", decode.id);
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error?.response?.data?.message;
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

  const handleLoginGoogle = async (navigate: NavigateFunction) => {
    dispatch(loginStart());
    try {
      const { data } = await baseApi.get(`/auth/google`);
      const { token, data: userData } = data;
      dispatch(loginSuccess(userData.user));
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData.user));
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error?.response?.data?.message;
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
    console.log("error");
  };

  return { state, handleLogin, handleSignup, handleLoginGoogle };
}
