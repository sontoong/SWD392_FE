type ErrorMessage = {
  invalid?: string;
  required: string;
  length?: string;
};

type LanguageErrors = {
  email: ErrorMessage;
  password: ErrorMessage;
};

export const LANGUAGES = {
  VIETNAMESE: "vn",
  ENGLISH: "eng",
  JAPANESE: "jp",
  CHINESE: "cn",
};

export const LANGUAGE_OPTIONS = [
  { value: LANGUAGES.ENGLISH, label: "English" },
  { value: LANGUAGES.VIETNAMESE, label: "Viet Nam" },
  { value: LANGUAGES.JAPANESE, label: "Japan", disabled: true },
  { value: LANGUAGES.CHINESE, label: "China", disabled: true },
];

export const LOGIN_PAGE_TEXT: Record<string, Record<string, string>> = {
  vn: {
    title: "Đăng nhập",
    description: "Mừng trở lại!. Vui lòng điền thông tin bên dưới để tiếp tục",
    emailPlaceholder: "Địa chỉ Email",
    passwordPlaceholder: "Mật khẩu",
    loginButton: "Đăng nhập",
  },
  eng: {
    title: "Login",
    description:
      "Welcome back! Please enter your information below to continue",
    emailPlaceholder: "Email address",
    passwordPlaceholder: "Password",
    loginButton: "Login",
  },
};

export const ERROR_MESSAGES: Record<string, LanguageErrors> = {
  vn: {
    email: {
      invalid: "Email không hợp lệ",
      required: "Email không được để trống",
    },
    password: {
      length: "Mật khẩu phải ít nhất 6 kí tự",
      required: "Mật khẩu không được để trống",
    },
  },
  eng: {
    email: {
      invalid: "Invalid email address",
      required: "Email is required",
    },
    password: {
      length: "Password must be at least 6 characters",
      required: "Password is required",
    },
  },
};
