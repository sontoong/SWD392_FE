import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { Envs } from "../app/utils/env";

const firebaseConfig = {
  apiKey: Envs.apiKey,
  authDomain: Envs.authDomain,
  projectId: Envs.projectId,
  storageBucket: Envs.storageBucket,
  messagingSenderId: Envs.messagingSenderId,
  appId: Envs.appId,
  measurementId: Envs.measurementId,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
export { app, storage };
