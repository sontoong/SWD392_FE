import { useState } from "react";
import { UploadImg } from "../../input/upload-img";
import { App, GetProp, UploadFile, UploadProps } from "antd";
import { PrimaryButton } from "../../button/buttons";
import { UploadFileStatus } from "antd/es/upload/interface";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
interface uploadedImage {
  uid: string;
  name: string;
  status: UploadFileStatus | undefined;
  url: string;
}

export default function UploadOutsideProjectPicture(props: {
  value?: string[];
}) {
  const { message } = App.useApp();

  console.log(props.value);
  let uploadedList: uploadedImage[] = [];
  if (props.value) {
    uploadedList = props.value.map((imgUrl, index) => {
      return {
        uid: `${-index}`,
        name: "image.png",
        status: "done",
        url: imgUrl,
      };
    });
  }
  console.log(uploadedList);

  const [fileList, setFileList] = useState<UploadFile[]>(uploadedList);
  console.log(fileList.length);
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
    if (file.type != "image/jpeg" && file.type != "image/png") {
      setFileList([]);
      return;
    }
    setFileList(newFileList);
  };

  return (
    <div>
      <UploadImg
        listType="picture-card"
        maxCount={5}
        onChange={handleChange}
        fileList={fileList}
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
