import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Project } from "../../models/project";
import { project } from "../../../constants/testData";
import agent from "../../utils/agent";
import { AxiosError } from "axios";

const initialState: Project[] = [project];

const postSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const fetchAllPostsPagination = createAsyncThunk(
  "post/fetchAllPostsPagination",
  async () => {
    try {
      const response = await agent.Post.getAllPosts();
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

export const createPost = createAsyncThunk<any, Project>(
  "post/createPost",
  async (project) => {
    const request = {
      ...project,
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
