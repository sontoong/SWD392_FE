import { AxiosResponse } from "axios";
import apiJWT from "./api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: <T>(url: string, params?: T) =>
    apiJWT.get(url, { params }).then(responseBody),
  post: <T>(url: string, body: T) => apiJWT.post(url, body).then(responseBody),
  put: <T>(url: string, body: T) => apiJWT.put(url, body).then(responseBody),
  patch: <T>(url: string, body: T) =>
    apiJWT.patch(url, body).then(responseBody),
  del: <T>(url: string, params?: T) =>
    apiJWT.delete(url, { params }).then(responseBody),
};

const Post = {
  getAllPosts: () => requests.get("posts"),
  getPostById: (postId: string) => requests.get("posts", { postId }),
  createPost: (data: any) => requests.post("posts", data),
  updatePost: (postId: string, data: any) =>
    requests.patch(`post/${postId}`, data),
  deletePost: (postId: string) => requests.del("posts", { postId }),
};

const JobTitle = {
  getAllJobTitles: () => requests.get("job-titles"),
  createJobTitle: (data: any) => requests.post("job-titles", data),
  getJobTitleByName: (jobTitleName: string) =>
    requests.get(`/search/${jobTitleName}`),
  getMostPopularJobTitles: () => requests.get("/popular"),
};

const agent = {
  Post,
  JobTitle,
};
export default agent;
