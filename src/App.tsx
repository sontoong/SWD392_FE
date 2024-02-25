import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes/route";
import { App } from "antd";

function AppWrapper() {
  return (
    <App>
      <RouterProvider router={router} />
    </App>
  );
}

export default AppWrapper;
