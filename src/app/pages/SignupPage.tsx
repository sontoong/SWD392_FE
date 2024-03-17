import { CheckboxOptionType, Divider, Form, Select, Space } from "antd";
import {
  FormInputPassword,
  FormRadioButtonGroup,
  InputFix,
} from "../components/input/inputs";
import MyCarousel from "../components/ui/carousel";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LANGUAGES,
  LANGUAGE_OPTIONS,
  SIGNUP_PAGE_TEXT,
} from "../utils/language";
import { useImageFetcher } from "../hooks/useGetImg";
import { GoogleLoginButton } from "../components/button/google-button";
import Title from "antd/es/typography/Title";
import { LeftOutlined } from "@ant-design/icons";
import { UserDetail } from "../models/user";
import { generateRoleMsg } from "../utils/generators";
import { DefaultForm } from "../components/form/form";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { PrimaryButton } from "../components/button/buttons";

export type SignupFormValues = Pick<
  UserDetail,
  "role" | "email" | "phone" | "username"
> & {
  password: string;
  passwordConfirm: string;
};

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
        variant="borderless"
        defaultValue={LANGUAGES.VIETNAMESE}
        style={{ width: 100 }}
        onChange={handleChange}
        options={LANGUAGE_OPTIONS}
      />
    </Space>
  );
};

function SignupPage() {
  const navigate = useNavigate();
  const { state, handleSignup } = useAuth();
  const logo = useImageFetcher("logo");
  const [selectedLanguage, setSelectedLanguage] = useState(
    LANGUAGES.VIETNAMESE,
  );

  const initialValues: SignupFormValues = {
    role: "enterprise",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
  };

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleSubmit = async (values: SignupFormValues) => {
    console.log(values);
    handleSignup(values, navigate);
  };

  const languageText = SIGNUP_PAGE_TEXT[selectedLanguage];

  return (
    <div className="flex bg-greenHome">
      <div className="w-full overflow-auto bg-white pb-5 sm:w-[35%] sm:rounded-br-xl sm:rounded-tr-xl md:h-screen">
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
        <DefaultForm
          initialValues={initialValues}
          name="SignupPage"
          className="clear-both flex flex-col items-center justify-center space-y-5"
          onFinish={handleSubmit}
        >
          <section className="w-[70%] space-y-5 ">
            <div className="mb-12 ml-1 mt-[20%] ">
              <h1 className="text-3xl">{languageText.title}</h1>
              <div className="mt-3 w-full">
                Đã có tài khoản? Đăng nhập tại{" "}
                <Link to={"/login"} className="text-blue-500">
                  đây
                </Link>
              </div>
            </div>
            <div>
              <Title level={5}>Bạn muốn tạo tài khoản cho</Title>
              <Form.Item name="role">
                <FormRadioButtonGroup options={userRole} />
              </Form.Item>
            </div>
            <Form.Item
              name="email"
              label="Địa chỉ Email"
              rules={[
                {
                  type: "email",
                  min: 1000,
                  required: true,
                },
              ]}
            >
              <InputFix />
            </Form.Item>
            <Form.Item
              name="username"
              label="Tên tài khoản"
              rules={[
                {
                  type: "string",
                  max: 20,
                  required: true,
                  whitespace: true,
                },
              ]}
            >
              <InputFix />
            </Form.Item>
            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[
                {
                  type: "string",
                  required: true,
                  whitespace: true,
                },
                {
                  min: 8,
                  message: "Mật khẩu phải có ít nhất 8 kí tự",
                },
              ]}
            >
              <FormInputPassword />
            </Form.Item>
            <Form.Item
              name="passwordConfirm"
              label="Nhập lại mật khẩu"
              rules={[
                {
                  type: "string",
                  required: true,
                  whitespace: true,
                },
              ]}
            >
              <FormInputPassword />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Số điện thoại"
              rules={[
                {
                  required: true,
                  type: "string",
                  pattern: /^[0-9]+$/,
                  len: 11,
                  message: "Số điện thoại không hợp lệ",
                  whitespace: true,
                },
              ]}
            >
              <InputFix />
            </Form.Item>
          </section>

          <PrimaryButton
            htmlType="submit"
            className="text-md h-11 w-[70%] font-bold"
            loading={state.isFetching}
          >
            {languageText.signupButton}
          </PrimaryButton>
          {state.error && selectedLanguage === LANGUAGES.VIETNAMESE && (
            <article className="text-red-500">{state.displayError}</article>
          )}

          {state.error && selectedLanguage !== LANGUAGES.VIETNAMESE && (
            <article className="text-red-500">
              Login Failed, Please try later!
            </article>
          )}
        </DefaultForm>
        <Divider>hoặc</Divider>
        <div className="flex justify-center">
          <GoogleLoginButton />
        </div>
      </div>
      <div className="hidden sm:block sm:w-[65%]">
        <img src={logo} alt="logo" className="absolute right-1 w-[100px]" />
        <MyCarousel />
      </div>
    </div>
  );
}

export default SignupPage;

const userRole: CheckboxOptionType<CheckboxValueType>[] = [
  {
    label: generateRoleMsg("enterprise"),
    value: "enterprise",
  },
  {
    label: generateRoleMsg("freelancer"),
    value: "freelancer",
  },
];
