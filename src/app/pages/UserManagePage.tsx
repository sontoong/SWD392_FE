import { Table, TableProps } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { UserDetail } from "../models/user";
import {
  CustomDropdown,
  CustomDropdownProps,
} from "../components/ui-admin/dropdown";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import { Key } from "react";

export default function UserManage() {
  useSetHeaderTitle([
    {
      title: `Quản lý tài khoản`,
      path: "/user",
    },
  ]);

  const dropdownItems: CustomDropdownProps["items"] = [
    {
      key: "activate",
      label: "Kích hoạt tài khoản",
      icon: <SmileOutlined />,
    },
    { key: "unactivate", label: "Hủy kích hoạt tài khoản" },
    { key: "terminate", label: "Cấm tài khoản", danger: true },
    { key: "edit", label: "Chỉnh sửa tài khoản" },
  ];

  const checkDisabled = (key: Key | undefined, record: UserDetail): boolean => {
    const { status } = record;
    switch (key) {
      case "activate": {
        return status === "Đã xác thực";
      }
      case "unactivate": {
        return status === "Chưa xác thực";
      }
      default:
        return false;
    }
  };

  const data: UserDetail[] = [
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
    {
      key: "3",
      id: "01",
      name: "Nguyen van b",
      email: "a@gmail.com",
      phone: "0123456789",
      dob: "01/01/2000",
      accountType: "Nhà tuyển dụng",
      status: "Chưa xác thực",
    },
  ];

  const columns: TableProps<UserDetail>["columns"] = [
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
        <CustomDropdown
          items={dropdownItems}
          record={record}
          checkDisabled={checkDisabled}
        />
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}
