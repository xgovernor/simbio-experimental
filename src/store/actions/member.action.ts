import { createSlice } from "@reduxjs/toolkit";

interface IMemberState {
  data: {
    member: Object;
    members: {
      id: string;
      avatar: string;
      name: string;
      gender: string;
      blood_group: string;
      last_blood_donation: string;
      phone: string;
      location: string;
      status: string;
      role: string;
    }[];
    total: number;
    page: number;
    limit: number;
    offset: number;
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: IMemberState = {
  data: {
    member: {},
    members: [],
    total: 0,
    page: 1,
    limit: 0,
    offset: 0,
  },
  status: "idle",
  message: null,
  error: null,
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateMembers(state, action) {
      state.data.members = action.payload;
    },
    getMember(state, action) {},
    createMember(state, action) {
      state.data.member = action.payload;
    },
  },
});

export const { updateMembers, getMember, createMember } = memberSlice.actions;

export default memberSlice.reducer;
