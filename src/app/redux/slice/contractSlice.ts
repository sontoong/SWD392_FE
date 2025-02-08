import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../utils/agent";
import { AxiosError } from "axios";
import { Contract } from "../../models/project";

const initialState: Contract[] = [];

const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {},
});

export const createContract = createAsyncThunk<
  any,
  Pick<Contract, "applicantId" | "fund" | "depositType" | "date">
>("contract/createContract", async (data) => {
  const { applicantId, fund, depositType, date } = data;
  try {
    const response = await agent.Contract.createContract({
      applicantId,
      fund,
      depositType,
      date,
      status: "pending",
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

export const getContracts = createAsyncThunk(
  "contract/getContracts",
  async () => {
    try {
      const response = await agent.Contract.getContracts();
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

export const getContractsCandidate = createAsyncThunk(
  "contract/getContractsCandidate",
  async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const response = await agent.Contract.getContractsByCandidateId(userId);
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

export const contractReducers = contractSlice.actions;

export default contractSlice.reducer;
