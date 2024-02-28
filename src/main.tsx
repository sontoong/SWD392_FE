import "nprogress/nprogress.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store } from "./app/redux/store.ts";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Envs } from "./app/utils/env.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={Envs.clientId}>
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>,
);
