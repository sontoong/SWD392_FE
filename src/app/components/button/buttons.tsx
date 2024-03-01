import { Button, Typography } from "antd";
import { ButtonProps } from "antd/es/button/button";

const { Title } = Typography;

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

export function IconButton(props: ButtonProps) {
  const { icon, children } = props;
  return (
    <Button type="text" {...props} size="large" icon={<Title level={2} style={{margin: 0}}>{icon}</Title>}>
      {children}
    </Button>
  );
}
