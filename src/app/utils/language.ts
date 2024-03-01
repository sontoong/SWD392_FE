type ErrorMessage = {
  invalid?: string;
  required: string;
  length?: string;
};

type SignUpLanguageErrors = {
  email?: ErrorMessage;
  password?: ErrorMessage;
  confirmPassword?: ErrorMessage;
  address?: ErrorMessage;
  firstName?: ErrorMessage;
  middleName?: ErrorMessage;
  lastName?: ErrorMessage;
  nation?: ErrorMessage;
  phone?: ErrorMessage;
};

type EnterpriseInfoLanguageErrors = {
  firstName?: ErrorMessage;
  middleName?: ErrorMessage;
  lastName?: ErrorMessage;
  dateOfBirth?: ErrorMessage;
  enterpriseCountry?: ErrorMessage;
  documentType?: ErrorMessage;
  enterpriseDocument?: ErrorMessage;
  documentNumber?: ErrorMessage;
  enterpriseEmail?: ErrorMessage;
  enterprisePhone?: ErrorMessage;
}

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
    description: "Mừng trở lại! Vui lòng điền thông tin bên dưới để tiếp tục",
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

export const SIGNUP_PAGE_TEXT: Record<string, Record<string, string>> = {
  vn: {
    title: "Đăng Ký",
    description: "Vui lòng điền thông tin bên dưới để tiếp tục",
    emailPlaceholder: "Địa chỉ Email",
    passwordPlaceholder: "Mật khẩu",
    confirmPasswordPlaceholder: "Nhập lại mật khẩu",
    firstNamePlaceholder: "Họ",
    middleNamePlaceholder: "Tên đệm",
    lastNamePlaceholder: "Tên",
    addressPlaceholder: "Địa chỉ",
    nationPlaceholder: "Quốc gia",
    phonePlaceholder: "Số điện thoại",
    signupButton: "Đăng Ký",
  },
  eng: {
    title: "Sign up",
    description: "Please enter your information below to continue",
    emailPlaceholder: "Email address",
    passwordPlaceholder: "Password",
    confirmPasswordPlaceholder: "Confirm password",
    firstNamePlaceholder: "First name",
    middleNamePlaceholder: "Middle name",
    lastNamePlaceholder: "Last name",
    addressPlaceholder: "Address",
    nationPlaceholder: "Nation",
    phonePlaceholder: "Phone number",
    signupButton: "Sign up",
  },
};

export const SIGNUP_ERROR_MESSAGES: Record<string, SignUpLanguageErrors> = {
  vn: {
    email: {
      invalid: "Email không hợp lệ",
      required: "Email không được để trống",
    },
    password: {
      length: "Mật khẩu phải ít nhất 6 kí tự",
      required: "Mật khẩu không được để trống",
    },
    confirmPassword: {
      required: "Vui lòng nhập lại mật khẩu",
    },
    firstName: {
      required: "Họ không được để trống",
    },
    middleName: {
      required: "Tên đệm không được để trống",
    },
    lastName: {
      required: "Tên không được để trống",
    },
    address: {
      required: "Địa chỉ không được để trống",
    },
    nation: {
      required: "Quốc gia không được để trống",
    },
    phone: {
      invalid: "Số điện thoại không hợp lệ",
      length: "Vui lòng nhập số điện thoại hợp lệ",
      required: "Số điện thoại không được để trống",
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

export const ENTERPRISE_INFO_TEXT: Record<string, Record<string, string>> = {
  vn: {
    firstName: "Tên",
    middleName: "Tên đệm",
    lastName: "Họ",
    dateOfBirth: "Ngày sinh",
    enterpriseCountry: "Quốc gia",
    documentType: "Loại giấy tờ",
    enterpriseDocument: "Giấy tờ",
    documentNumber: "Số",
    enterpriseEmail: "Email",
    enterprisePhone: "SĐT",
  },
  eng: {
    firstName: "First Name",
    middleName: "Middle Name",
    lastName: "Last Name",
    dateOfBirth: "Date of Birth",
    enterpriseCountry: "Enterprise Country",
    documentType: "Document Type",
    enterpriseDocument: "Enterprise Document",
    documentNumber: "Document Number",
    enterpriseEmail: "Email",
    enterprisePhone: "Phone",

  },
};

export const ENTERPRISE_ERROR_MESSAGES: Record<string, EnterpriseInfoLanguageErrors> = {
  vn: {
      firstName: {
        required: "First name is required",
      },
      middleName: {
        required: "Middle name is required",
      },
      lastName: {
        required: "Last name is required",
      },
      dateOfBirth: {
        invalid: "Invalid Date of Birth",
        required: "Date of Birth is required",
      },
      enterpriseCountry: {
        required: "Enterprise Country is required",
      },
      documentType: {
        required: "Document Type is required"
      },
      enterpriseDocument: {
        required: "Enterprise Document is required"
      },
      documentNumber: {
        required: "Document Number is required",
        invalid: "Invalid Document Number",
      },
      enterpriseEmail: {
        required: "Email Address is required",
        invalid: "Invalid Email Address",
      },
      enterprisePhone: {
        required: "Phone Number is required",
        invalid: "Invalid Phone Number",
      },
  },
  eng: {
    firstName: {
      required: "First name is required",
    },
    middleName: {
      required: "Middle name is required",
    },
  },
};