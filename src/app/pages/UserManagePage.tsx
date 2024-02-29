import { Table, TableProps } from "antd";
import { UserDetailTable } from "../models/user";
import {
  CustomDropdown,
  CustomDropdownProps,
} from "../components/ui-admin/dropdown";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import { Key } from "react";
import { user } from "../../constants/testData";
import { generateVerifyMsg } from "../utils/generators";

export default function UserManage() {
  useSetHeaderTitle([
    {
      title: `Quản lý tài khoản`,
      path: "/users",
    },
  ]);

  const dropdownItems: CustomDropdownProps["items"] = [
    {
      key: "information",
      label: "Xem thông tin tài khoản",
    },
    {
      key: "activate",
      label: "Kích hoạt tài khoản",
    },
    { key: "unactivate", label: "Hủy kích hoạt tài khoản" },
    { key: "terminate", label: "Cấm tài khoản", danger: true },
    { key: "edit", label: "Chỉnh sửa tài khoản" },
  ];

  const checkDisabled = (
    key: Key | undefined,
    record: UserDetailTable,
  ): boolean => {
    const { isVerified } = record;
    switch (key) {
      case "activate": {
        return isVerified === true;
      }
      case "unactivate": {
        return isVerified === false;
      }
      default:
        return false;
    }
  };

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
