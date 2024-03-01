import { Modal, ModalProps } from "antd";
import { OutlineButton, PrimaryButton } from "../button/buttons";

interface CustomModalProps extends Omit<ModalProps, "onOk" | "onCancel"> {
  handleCancel?: () => void;
  handleOk?: () => void;
}

export default function CustomModal(props: CustomModalProps) {
  const { children, handleCancel, handleOk, open, title } = props;

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
      title={title}
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
