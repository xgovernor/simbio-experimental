import { createSlice } from "@reduxjs/toolkit";

interface IClub {
  data: {
    club: Object;
    clubs: Object[];
    total: number;
    page: number;
    limit: number;
    offset: number;
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: IClub = {
  data: {
    club: {},
    clubs: [],
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
  name: "club",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the  data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateClubs(state, action) {
      state.data.clubs = action.payload;
    },
    updateClub(state, action) {
      state.data.club = action.payload;
    },
    createClub(state, action) {
      state.data.club = action.payload;
    },
  },
});

export const { updateClubs, updateClub, createClub } = clubSlice.actions;

export default clubSlice.reducer;
