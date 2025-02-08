import { UploadOutlined } from "@ant-design/icons";
import { Button, Space, Upload, UploadProps, message } from "antd";
import { handleUpload } from "../../services/image";

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

export function DocumentUploadInput({ name }: { name: string }) {
  console.log(name);
  return (
    <Space size={"small"} direction="vertical">
      <Upload
        {...props}
        customRequest={({ file }) => {
          console.log(file);
          handleUpload(name, file as File);
        }}
      >
        <Button icon={<UploadOutlined />}>Tải lên tài liệu</Button>
      </Upload>
      <div></div>
    </Space>
  );
}
