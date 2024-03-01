import { Button } from "antd";
import { ButtonProps } from "antd/es/button/button";

export function PrimaryButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button type="primary" {...props} className="bg-[#00b96b]">
      {children}
    </Button>
  );
}

export function OutlineButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button type="default" {...props}>
      {children}
    </Button>
  );
}
