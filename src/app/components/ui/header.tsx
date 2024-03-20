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

  const getHeader = (): ItemType[] => {
    switch (role) {
      case "candidate":
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
          getItem("Quản Lý Project", "/ed", "", [
            { label: "Danh Sách Project", key: "/ed/projects" },
            { label: "Đăng Tuyển Dụng", key: "/ed/new-project" },
          ]),
          getItem("Tìm Hồ Sơ", "/candidates"),
          getItem("Thống Kê", "/ed/report", "", [
            { label: "Lịch Sử Giao Dịch", key: "/ed/report/transactions" },
          ]),
        ];
      default:
        return [
          getItem("Tìm Project", "/projects"),
          getItem("Tìm Hồ Sơ", "/candidates"),
        ];
    }
  };

  const getProfileDropdown = (): ItemType[] => {
    switch (role) {
      case "candidate":
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
      default:
        return [
          getItem(
            <div onClick={logOut}>Đăng xuất</div>,
            "",
            <LogoutOutlined />,
          ),
        ];
    }
  };

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key) navigate(e.key);
  };
  console.log(`/${location.pathname.split("/").slice(1, 2).join("/")}`);
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
        items={getHeader()}
        style={{ flex: 1, minWidth: 0 }}
        selectedKeys={location.pathname
          .split("/")
          .slice(1)
          .map((_, index, arr) => `/${arr.slice(0, index + 1).join("/")}`)}
        onClick={onClick}
      />
      {Object.values(state.currentUser).length ? (
        <Dropdown
          menu={{ items: getProfileDropdown() }}
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
