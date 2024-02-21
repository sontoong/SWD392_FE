import { Input } from "antd";
import { ErrorMessage } from "formik";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export interface MyInputProps {
  id: string;
  field: {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  };
  // form: {
  //   setFieldTouched: (field: string, touched?: boolean, shouldValidate?: boolean) => void;
  // };
  placeholder: string;
}

// const handleInputFocusBlur = (id: string, focused: boolean) => {
//   const element = document.getElementById(id);
//   if (element) {
//     if (focused) {
//       element.classList.add('border-blue-500');
//     } else {
//       element.classList.remove('border-blue-500');
//     }
//   }
// };

function MyInput({ field, placeholder }: MyInputProps) {
  const { name, value, onChange } = field;

  return (
    <div className="relative">
      <Input
        {...field}
        // placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        // bordered={false}
        allowClear
        size="large"
        className="px-5 py-3 "
      />
      <p className="absolute top-0 z-50 -translate-y-2 translate-x-3 bg-white px-1 text-xs">
        {placeholder}
      </p>
      <ErrorMessage
        name={name}
        component="p"
        className="ml-2 text-sm text-red-500"
      />
    </div>
  );
}

function MyInputPassword({ field, placeholder }: MyInputProps) {
  const { name, value, onChange } = field;

  return (
    <div className="relative">
      <Input.Password
        {...field}
        // placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        // bordered={false}
        size="large"
        className="px-5 py-3 "
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <p className="absolute top-0 z-50 -translate-y-2 translate-x-3 bg-white px-1 text-xs">
        {placeholder}
      </p>
      <ErrorMessage
        name={name}
        component="p"
        className="ml-2 text-sm text-red-500"
      />
    </div>
  );
}

export { MyInput, MyInputPassword };
