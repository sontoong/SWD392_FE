import { Select, SelectProps } from "antd";

export function SelectFix(props: SelectProps) {
  return <Select style={{ height: "42px" }} {...props} />;
}

export function SelectMultiple(props: SelectProps) {
  return <SelectFix mode="multiple" allowClear {...props} />;
}
