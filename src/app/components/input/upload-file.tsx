import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { handleUpload } from "../../services/image";

export function UploadInput({ name }: { name: string }) {
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
