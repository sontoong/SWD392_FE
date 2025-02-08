import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/loginSlice";
import headerReducer from "./slice/headerSlice.ts";
import postReducer from "./slice/postSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
  post: postReducer,
});

export default rootReducer;
