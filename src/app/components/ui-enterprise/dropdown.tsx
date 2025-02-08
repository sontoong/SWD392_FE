import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { Key } from "react";
import { useNavigate } from "react-router-dom";
import { EnterpriseProject } from "../../models/project";

export type CustomDropdownProps = {
  items: {
    key: Key;
    label: React.ReactNode;
    disabled?: boolean;
    dashed?: boolean;
    type?: "item" | "divider";
    style?: React.CSSProperties;
    className?: string;
    [key: string]: any;
  }[];
  record: EnterpriseProject;
};

export function CustomDropdown({ items, record }: CustomDropdownProps) {
  const navigate = useNavigate();

  const onMenuClick: MenuProps["onClick"] = (e) => {
    const { key } = e;
    switch (key) {
      case "information": {
        navigate(`/ed/projects/${record.projectId}?tab=0`);
        break;
      }

      case "search": {
        navigate(`/ed/projects/${record.projectId}?tab=1`);
        break;
      }

      case "application": {
        navigate(`/ed/projects/${record.projectId}?tab=2`);
        break;
      }

      case "hired": {
        navigate(`/ed/projects/${record.projectId}?tab=3`);
        break;
      }

      default:
        break;
    }
  };

  return (
    <>
      <Dropdown
        menu={{
          items: items.map((item) => ({
            ...item,
          })),
          onClick: (e) => onMenuClick(e),
        }}
        placement="bottomLeft"
        trigger={["click"]}
      >
        <EllipsisOutlined />
      </Dropdown>
    </>
  );
}
