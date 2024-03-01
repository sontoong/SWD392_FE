import { EditOutlined } from "@ant-design/icons";
import { IconButton } from "../components/button/buttons";
import { useState } from "react";
import { UploadShowIcon } from "../components/input/upload-input";
import CustomModal from "../components/modal/modal";
import { Formik } from "formik";

export interface SignupFormValues {
  accountType: "Nhà tuyển dụng" | "Nguời ứng tuyển";
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  nation: string;
  phone: string;
}

export default function EnterpriseModalEditGeneralInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleSubmit = async () => {
      //Cool stuff
    };

    const initialValues: SignupFormValues = {
      accountType: "Nguời ứng tuyển",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      firstName: "",
      middleName: "",
      lastName: "",
      nation: "",
      phone: "",
    };
    
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return( 
          <>
            <IconButton onClick={showModal} icon={<EditOutlined/>}/>
            <CustomModal title="Basic Modal" open={isModalOpen} handleCancel={handleCancel} handleOk={handleOk}>
              <UploadShowIcon/>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >

              </Formik>
            </CustomModal>
          </>
    )    
}