import {
  CredentialResponse,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { Button } from "antd";
import { jwtDecode } from "jwt-decode";

export function GoogleLoginButton() {
  const responseMessage = (response: CredentialResponse) => {
    if (response.credential) {
      console.log(jwtDecode(response.credential));
    }
  };
  const errorMessage = () => {
    console.log("error");
  };

  return <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />;
}

export function GoogleLogoutButton() {
  const logOut = () => {
    googleLogout();
  };

  return <Button onClick={logOut}>Log out</Button>;
}
