import { createSlice } from "@reduxjs/toolkit";

interface ISettings {
  team: Object[];
  teams: Object[];
  total: number;
  page: number;
  limit: number;
  offset: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: ISettings = {
  team: [],
  teams: [],
  total: 0,
  page: 1,
  limit: 0,
  offset: 0,
  status: "idle",
  message: null,
  error: null,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the  data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateTeam(state, action) {
      state.team = action.payload;
    },
    updateTeams(state, action) {
      state.teams = action.payload;
    },
    nextPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { updateTeam, updateTeams, nextPage } = settingsSlice.actions;

export default settingsSlice.reducer;
