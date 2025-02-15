import CandidateHeader from "../ui/header";
import CandidateFooter from "../ui/footer";
import CandidateContent from "../ui-candidate/content";
import { Layout } from "antd";
// import { useCallback, useEffect, useState } from "react";
// import agent from "../../utils/agent";
// import { roleCheckSuccess } from "../../redux/slice/roleSlice";
// import { useAppDispatch } from "../../redux/hook";
// import { LoadingOutlined } from "@ant-design/icons";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // const [loading, setLoading] = useState(true);
  // const dispatch = useAppDispatch();

  // const initApp = useCallback(async () => {
  //   try {
  //     const fetchData = async () => {
  //       const response = await agent.Role.checkRole();
  //       dispatch(roleCheckSuccess(response));
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   initApp().then(() => setLoading(false));
  // }, [initApp]);

  // if (loading)
  //   return (
  //     <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  //   );

  return (
    <Layout className="min-h-screen">
      <Layout className="bg-white">
        <CandidateHeader />
        <CandidateContent children={children} />
        <CandidateFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
