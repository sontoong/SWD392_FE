import React, { useEffect, useRef, useState } from "react";
import { SmileOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Space,
  Typography,
} from "antd";
import type { GetRef } from "antd";

type FormInstance = GetRef<typeof Form>;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface UserType {
  name: string;
  age: string;
}

interface ModalFormProps {
  open: boolean;
  onCancel: () => void;
}

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({
  form,
  open,
}: {
  form: FormInstance;
  open: boolean;
}) => {
  const prevOpenRef = useRef<boolean>();
  const prevOpen = prevOpenRef.current;

  console.log(prevOpenRef);
  console.log(prevOpen);

  useEffect(() => {
    prevOpenRef.current = open;
    console.log(prevOpenRef);
  }, [open]);

  useEffect(() => {
    console.log(prevOpenRef);
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};

const ModalForm: React.FC<ModalFormProps> = ({ open, onCancel }) => {
  const [form] = Form.useForm();

  useResetFormOnCloseModal({
    form,
    open,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal title="Basic Drawer" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item name="name" label="User Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="User Age" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function TestPage() {
  return <FreelancerProjectDetail />;
}
