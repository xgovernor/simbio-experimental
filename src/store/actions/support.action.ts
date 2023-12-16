import { createSlice } from "@reduxjs/toolkit";
import { StoreStateType } from "..";

export interface SupportType {
  data: {
    organization: {
      id: number;
      name: string;
      slug: string;
      avatar: string;
      address: string;
      messages: Object[];
    };
    sessions: Object[];
    organizations: Object[];
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: SupportType = {
  data: {
    organization: {
      id: 0,
      name: "Blood Donor Club New York",
      slug: "blood-donor-club-new-york",
      avatar: "/image/logo/bss.jpg",
      address: "Downtown, NY, USA",
      messages: [],
    },
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
      state.data.organization.messages = action.payload;
    },
    updateSeasons(state, action) {
      state.data.sessions = action.payload;
    },
    updateOrganizations(state, action) {
      state.data.organizations = action.payload.data;
    },
  },
});

export const selectSupport = (state: StoreStateType) => state.support;

export const { updateMessages, updateSeasons, updateOrganizations } =
  supportSlice.actions;

export default supportSlice.reducer;
