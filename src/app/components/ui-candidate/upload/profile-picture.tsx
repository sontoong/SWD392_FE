import { useState } from "react";
import { UploadImg } from "../../input/upload-img";
import { App, GetProp, UploadFile, UploadProps } from "antd";
import { PrimaryButton } from "../../button/buttons";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

export default function UploadProfilePicture() {
  const { message } = App.useApp();

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  console.log(fileList);
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
        message.success("Upload thành công.");
      })
      .catch(() => {
        message.error("Upload thất bại.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const handleChange: UploadProps["onChange"] = ({
    fileList: newFileList,
    file,
  }) => {
    if (file.type != "image/jpeg") {
      setFileList([]);
      return;
    }
    setFileList(newFileList);
  };

  return (
    <div>
      <UploadImg
        listType="picture-circle"
        maxCount={1}
        onChange={handleChange}
      />
      <PrimaryButton
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Đang upload ảnh" : "Upload ảnh"}
      </PrimaryButton>
    </div>
  );
}
