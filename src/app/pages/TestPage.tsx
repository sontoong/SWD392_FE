import { useState } from "react";
import { UploadImg } from "../components/input/upload-img";
import { App, Button, GetProp, UploadFile, UploadProps } from "antd";
import ProjectApplicationList from "../components/ui-enterprise/ProjectApplicationList";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export default function TestPage() {
  const { message } = App.useApp();

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file as FileType);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch("https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        message.success("upload successfully.");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  return (
    // <div>
    //   <UploadImg
    //     listType="picture-circle"
    //     maxCount={1}
    //     onChange={handleChange}
    //   />
    //   <Button
    //     type="primary"
    //     onClick={handleUpload}
    //     disabled={fileList.length === 0}
    //     loading={uploading}
    //     style={{ marginTop: 16 }}
    //   >
    //     {uploading ? "Uploading" : "Start Upload"}
    //   </Button>
    // </div>
    <ProjectApplicationList/>
  );
}
