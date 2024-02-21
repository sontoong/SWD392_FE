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
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import apiJWT from "../../utils/api";
import { fetchLogo, fetchDefaultAvatar } from "../../../constants/images";

export default function MyHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useAuth();

  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const logoImg = async () => {
    const imageUrl = await fetchLogo();
    if (imageUrl) {
      setLogo(imageUrl);
    }
  };
  const defaultAvatar = async () => {
    const imageUrl = await fetchDefaultAvatar();
    if (imageUrl) {
      setAvatar(imageUrl);
    }
  };

  useEffect(() => {
    logoImg();
    defaultAvatar();
  }, []);

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

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`${e.key}`);
  };

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

  return (
    <Header className="fixed z-50 flex w-full border-b border-gray-200 bg-white px-5">
      <img src={logo} alt="" className="px-10 py-1" />
      <Menu
        mode="horizontal"
        items={navItems}
        style={{ flex: 1, minWidth: 0 }}
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
          src={state.currentUser.avatar || avatar}
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
