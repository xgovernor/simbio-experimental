import { createSlice } from "@reduxjs/toolkit";

interface SettingsType {
  data: string;
  theme: string;
}

const initialState: SettingsType = {
  data: "",
  theme: "light",
};

const flightSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings(state, action) {
      state.data = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const selectFlight = (state: SettingsType) => state.data;

export const { updateSettings, toggleTheme } = flightSlice.actions;

export default flightSlice.reducer;
