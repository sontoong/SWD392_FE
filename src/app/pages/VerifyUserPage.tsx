import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setHeaderTitle } from "../redux/slice/headerSlice";
import { Table, TableProps } from "antd";
import { EyeOutlined } from "@ant-design/icons";

export default function UserManage() {
  const { role: currentRole } = useAppSelector((state) => state.roleCheck);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setHeaderTitle([
        {
          title: `Xác thực người dùng`,
          path: "/verify-user",
        },
      ]),
    );
  }, [dispatch, currentRole.role]);

  interface DataType {
    key: string;
    id: string;
    name: string;
    email: string;
    phone: string;
    dob: string;
    accountType: "Nhà tuyển dụng" | "Nguời ứng tuyển";
    status: "Đã xác thực" | "Chưa xác thực";
  }

  const data: DataType[] = [
    {
      key: "1",
      id: "01",
      name: "Nguyen van a",
      email: "a@gmail.com",
      phone: "0123456789",
      dob: "01/01/2000",
      accountType: "Nhà tuyển dụng",
      status: "Đã xác thực",
    },
    {
      key: "2",
      id: "01",
      name: "Nguyen van b",
      email: "a@gmail.com",
      phone: "0123456789",
      dob: "01/01/2000",
      accountType: "Nhà tuyển dụng",
      status: "Đã xác thực",
    },
  ];

  const columns: TableProps<DataType>["columns"] = [
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
        <a href={`/user/${record.id}`} target="_blank">
          <EyeOutlined />
        </a>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}
