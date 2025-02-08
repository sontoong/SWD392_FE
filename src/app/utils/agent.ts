import { AxiosResponse } from "axios";
import apiJWT from "./api";

export interface IPagination {
  page: number;
  limit: number;
  search: string;
}

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
  getPosts: (req: IPagination) => requests.post("posts/getPosts", req),
  getPostById: (postId: string) => requests.get(`posts/${postId}`),
  createPost: (data: any) => requests.post(`posts/create`, data),
  updatePost: (postId: string, data: any) =>
    requests.patch(`post/${postId}`, data),
  deletePost: (postId: string) => requests.del("posts", { postId }),
  getPostsByEnterpriseId: (enterpriseId: string) =>
    requests.get(`posts/get-by-enterprise/${enterpriseId}`),
};

const Job = {
  getJobs: () => requests.get("job-titles"),
  createJobTitle: (data: any) => requests.post("job-titles", data),
  getJobTitleByName: (jobTitleName: string) =>
    requests.get(`/search/${jobTitleName}`),
  getMostPopularJobTitles: () => requests.get("/popular"),
};

const Application = {
  getApplications: () => requests.get("applicant"),
  getApplicationById: (applicationId: string) =>
    requests.get(`applicant/detail/${applicationId}`),
  createApplication: (data: any) => requests.post("applicant/create", data),
  updateApplicationAccepted: (applicationId: number, data: any) =>
    requests.put(`applicant/accepted/${applicationId}`, data),
  updateApplicationRejected: (applicationId: number, data: any) =>
    requests.put(`applicant/rejected/${applicationId}`, data),
};

const Contract = {
  getContracts: () => requests.get("contract"),
  createContract: (data: any) => requests.post("contract/create", data),
  getContractById: (contractId: string) =>
    requests.get(`contracts/${contractId}`),
  updateContract: (contractId: string, data: any) =>
    requests.patch(`contracts/${contractId}`, data),
  getContractsByEnterpriseId: (enterpriseId: string) =>
    requests.get(`contracts/get/enterprise/${enterpriseId}`),
  getContractsByCandidateId: (candidateId: string) =>
    requests.get(`contracts/get/candidate/${candidateId}`),
  getContractsByProjectId: (postId: string) =>
    requests.get(`contracts/get/project/${postId}`),
};

const Candidate = {
  getAllCandidates: () => requests.get("/candidates/get-all-candidates"),
  viewProfile: () => requests.get("/candidates/profile"),
};

const Enterprise = {
  createRating: (data: any) => requests.post("/enterprises/rating", data),
};

const agent = {
  Post,
  Candidate,
  Enterprise,
  Job,
  Application,
  Contract,
};
export default agent;
