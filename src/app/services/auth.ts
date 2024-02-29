// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import { app } from "../../lib/firebase";

// const auth = getAuth(app);
// auth.useDeviceLanguage();

// export const GoogleLogin = async () => {
//   try {
//     const provider = new GoogleAuthProvider();
//     const result = await signInWithPopup(auth, provider);
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential?.accessToken;
//     console.log(token);
//     const user = result.user;
//     const idToken = await user.getIdToken();
//     return idToken;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };
