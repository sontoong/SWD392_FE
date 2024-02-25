import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { UserDetail } from "../../models/user";
import { Key } from "react";

export type CustomDropdownProps = {
  items: {
    key: Key;
    label: string;
    disabled?: boolean;
    dashed?: boolean;
    type?: "item" | "divider";
    style?: React.CSSProperties;
    className?: string;
    [key: string]: any;
  }[];
  record: UserDetail;
  checkDisabled: (key: Key | undefined, record: UserDetail) => boolean;
};

export function CustomDropdown({
  items,
  record,
  checkDisabled,
}: CustomDropdownProps) {
  const onMenuClick: MenuProps["onClick"] = (e) => {
    const { key } = e;
    switch (key) {
      case "activate": {
        console.log(`${key}: ${record.name}`);
        break;
      }
      case "unactivate": {
        console.log(`${key}: ${record.name}`);
        break;
      }
      case "terminate": {
        console.log(`${key}: ${record.name}`);
        break;
      }
      case "edit": {
        console.log(`${key}: ${record.name}`);
        break;
      }

      default:
        break;
    }
  };

  return (
    <Dropdown
      menu={{
        items: items.map((item) => ({
          ...item,
          disabled: checkDisabled(item?.key, record),
        })),
        onClick: (e) => onMenuClick(e),
      }}
      placement="bottomLeft"
      trigger={["click"]}
    >
      <EllipsisOutlined />
    </Dropdown>
  );
}
