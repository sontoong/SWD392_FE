import { googleLogout } from "@react-oauth/google";
import { Button } from "antd";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

// export function GoogleLoginButton() {
//   const responseMessage = (response: CredentialResponse) => {
//     if (response.credential) {
//       console.log(jwtDecode(response.credential));
//     }
//   };
//   const errorMessage = () => {
//     console.log("error");
//   };

//   return <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />;
// }

export function GoogleLoginButton() {
  const { handleLoginGoogle } = useAuth();

  const navigate = useNavigate();
  async function loginGoogle() {
    handleLoginGoogle(navigate);
  }
  return (
    <button
      className="flex gap-2 rounded-lg border border-slate-200 px-4 py-2 text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-300"
      onClick={loginGoogle}
    >
      <img
        className="h-6 w-6"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span>Đăng nhập với Google</span>
    </button>
  );
}

export function GoogleLogoutButton() {
  const logOut = () => {
    googleLogout();
  };

  return <Button onClick={logOut}>Log out</Button>;
}
