import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Project } from "../../models/project";
import agent from "../../utils/agent";
import { AxiosError } from "axios";

const initialState: Project["projectField"][] = [];

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
});

export const fetchJobsPagination = createAsyncThunk(
  "job/fetchJobsPagination",
  async () => {
    try {
      const response = await agent.Job.getJobs();
      return response.data;
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

export const jobReducers = jobSlice.actions;

export default jobSlice.reducer;
