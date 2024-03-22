import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateProject, Project } from "../../models/project";
import { project } from "../../../constants/testData";
import agent, { IPagination } from "../../utils/agent";
import { AxiosError } from "axios";

const initialState: Project[] = [project];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export const fetchAllPostsPagination = createAsyncThunk(
  "post/fetchAllPostsPagination",
  async () => {
    const req: IPagination = {
      limit: 10,
      page: 1,
      search: "",
    };
    try {
      const response = await agent.Post.getPosts(req);
      return response.projects;
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          message: error.response?.data.error.message,
          status: error.response?.status,
        };
      }
    }
  },
);

export const fetchPostById = createAsyncThunk<Project, string>(
  "post/fetchPostById",
  async (postId) => {
    try {
      const response = await agent.Post.getPostById(postId);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          message: error.response?.data.error.message,
          status: error.response?.status,
        };
      }
    }
  },
);

export const createProject = createAsyncThunk<any, CreateProject>(
  "post/createProject",
  async (project) => {
    const {
      title,
      description,
      funding,
      initialFunding,
      timeToComplete,
      privacy,
      candidateRequirement,
      optionalRequirements,
      projectType,
      projectField,
    } = project;
    const userId = localStorage.getItem("userId");
    const request = {
      title,
      description,
      funding,
      candidateRequirement,
      initialFunding,
      timeToComplete,
      createdBy: userId,
      privacy,
      projectType,
      optionalRequirements,
      projectField,
    };
    try {
      const response = await agent.Post.createPost(request);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          message: error.response?.data.error.message,
          status: error.response?.status,
        };
      }
    }
  },
);

export const updatePost = createAsyncThunk<
  any,
  { projectId: string; project: Project }
>("post/updatePost", async ({ projectId, project }) => {
  const request = {
    ...project,
  };
  try {
    const response = await agent.Post.updatePost(projectId, request);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        message: error.response?.data.error.message,
        status: error.response?.status,
      };
    }
  }
});

export const deletePost = createAsyncThunk<any, string>(
  "post/deletePost",
  async (projectId) => {
    try {
      const response = await agent.Post.deletePost(projectId);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          message: error.response?.data.error.message,
          status: error.response?.status,
        };
      }
    }
  },
);

export const postReducers = postSlice.actions;

export default postSlice.reducer;
