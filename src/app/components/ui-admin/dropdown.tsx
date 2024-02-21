import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { UserDetail } from "../../models/user";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Key } from "react";

type DropdownProps = {
  items: ItemType[];
  record: UserDetail;
  checkDisabled: (key: Key | undefined, record: UserDetail) => boolean;
};

export default function CustomDropdown({
  items,
  record,
  checkDisabled,
}: DropdownProps) {
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
      dropdownRender={(menu) => {
        return <div>{menu}</div>;
      }}
    >
      <EllipsisOutlined />
    </Dropdown>
  );

  // const menu = (
  //   <Menu onClick={onMenuClick}>
  //     {items.map((item) => (
  //       <Menu.Item key={item?.key} disabled={checkDisabled(item?.key)}>
  //         {`${item?.label}`}
  //       </Menu.Item>
  //     ))}
  //   </Menu>
  // );

  // return (
  //   <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
  //     <EllipsisOutlined />
  //   </Dropdown>
  // );
}
