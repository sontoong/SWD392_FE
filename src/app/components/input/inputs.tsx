import {
  DatePicker,
  DatePickerProps,
  Input,
  InputProps,
  Radio,
  RadioGroupProps,
  Select,
  SelectProps,
} from "antd";
import { ErrorMessage } from "formik";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { TextAreaProps } from "antd/es/input";

const { TextArea } = Input;
export interface MyInputProps {
  id: string;
  field: {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  placeholder: string;
}

export interface MyDatePickerProps {
  id: string;
  field: {
    name: string;
    value: string;
    onChange: DatePickerProps["onChange"];
  };
  placeholder: string;
}

export interface MySelectProps extends SelectProps {
  id: string;
  field: {
    name: string;
  };
  placeholder: string;
}

export interface MySkillFieldSelectProps extends SelectProps {
  id: string;
  field: {
    name: string;
  };
  placeholder: string;
}

export interface MyTextAreaProps {
  id: string;
  field: {
    name: string;
    value: string;
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
  };
  placeholder: string;
}

function MyTextArea({ field, placeholder }: MyTextAreaProps) {
  const { name, value, onChange } = field;

  return (
    <div className="relative">
      <TextArea
        {...field}
        value={value || ""}
        onChange={onChange}
        allowClear
        size="large"
        className="px-5 py-3"
        style={{ width: "100%" }}
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

function MySelectSkillFieldInput({
  field,
  placeholder,
  ...props
}: MySkillFieldSelectProps) {
  const { name } = field;

  return (
    <div className="relative">
      <Select
        mode="multiple"
        allowClear
        size="large"
        {...props}
        style={{ width: "100%" }}
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

function MySelectInput({ field, placeholder, ...props }: MySelectProps) {
  const { name } = field;

  return (
    <div className="relative">
      <Select size="large" {...props} style={{ width: "100%" }} />
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

function MyDateInput({ field, placeholder }: MyDatePickerProps) {
  const { name, onChange } = field;

  return (
    <div className="relative">
      <DatePicker
        onChange={onChange}
        allowClear
        size="large"
        className="w-full px-5 py-3"
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

function MyInput({ field, placeholder }: MyInputProps) {
  const { name, value, onChange } = field;

  return (
    <div className="relative">
      <Input
        {...field}
        value={value || ""}
        onChange={onChange}
        allowClear
        size="large"
        className="px-5 py-3"
        style={{ width: "100%" }}
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
        value={value || ""}
        onChange={onChange}
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

function InputFix(props: InputProps) {
  return (
    <Input {...props} className="rounded-[6px] border-[1px] border-[#d9d9d9]" />
  );
}

function FormInput(props: InputProps) {
  return <InputFix {...props} allowClear={true} style={{ height: "42px" }} />;
}

function FormTextArea(props: TextAreaProps) {
  return <TextArea {...props} autoSize allowClear={true} showCount />;
}

function FormDatePicker(props: DatePickerProps) {
  const dateFormat = "DD/MM/YYYY";
  return <DatePicker {...props} format={dateFormat} allowClear={false} />;
}

function FormRadioGroup(props: RadioGroupProps) {
  return <Radio.Group {...props} optionType="button" buttonStyle="solid" />;
}

export {
  FormTextArea,
  FormDatePicker,
  InputFix,
  FormInput,
  FormRadioGroup,
  MyInput,
  MyInputPassword,
  MyDateInput,
  MySelectInput,
  MySelectSkillFieldInput,
  MyTextArea,
};
