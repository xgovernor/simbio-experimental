import { createSlice } from "@reduxjs/toolkit";

interface IBloodRequest {
  data: {
    request: Object;
    requests: Object[];
    total: number;
    page: number;
    limit: number;
    offset: number;
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: IBloodRequest = {
  data: {
    request: {},
    requests: [],
    total: 0,
    page: 1,
    limit: 0,
    offset: 0,
  },
  status: "idle",
  message: null,
  error: null,
};

const bloodRequestSlice = createSlice({
  name: "blood_request",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the  data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateRequests(state, action) {
      state.data.requests = action.payload;
    },
    getRequest(state, action) {
      state.data.request = action.payload;
    },
    createRequest(state, action) {
      state.data.request = action.payload;
    },
  },
});

export const { updateRequests, getRequest, createRequest } =
  bloodRequestSlice.actions;

export default bloodRequestSlice.reducer;
