import { Button, Divider, Select, Space } from "antd";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { MyInput, MyInputPassword } from "../components/input/inputs";
import MyCarousel from "../components/ui/carousel";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  SIGNUP_ERROR_MESSAGES,
  LANGUAGES,
  LANGUAGE_OPTIONS,
  LOGIN_PAGE_TEXT,
} from "../utils/language";
import { useImageFetcher } from "../hooks/useGetImg";
import { GoogleLoginButton } from "../components/button/google-button";
import { LeftOutlined } from "@ant-design/icons";

export interface LoginFormValues {
  email: string;
  password: string;
}

interface SelectCustomProps {
  onChangeLanguage: (value: string) => void;
}

const SelectCustom = ({ onChangeLanguage }: SelectCustomProps) => {
  const handleChange = (value: string) => {
    onChangeLanguage(value);
  };

  return (
    <Space wrap>
      <Select
        bordered={false}
        defaultValue={LANGUAGES.VIETNAMESE}
        style={{ width: 100 }}
        onChange={handleChange}
        options={LANGUAGE_OPTIONS}
      />
    </Space>
  );
};

function LoginPage() {
  const navigate = useNavigate();
  const { state, handleLogin } = useAuth();
  const logo = useImageFetcher("logo");
  const [selectedLanguage, setSelectedLanguage] = useState(
    LANGUAGES.VIETNAMESE,
  );

  const initialValues = {
    email: "",
    password: "",
  };

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleSubmit = async (values: LoginFormValues) => {
    handleLogin(values, navigate);
  };

  const languageText = LOGIN_PAGE_TEXT[selectedLanguage];
  const validate = SIGNUP_ERROR_MESSAGES[selectedLanguage];

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(validate.email?.invalid)
      .required(validate.email?.required),
    password: Yup.string()
      .min(4, validate.password?.length)
      .required(validate.password?.required),
  });

  return (
    <div className="flex bg-greenHome">
      <div className="w-full bg-white sm:w-[30%] sm:rounded-br-xl sm:rounded-tr-xl md:h-screen">
        <div className="float-right">
          <SelectCustom onChangeLanguage={changeLanguage} />
        </div>
        <div className="float-left pl-3 pt-3">
          <Link to="/">
            <Space>
              <LeftOutlined />
              <span>Về trang chủ</span>
            </Space>
          </Link>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="clear-both flex flex-col items-center justify-center space-y-5">
            <section className="w-[70%] space-y-5 ">
              <div className="mb-12 ml-1 mt-[40%] ">
                <h1 className="text-3xl">{languageText.title}</h1>
                <div className="mt-3 w-full">
                  Chưa có tài khoản? Đăng ký tại{" "}
                  <Link to={"/sign-up"} className="text-blue-500">
                    đây
                  </Link>
                </div>
              </div>

              <Field
                name="email"
                component={MyInput}
                placeholder={languageText.emailPlaceholder}
              />

              <Field
                name="password"
                component={MyInputPassword}
                placeholder={languageText.passwordPlaceholder}
              />
            </section>

            <Button
              type="primary"
              htmlType="submit"
              className="text-md h-11 w-[70%] bg-greenHome font-bold"
              loading={state.isFetching}
            >
              {languageText.loginButton}
            </Button>
            {state.error && selectedLanguage === LANGUAGES.VIETNAMESE && (
              <article className="text-red-500">{state.displayError}</article>
            )}

            {state.error && selectedLanguage !== LANGUAGES.VIETNAMESE && (
              <article className="text-red-500">
                Login Failed, Please try later!
              </article>
            )}
          </Form>
        </Formik>
        <Divider>hoặc</Divider>
        <div className="flex justify-center">
          <GoogleLoginButton />
        </div>
      </div>
      <div className="hidden sm:block sm:w-[70%]">
        <img src={logo} alt="logo" className="absolute right-1 w-[100px]" />
        <MyCarousel />
      </div>
    </div>
  );
}

export default LoginPage;
