import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import type { GetProp, UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { handleUpload } from "../../services/image";
import { useState } from "react";

const props: UploadProps = {
  name: "file",
  onChange(fileList) {
    console.log(fileList);
    if (fileList.file.status !== "uploading") {
      console.log(fileList.file, fileList.fileList);
    }
    if (fileList.file.status === "done") {
      message.success(`${fileList.file.name} file uploaded successfully`);
    } else if (fileList.file.status === "error") {
      message.error(`${fileList.file.name} file upload failed.`);
    }
  },
};

export function UploadInput({ name }: { name: string }) {
  console.log(name);
  return (
    <Upload
      {...props}
      customRequest={({ file }) => {
        console.log(file);
        handleUpload(name, file as File);
      }}
    >
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
}

export function UploadShowIcon() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

  const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Upload
        {...props}
        showUploadList={false}
        listType="picture-circle"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%", height:'100%', borderRadius:"50%", objectFit:"cover" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
}
