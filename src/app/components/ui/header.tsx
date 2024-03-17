import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {
  App,
  Avatar,
  Button,
  Dropdown,
  Menu,
  MenuProps,
  Modal,
  Spin,
} from "antd";
import { Header } from "antd/es/layout/layout";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useImageFetcher } from "../../hooks/useGetImg";
import { useAppSelector } from "../../redux/hook";
import apiJWT from "../../utils/api";

export default function MyHeader() {
  const { notification } = App.useApp();
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
      const response = await apiJWT.get(`/auth/logout`);
      if (response) {
        localStorage.clear();
        setLoading(false);
        window.location.href = "/login";
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
      label,
    };
  }

  const getConditionalItems = (): ItemType[] => {
    switch (role) {
      case "freelancer":
        return [
          getItem("Tìm Project", "/projects"),
          getItem("Quản Lý Project", "/fd/projects"),
          getItem("Thống Kê", "/fd/report", "", [
            {
              label: "Thống Kê Thu Nhập",
              key: "/fd/report/earnings",
            },
            {
              label: "Lịch Sử Giao Dịch",
              key: "/fd/report/transactions",
            },
          ]),
        ];
      case "enterprise":
        return [
          getItem("Tìm Hồ Sơ", "/freelancers"),
          getItem("Quản Lý Project", "/ed", "", [
            { label: "Danh Sách Project", key: "/ed/projects" },
            { label: "Đăng Tuyển Dụng", key: "/ed/new-project" },
          ]),
          getItem("Thống Kê", "/ed/report", "", [
            { label: "Lịch Sử Giao Dịch", key: "/ed/report/transactions" },
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
          getItem("Tìm Hồ Sơ", "/freelancers"),
        ];
    }
  };

  const getConditionalDropdown = (): ItemType[] => {
    switch (role) {
      case "freelancer":
        return [
          getItem(
            <Link to={`/fd/account`}>Thông tin cá nhân</Link>,
            "/account",
            <UserOutlined />,
          ),
          getItem(
            <div onClick={logOut}>Đăng xuất</div>,
            "",
            <LogoutOutlined />,
          ),
        ];
      case "enterprise":
        return [
          getItem(
            <Link to={`/ed/account`}>Thông tin cá nhân</Link>,
            "/account",
            <UserOutlined />,
          ),
          getItem(
            <div onClick={logOut}>Đăng xuất</div>,
            "",
            <LogoutOutlined />,
          ),
        ];
      case "admin":
        return [
          getItem(
            <div onClick={logOut}>Đăng xuất</div>,
            "",
            <LogoutOutlined />,
          ),
        ];
      default:
        return [];
    }
  };

  const items: ItemType[] = getConditionalDropdown();

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key) navigate(e.key);
  };

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
        onClick={onClick}
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
