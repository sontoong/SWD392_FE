import { DeleteTwoTone, EditTwoTone, PlusOutlined } from "@ant-design/icons";
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

export function DeletePrimaryButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button type="primary" {...props} className="bg-[#df0022]">
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

export function TextButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button type="text" {...props}>
      {children}
    </Button>
  );
}

interface IconButtonProps extends Omit<ButtonProps, "icon"> {
  icon: React.ReactNode;
}
export function IconButton(props: IconButtonProps) {
  const { icon, children } = props;
  return (
    <Button type="text" {...props} size="large" icon={icon}>
      {children}
    </Button>
  );
}

export function EditButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Button
      type="text"
      icon={<EditTwoTone twoToneColor="#74BA7B" />}
      {...props}
    >
      {children}
    </Button>
  );
}

export function AddNewButton(props: ButtonProps) {
  return (
    <TextButton icon={<PlusOutlined />} {...props}>
      Thêm mới
    </TextButton>
  );
}

export function DeleteButton(props: ButtonProps) {
  const { children } = props;
  return (
    <TextButton icon={<DeleteTwoTone twoToneColor="#74BA7B" />} {...props}>
      {children}
    </TextButton>
  );
}
