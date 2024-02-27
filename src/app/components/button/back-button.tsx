import { LeftOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button type="text" className="mb-3" onClick={() => navigate(-1)}>
      <Space className="font-semibold text-blue-500">
        <LeftOutlined />
        <span>Quay lại</span>
      </Space>
    </Button>
  );
}
