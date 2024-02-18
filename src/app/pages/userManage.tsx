import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setHeaderTitle } from "../redux/slice/headerSlice";
import { ROLE } from "../../constants/role";
import { Select, Table, TableProps } from "antd";

export default function UserManage() {
  const { role: currentRole } = useAppSelector((state) => state.roleCheck);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setHeaderTitle([
        {
          title: "test",
          path: currentRole.role === ROLE.ADMIN ? "/" : "/forbidden",
        },
        {
          title: `test1`,
          path: "/login",
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
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={() => {}}
          options={[
            { value: record.id, label: "Kích hoạt tài khoản", disabled: true },
            { value: record.id, label: "Hủy kích hoạt tài khoản" },
            { value: record.id, label: "cấm tài khoản" },
            { value: record.id, label: "Chỉnh sửa tài khoản" },
          ]}
        />
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}
