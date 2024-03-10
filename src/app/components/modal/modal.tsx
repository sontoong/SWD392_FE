import { Modal, ModalProps, Typography } from "antd";
import { OutlineButton, PrimaryButton } from "../button/buttons";

export function CustomFormModal(props: ModalProps) {
  const { children, open, title, onCancel, onOk } = props;
  const { Title } = Typography;

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      title={
        <Title
          level={4}
          style={{
            margin: 0,
            textTransform: "uppercase",
            color: "#74BA7B",
          }}
        >
          {title}
        </Title>
      }
      maskClosable={false}
      destroyOnClose={true}
      footer={[
        <OutlineButton key="cancel" onClick={onCancel}>
          Hủy
        </OutlineButton>,
        <PrimaryButton key="sumbit" onClick={onOk}>
          Lưu
        </PrimaryButton>,
      ]}
    >
      <div className="pb-3 pt-5">{children}</div>
    </Modal>
  );
}

export function DeleteModal(props: ModalProps) {
  const { children, open, title, onCancel, onOk } = props;
  const { Title } = Typography;

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      title={
        <Title
          level={4}
          style={{
            margin: 0,
            textTransform: "uppercase",
            color: "#74BA7B",
          }}
        >
          {title}
        </Title>
      }
      maskClosable={false}
      destroyOnClose={true}
      okText="Đồng ý"
      okType="danger"
      cancelText="Hủy"
    >
      <div className="pb-3 pt-5">{children}</div>
    </Modal>
  );
}
