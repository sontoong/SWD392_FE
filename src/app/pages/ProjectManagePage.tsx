import { Menu, MenuProps } from "antd";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import { useState } from "react";
import NotVerified from "../components/ui-admin/project-manage/not-verified";
import Verified from "../components/ui-admin/project-manage/verified";

export default function ProjectManage() {
  useSetHeaderTitle([
    {
      title: `Quản lý project`,
      path: "/project",
    },
  ]);
  const [current, setCurrent] = useState("notverified");

  const items: MenuProps["items"] = [
    {
      label: "Chưa duyệt",
      key: "notverified",
    },
    {
      label: "Đã duyệt",
      key: "verified",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />

      {current === "notverified" ? <NotVerified /> : <Verified />}
    </>
  );
}
