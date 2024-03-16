import { Table, TableProps } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import { UserDetailTable } from "../models/user";
import { freelancer } from "../../constants/testData";
import { generateVerifyMsg } from "../utils/generators";
import { Link } from "react-router-dom";
import { formatUnixToLocal } from "../utils/utils";

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
      ...freelancer,
      dobString: formatUnixToLocal(freelancer.dob),
      status: generateVerifyMsg(freelancer.isVerified),
    },
    {
      key: "2",
      ...freelancer,
      dobString: formatUnixToLocal(freelancer.dob),
      status: generateVerifyMsg(freelancer.isVerified),
    },
    {
      key: "3",
      ...freelancer,
      dobString: formatUnixToLocal(freelancer.dob),
      status: generateVerifyMsg(freelancer.isVerified),
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
      dataIndex: "dobString",
      key: "dobString",
    },
    {
      title: "Loại tài khoản",
      dataIndex: "role",
      key: "role",
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

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ position: ["bottomCenter"] }}
    />
  );
}
