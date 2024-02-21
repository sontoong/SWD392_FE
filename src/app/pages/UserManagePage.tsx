import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setHeaderTitle } from "../redux/slice/headerSlice";
import { Button, Dropdown, MenuProps, Table, TableProps } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export default function UserManage() {
  const { role: currentRole } = useAppSelector((state) => state.roleCheck);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setHeaderTitle([
        {
          title: `Quản lý tài khoản`,
          path: "/user-manage",
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

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Kích hoạt tài khoản",
      icon: <SmileOutlined />,
      disabled: true,
    },
    { key: "2", label: "Hủy kích hoạt tài khoản" },
    { key: "3", label: "Cấm tài khoản" },
    { key: "4", label: "Chỉnh sửa tài khoản" },
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
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
          <Button>Actions {record.name}</Button>
        </Dropdown>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}

{
  /* <Select
          defaultValue="Actions"
          style={{ width: 120 }}
          onChange={() => {}}
         
        /> */
}
