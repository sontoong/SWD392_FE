import {
  CheckboxOptionType,
  ConfigProvider,
  DatePicker,
  DatePickerProps,
  Input,
  InputNumber,
  InputNumberProps,
  InputProps,
  Radio,
  RadioGroupProps,
  Space,
  TreeProps,
  TreeSelect,
  TreeSelectProps,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SearchProps, TextAreaProps } from "antd/es/input";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { RequiredFields } from "../../utils/helpers";
import dayjs from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import { CSSProperties } from "react";

const { TextArea, Search } = Input;
const { RangePicker } = DatePicker;

function InputFix(props: InputProps) {
  return (
    <Input {...props} className="rounded-[6px] border-[1px] border-[#d9d9d9]" />
  );
}

function InputNumberFix(props: InputNumberProps) {
  return (
    <InputNumber
      {...props}
      className="w-full rounded-[6px] border-[1px] border-[#d9d9d9]"
      min={0}
      changeOnWheel
    />
  );
}

function InputNumberTimeFix(props: InputNumberProps) {
  return (
    <InputNumber
      {...props}
      formatter={(value) => {
        return `${value} giờ`;
      }}
      parser={(value) => value!.replace("giờ", "")}
      className="w-full rounded-[6px] border-[1px] border-[#d9d9d9]"
    />
  );
}

function InputPasswordFix(props: InputProps) {
  return (
    <Input.Password
      {...props}
      className="rounded-[6px] border-[1px] border-[#d9d9d9]"
    />
  );
}

function FormInput(props: InputProps) {
  return <InputFix {...props} allowClear={true} style={{ height: "42px" }} />;
}

function FormInputPassword(props: InputProps) {
  return (
    <InputPasswordFix {...props} allowClear={true} style={{ height: "42px" }} />
  );
}

function FormTextArea(props: RequiredFields<TextAreaProps, "maxLength">) {
  return <TextArea {...props} autoSize allowClear={true} showCount />;
}

const dateFormat = "DD/MM/YYYY";
const monthFormat = "MM/YYYY";
function FormDatePicker(props: DatePickerProps) {
  let { value } = props;
  if (value && typeof value === "number") value = dayjs(value);

  return (
    <DatePicker
      {...props}
      allowClear={false}
      value={value}
      format={dateFormat}
    />
  );
}

function FormRangePicker(props: RangePickerProps) {
  const { value, picker } = props;
  const dayjsDates = value?.map((item) => {
    if (item && typeof item === "number") return dayjs(item);
    else return item;
  }) as RangePickerProps["value"] | undefined;

  switch (picker) {
    case "date":
      return (
        <RangePicker
          {...props}
          allowClear={false}
          value={dayjsDates}
          format={dateFormat}
        />
      );

    case "month":
      return (
        <RangePicker
          {...props}
          allowClear={false}
          value={dayjsDates}
          format={monthFormat}
        />
      );

    default:
      return (
        <RangePicker
          {...props}
          allowClear={false}
          value={dayjsDates}
          format={dateFormat}
        />
      );
  }
}

interface FormRadioGroupProps extends Omit<RadioGroupProps, "options"> {
  options: CheckboxOptionType<CheckboxValueType>[];
  textStyle?: CSSProperties;
}

function FormRadioButtonGroup(props: FormRadioGroupProps) {
  const { options, ...rest } = props;

  return (
    <Radio.Group {...rest} optionType="button" buttonStyle="solid">
      {options?.map((option, index) => (
        <Radio.Button
          key={index}
          value={option.value}
          style={{
            textAlign: "center",
            padding: "5px 20px 5px 20px",
            height: "5%",
          }}
        >
          {option.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}

function FormRadioGroup(props: FormRadioGroupProps) {
  const { options, textStyle, ...rest } = props;

  return (
    <Radio.Group {...rest}>
      <Space direction="vertical">
        {options?.map((option, index) => (
          <Radio key={index} value={option.value}>
            <span style={textStyle}>{option.label}</span>
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
}

function FormTreeSelect(props: TreeProps) {
  const { treeData } = props;

  const addDisabledField = (
    data: TreeSelectProps["treeData"],
  ): TreeSelectProps["treeData"] => {
    return data?.map((node) => {
      if (node.children && node.children.length > 0) {
        return {
          ...node,
          disabled: true,
          children: addDisabledField(node.children),
        };
      } else {
        return node;
      }
    });
  };

  <ConfigProvider
    theme={{
      token: {
        colorTextDisabled: "black",
      },
    }}
  >
    <TreeSelect
      showSearch
      style={{ width: "100%" }}
      dropdownStyle={{ maxHeight: 400, overflow: "auto", cursor: "default" }}
      placeholder="Please select"
      treeData={addDisabledField(treeData as TreeSelectProps["treeData"])}
    />
  </ConfigProvider>;
}

function SearchInput(props: SearchProps) {
  return (
    <Search
      {...props}
      placeholder="Tìm kiếm"
      size="large"
      allowClear
      enterButton={<SearchOutlined style={{ fontSize: "1.5rem" }} />}
    />
  );
}

export {
  FormTextArea,
  FormDatePicker,
  FormRangePicker,
  InputFix,
  FormInput,
  FormInputPassword,
  FormRadioGroup,
  FormTreeSelect,
  InputPasswordFix,
  InputNumberFix,
  FormRadioButtonGroup,
  InputNumberTimeFix,
  SearchInput,
};
