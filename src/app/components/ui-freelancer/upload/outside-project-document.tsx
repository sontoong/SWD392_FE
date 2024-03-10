import { useEffect, useState } from "react";
import { UploadImg } from "../../input/upload-img";
import { UploadFile, UploadProps } from "antd";
import { UploadFileStatus } from "antd/es/upload/interface";
import { OutsideProject } from "../../../models/project";

interface uploadedImage {
  uid: string;
  name: string;
  status: UploadFileStatus | undefined;
  url: string;
}

export default function UploadOutsideProjectDocument(props: {
  value?: OutsideProject["images"];
  setDocument: React.Dispatch<
    React.SetStateAction<OutsideProject["projectDocumentImages"] | undefined>
  >;
}) {
  const { value, setDocument } = props;
  let uploadedList: uploadedImage[] = [];
  if (value) {
    uploadedList = value.map((img, index) => {
      return {
        uid: `${-index}`,
        name: img.name,
        status: "done",
        url: img.url ?? "error",
      };
    });
  }

  const [fileList, setFileList] = useState<UploadFile[]>(uploadedList);

  useEffect(() => {
    // const reformatImageList = fileList.map((img) => {
    //   if (img.originFileObj) {
    //     return {
    //       name: img.name,
    //       file: img.originFileObj,
    //     };
    //   } else return { name: img.name, url: img.url };
    // });
    // setDocument(reformatImageList);
  }, [fileList, setDocument]);

  const handleChange: UploadProps["onChange"] = ({ file, fileList }) => {
    if (file.type != "image/jpeg" && file.type != "image/png") {
      setFileList([]);
      return;
    }
    setFileList(fileList);
  };

  return (
    <UploadImg
      listType="picture-card"
      maxCount={1}
      onChange={handleChange}
      fileList={fileList}
    />
  );
}
