import { Button, Modal } from "antd";
import { useState } from "react";

type Modal = {
  title: React.ReactNode;
  content: React.ReactNode;
};

export default function CustomModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState<Modal>();

  const showModal = (modal: Modal) => {
    setModal(modal);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={() =>
          showModal({ title: <div>Abc</div>, content: <div>Content</div> })
        }
      >
        Modal
      </Button>
      <Modal
        title={modal?.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={handleOk}>
            Accept
          </Button>,
        ]}
      >
        {modal?.content}
      </Modal>
    </>
  );
}
