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

const Admin = {
  getCandidates: () => requests.get("admin/candidate"),
  getCandidate: (username: string) =>
    requests.get(`admin/candidate/${username}`),
  updateCandidate: (username: string, data: string) =>
    requests.patch(`admin/candidate/${username}`, data),
  getEnterprises: () => requests.get("admin/enterprise"),
  getEnterprise: (username: string) =>
    requests.get(`admin/enterprise/${username}`),
  updateEnterprise: (username: string, data: string) =>
    requests.patch(`admin/enterprise/${username}`, data),
  verifyUser: (username: string, data: { role: string }) =>
    requests.patch(`admin/verify/${username}`, data),
  deactivateUser: (username: string, data: any) =>
    requests.patch(`admin/deactivate/${username}`, data),
};

const agent = {
  Admin,
};
export default agent;
