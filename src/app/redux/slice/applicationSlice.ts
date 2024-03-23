import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../utils/agent";
import { AxiosError } from "axios";
import { Applicant } from "../../models/applicant";

const initialState: Applicant[] = [];

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
});

export const createApplication = createAsyncThunk<
  any,
  Pick<Applicant, "projectId" | "money" | "questions" | "time">
>("application/createApplication", async (data) => {
  const userId = localStorage.getItem("userId");
  const { projectId, questions, money, time } = data;
  console.log(data);
  try {
    const response = await agent.Application.createApplication({
      projectId,
      candidateId: userId,
      questions,
      money,
      time,
    });
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

export const getApplications = createAsyncThunk(
  "application/getApplications",
  async () => {
    try {
      const response = await agent.Application.getApplications();
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

export const setApplicationStatus = createAsyncThunk(
  "application/setApplicationStatus",
  async (data: { id: number; status: string }) => {
    try {
      if (data.status === "accepted") {
        const response = await agent.Application.updateApplicationAccepted(
          data.id,
          {},
        );
        return response;
      }
      if (data.status === "rejected") {
        const response = await agent.Application.updateApplicationRejected(
          data.id,
          {},
        );
        return response;
      }
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

export const applicationReducers = applicationSlice.actions;

export default applicationSlice.reducer;
