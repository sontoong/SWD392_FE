import { Button } from "antd";
import { ButtonProps } from "antd/es/button/button";

export function OkButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button type="primary" {...props} className="bg-[#1677ff]">
      {children}
    </Button>
  );
}
