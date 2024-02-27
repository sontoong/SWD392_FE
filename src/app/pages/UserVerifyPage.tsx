import { Table, TableProps } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import { UserDetailTable } from "../models/user";
import { user } from "../../constants/testData";
import { generateVerifyMsg } from "../utils/generators";
import { Link } from "react-router-dom";

export default function VerifyUserPage() {
  useSetHeaderTitle([
    {
      title: `Xác thực người dùng`,
      path: "/verify-user",
    },
  ]);

  const data: UserDetailTable[] = [
    {
      key: "1",
      ...user,
      status: generateVerifyMsg(user.isVerified),
    },
    {
      key: "2",
      ...user,
      status: generateVerifyMsg(user.isVerified),
    },
    {
      key: "3",
      ...user,
      status: generateVerifyMsg(user.isVerified),
    },
  ];

  const columns: TableProps<UserDetailTable>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Họ Và Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Ngày sinh",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Loại tài khoản",
      dataIndex: "accountType",
      key: "accountType",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "",
      key: "actions",
      render: (_, record) => (
        <Link to={`${record.id}`}>
          <EyeOutlined />
        </Link>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}
