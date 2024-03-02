import { Modal, ModalProps, Typography } from "antd";
import { OutlineButton, PrimaryButton } from "../button/buttons";

interface CustomModalProps extends Omit<ModalProps, "onOk" | "onCancel"> {
  handleCancel?: () => void;
  handleOk?: () => void;
}

export default function CustomModal(props: CustomModalProps) {
  const { children, handleCancel, handleOk, open, title } = props;
  const { Title } = Typography;

  const handleClickOk = () => {
    if (handleOk) {
      handleOk();
    }
  };

  const handleClickCancel = () => {
    if (handleCancel) {
      handleCancel();
    }
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
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
      footer={[
        <OutlineButton key="cancel" onClick={handleClickCancel}>
          Cancel
        </OutlineButton>,
        <PrimaryButton key="ok" onClick={handleClickOk}>
          Accept
        </PrimaryButton>,
      ]}
    >
      {children}
    </Modal>
  );
}
