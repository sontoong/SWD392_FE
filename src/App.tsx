import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes/route";
import { App, ConfigProvider } from "antd";

function AppWrapper() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <App>
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
  );
}

export default AppWrapper;
