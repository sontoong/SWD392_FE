import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Dropdown,
  Menu,
  MenuProps,
  Modal,
  Spin,
  notification,
} from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import apiJWT from "../../utils/api";

export default function MyHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useAuth();

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
      key: "/admin/user-manage",
      label: "Quản Lý Tài Khoản",
    },
    {
      key: "/admin/project-manage",
      label: "Quản Lý Project",
    },
    {
      key: "/admin/verify-user",
      label: "Xác Thực Người Dùng",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`${e.key}`);
  };

  return (
    <Header className="fixed z-50 flex w-full justify-between border-b border-gray-200 bg-white px-5">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/swd392-41e12.appspot.com/o/images%2Flogo?alt=media&token=a87ce9ca-d5ab-4009-aa06-75a24f551479"
        alt=""
      />
      <Menu
        mode="horizontal"
        items={navItems}
        style={{ flex: 1, minWidth: 0, paddingLeft: "10%" }}
        onClick={onClick}
        selectedKeys={[location.pathname]}
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
