import { LeftOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import { useNavigate } from "react-router-dom";

export default function BackButton(props: BaseButtonProps) {
  const { className } = props;
  const navigate = useNavigate();

  return (
    <Button className={className} type="text" onClick={() => navigate(-1)}>
      <Space className="font-semibold text-blue-500">
        <LeftOutlined />
        <span>Quay lại</span>
      </Space>
    </Button>
  );
}
