import {
  EllipsisOutlined,
  ExclamationCircleFilled,
  WarningTwoTone,
} from "@ant-design/icons";
import { Dropdown, MenuProps, Modal } from "antd";
import { UserDetail } from "../../models/user";
import { Key } from "react";
import { useNavigate } from "react-router-dom";

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
  record: UserDetail;
  checkDisabled: (key: Key | undefined, record: UserDetail) => boolean;
};

export function CustomDropdown({
  items,
  record,
  checkDisabled,
}: CustomDropdownProps) {
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();

  const onMenuClick: MenuProps["onClick"] = (e) => {
    const { key } = e;
    switch (key) {
      case "activate": {
        modal.confirm({
          title: "Lưu ý",
          icon: <ExclamationCircleFilled />,
          content: <div>Bạn muốn kích hoạt tài khoản {record.name}</div>,
          okText: "Đồng ý",
          okType: "danger",
          cancelText: "Hủy",
          onOk() {
            console.log(`${key}: ${record.name}`);
          },
          onCancel() {},
        });
        break;
      }
      case "unactivate": {
        modal.confirm({
          title: "Lưu ý",
          icon: <ExclamationCircleFilled />,
          content: <div>Bạn muốn hủy kích hoạt tài khoản {record.name}</div>,
          okText: "Đồng ý",
          okType: "danger",
          cancelText: "Hủy",
          onOk() {
            console.log(`${key}: ${record.name}`);
          },
          onCancel() {},
        });
        break;
      }
      case "terminate": {
        modal.confirm({
          title: "Lưu ý",
          icon: <WarningTwoTone twoToneColor="red" />,
          content: <div>Bạn muốn cấm tài khoản {record.name}</div>,
          okText: "Đồng ý",
          okType: "danger",
          cancelText: "Hủy",
          onOk() {
            console.log(`${key}: ${record.name}`);
          },
          onCancel() {},
        });
        break;
      }
      case "edit": {
        navigate(`user/edit/${record.id}`);
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
            disabled: checkDisabled(item?.key, record),
          })),
          onClick: (e) => onMenuClick(e),
        }}
        placement="bottomLeft"
        trigger={["click"]}
      >
        <EllipsisOutlined />
      </Dropdown>
      {contextHolder}
    </>
  );
}
