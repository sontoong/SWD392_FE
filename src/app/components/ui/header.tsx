import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Modal, Spin, notification } from "antd";
import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import apiJWT from "../../utils/api";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
export default function MyHeader() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const logOut = async () => {
    setLoading(true);
    try {
      const response = await apiJWT.post(`/auth/logout`);
      if (response) {
        localStorage.clear();
        setLoading(false);
        navigate("/login");
      }
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: "Có lỗi xảy ra",
        placement: "bottomLeft",
      });
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <UserOutlined></UserOutlined>,
      label: <Link to={`/account`}>Thông tin cá nhân</Link>,
    },
    {
      key: "2",
      icon: <LogoutOutlined></LogoutOutlined>,
      label: <div onClick={logOut}>Đăng xuất</div>,
    },
  ];

  const navItems = [
    {
      key: 1,
      label: "Tìm Project",
    },
    {
      key: 2,
      label: "Quản Lý Project",
    },
    {
      key: 3,
      label: "Thống kê",
    },
  ];

  const { state } = useAuth();
  return (
    <Header className="fixed z-50 flex w-full justify-between border-b border-gray-200 bg-white px-5">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/swd392-41e12.appspot.com/o/images%2Flogo?alt=media&token=a87ce9ca-d5ab-4009-aa06-75a24f551479"
        alt=""
        className="px-10 py-1"
      />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={navItems}
        style={{ flex: 1, minWidth: 0 }}
      />
      <Dropdown
        menu={{ items }}
        placement="bottomRight"
        trigger={["click"]}
        arrow
      >
        <Avatar
          className="fixed right-4 top-3 cursor-pointer"
          size={"large"}
          icon={<UserOutlined />}
          src={
            state.currentUser.avatar ||
            "https://firebasestorage.googleapis.com/v0/b/swd392-41e12.appspot.com/o/images%2FdefaultAvatar?alt=media&token=38ffeb45-85da-46b5-9ec6-d9a66f99c5b8"
          }
        />
      </Dropdown>
      <Modal footer={null} closable={false} open={loading}>
        <div className="flex flex-col items-center justify-center">
          <Spin size="large"></Spin>
          <span>Đang đăng xuất...</span>
        </div>
      </Modal>
    </Header>
  );
}
// function useAppSelector(arg0: (state: any) => any): { headerTitle: any; } {
//   throw new Error('Function not implemented.');
// }
