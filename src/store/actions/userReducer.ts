import { createSlice } from "@reduxjs/toolkit";

interface IUserInitialState {
  users: string[];
}

const initialState: IUserInitialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateReducer(state, action) {
      state.users = action.payload;
    },
  },
});

export const users = (state: IUserInitialState) => state.users;

export const { updateReducer } = userSlice.actions;

export default userSlice.reducer;
