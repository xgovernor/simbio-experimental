import { createSlice } from "@reduxjs/toolkit";

interface UserType {
  user: Object;
  users: Object[];
  total: number;
  page: number;
  limit: number;
  offset: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: UserType = {
  user: {},
  users: [],
  total: 0,
  page: 1,
  limit: 0,
  offset: 0,
  status: "idle",
  message: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the  data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateUser(state, action) {
      state.user = action.payload;
    },
    updateUsers(state, action) {
      state.users = action.payload;
    },
    nextPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { updateUser, updateUsers, nextPage } = userSlice.actions;

export default userSlice.reducer;
