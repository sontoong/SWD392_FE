import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  MenuProps,
  Modal,
  Spin,
  notification,
} from "antd";
import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import apiJWT from "../../utils/api";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useImageFetcher } from "../../hooks/useGetImg";
import { useAppSelector } from "../../redux/hook";
import { ItemType } from "antd/es/menu/hooks/useItems";

export default function MyHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const logo = useImageFetcher("logo");
  const defaultAvatar = useImageFetcher("avatar");
  const { role } = useAppSelector((state) => state.auth.currentUser);

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

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: ItemType[],
  ): ItemType {
    return {
      key,
      icon,
      children,
      label: <Link to={`${key}`}>{label}</Link>,
    } as ItemType;
  }

  const getConditionalItems = (): ItemType[] => {
    switch (role) {
      case "freelancer":
        return [
          getItem("Tìm Project", "/projects"),
          getItem("Quản Lý Project", "/name/projects"),
          getItem("Thống Kê", "", "", [
            {
              label: "Thống Kê Thu Nhập",
              key: "",
            },
            {
              label: "Lịch Sử Giao Dịch",
              key: "",
            },
          ]),
        ];
      case "enterprise":
        return [
          getItem("Tìm Hồ Sơ", ""),
          getItem("Quản Lý Project", "", "", [
            { label: "Danh Sách Project", key: "" },
            { label: "Đăng Tuyển Dụng", key: "new-project" },
          ]),
          getItem("Thống Kê", "", "", [
            { label: "Thống Kê Thu Nhập", key: "" },
          ]),
        ];
      case "admin":
        return [
          getItem("Quản Lý Tài Khoản", "/admin/users"),
          getItem("Quản Lý Project", "/admin/projects"),
          getItem("Xác Thực Người Dùng", "/admin/verify-user"),
        ];
      default:
        return [
          getItem("Tìm Project", "/projects"),
          getItem("Đăng Tuyển Dụng", "/new-project"),
        ];
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to={`/account`}>Thông tin cá nhân</Link>,
    },
    {
      key: "2",
      icon: <LogoutOutlined />,
      label: <div onClick={logOut}>Đăng xuất</div>,
    },
  ];

  return (
    <Header className="fixed z-50 flex w-full border-b border-gray-200 bg-white px-5">
      <img
        src={logo}
        alt=""
        className="px-10 py-1 hover:cursor-pointer"
        onClick={() => navigate("/")}
      />
      <Menu
        mode="horizontal"
        items={getConditionalItems()}
        style={{ flex: 1, minWidth: 0 }}
        selectedKeys={[
          `/${location.pathname.split("/").slice(1, 3).join("/")}`,
        ]}
      />
      {Object.values(state.currentUser).length ? (
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
            src={state.currentUser.avatar || defaultAvatar}
          />
        </Dropdown>
      ) : (
        <Button
          className="self-center"
          type="default"
          onClick={() => navigate("/login")}
        >
          Đăng nhập
        </Button>
      )}
      <Modal footer={null} closable={false} open={loading}>
        <div className="flex flex-col items-center justify-center">
          <Spin size="large"></Spin>
          <span>Đang đăng xuất...</span>
        </div>
      </Modal>
    </Header>
  );
}
