import { createSlice } from "@reduxjs/toolkit";

interface ICollectionCenter {
  data: {
    center: Object;
    centers: Object[];
    total: number;
    page: number;
    limit: number;
    offset: number;
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: ICollectionCenter = {
  data: {
    center: {},
    centers: [],
    total: 0,
    page: 1,
    limit: 0,
    offset: 0,
  },
  status: "idle",
  message: null,
  error: null,
};

const clubSlice = createSlice({
  name: "collection_center",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the  data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateCenters(state, action) {
      state.data.centers = action.payload;
    },
    updateCenter(state, action) {
      state.data.center = action.payload;
    },
    createCenter(state, action) {
      state.data.center = action.payload;
    },
  },
});

export const { updateCenters, updateCenter, createCenter } = clubSlice.actions;

export default clubSlice.reducer;
