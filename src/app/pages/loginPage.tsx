import { Button, Select, Space } from "antd";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { MyInput, MyInputPassword } from "../components/input/inputs";
import MyCarousel from "../components/ui/carousel";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ERROR_MESSAGES,
  LANGUAGES,
  LANGUAGE_OPTIONS,
  LOGIN_PAGE_TEXT,
} from "../utils/language";

export interface FormValues {
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
  const initialValues = {
    email: "",
    password: "",
  };

  const [selectedLanguage, setSelectedLanguage] = useState(
    LANGUAGES.VIETNAMESE,
  );

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
  };
  const { state, handleLogin } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (values: FormValues) => {
    handleLogin(values, navigate);
  };

  const languageText = LOGIN_PAGE_TEXT[selectedLanguage];
  const validate = ERROR_MESSAGES[selectedLanguage];

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(validate.email.invalid)
      .required(validate.email.required),
    password: Yup.string()
      .min(6, validate.password.length)
      .required(validate.password.required),
  });

  return (
    <div className="flex bg-greenHome">
      <div className="w-full bg-white sm:w-[30%] sm:rounded-br-xl sm:rounded-tr-xl md:h-screen">
        <div className="float-right">
          <SelectCustom onChangeLanguage={changeLanguage} />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="mt-10 flex flex-col items-center justify-center space-y-5">
            <section className="w-[70%] space-y-5 ">
              <div className="mb-12 ml-1 mt-[40%] ">
                <h1 className="text-3xl">{languageText.title}</h1>
                <p className="sm:max-xl:text-md mt-2 text-base text-grayLine">
                  {languageText.description}
                </p>
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
      </div>
      <div className="hidden sm:block sm:w-[70%]">
        {/* <img
          src="https://firebasestorage.googleapis.com/v0/b/class-project-08.appspot.com/o/pngwing.com.png?alt=media&token=8d3d167e-17d5-4062-a3ba-9b0aedbb0e47"
          alt="logo"
          className="absolute right-1 w-[100px]"
        /> */}

        <MyCarousel></MyCarousel>
      </div>
    </div>
  );
}

export default LoginPage;
