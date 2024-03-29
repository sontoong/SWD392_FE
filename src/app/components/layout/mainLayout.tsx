import MySider from "../ui/sider";
import MyHeader from "../ui/header";
import MyFooter from "../ui/footer";
import MyContent from "../ui/content";
import { Layout, Spin } from "antd";
import { useCallback, useEffect, useState } from "react";
import agent from "../../utils/agent";
import { roleCheckSuccess } from "../../redux/slice/roleSlice";
import { useAppDispatch } from "../../redux/hook";
import { LoadingOutlined } from "@ant-design/icons";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    try {
      const fetchData = async () => {
        const response = await agent.Role.checkRole();
        dispatch(roleCheckSuccess(response));
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  if (loading)
    return (
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    );

  return (
    <Layout className="min-h-screen">
      <MySider></MySider>
      <Layout className="bg-white">
        <MyHeader />
        <MyContent children={children} />
        <MyFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
