import { useState } from "react";
import { DeleteButton } from "../../button/buttons";
import { DeleteModal } from "../../modal/modal";

interface DeleteModalProps {
  name: string;
  onOk: () => void;
}
export default function Delete(props: DeleteModalProps) {
  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <DeleteButton onClick={() => setOpen(true)} />
      <DeleteModal
        open={open}
        title={`Xóa ${props.name}`}
        onCancel={() => {
          handleCancel();
        }}
        onOk={props.onOk}
        okType="danger"
      >
        <div>Bạn có chắc chắn muốn xóa {props.name}?</div>
      </DeleteModal>
    </>
  );
}
