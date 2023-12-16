import { createSlice } from "@reduxjs/toolkit";

interface SupportType {
  data: {
    messages: Object[];
    sessions: Object[];
    organizations: Object[];
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: SupportType = {
  data: {
    messages: [],
    sessions: [],
    organizations: [],
  },
  status: "idle",
  message: null,
  error: null,
};

const supportSlice = createSlice({
  name: "support",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the  data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateMessages(state, action) {
      state.data.messages = action.payload;
    },
    updateSeasons(state, action) {
      state.data.sessions = action.payload;
    },
    updateOrganizations(state, action) {
      state.data.organizations = action.payload;
    },
  },
});

export const { updateMessages, updateSeasons, updateOrganizations } =
  supportSlice.actions;

export default supportSlice.reducer;
