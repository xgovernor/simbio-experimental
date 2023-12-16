import { createSlice } from "@reduxjs/toolkit";

interface DonationType {
  data: {
    donation: Object;
    donations: Object[];
    total: number;
    page: number;
    limit: number;
    offset: number;
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: DonationType = {
  data: {
    donation: {},
    donations: [],
    total: 0,
    page: 1,
    limit: 0,
    offset: 0,
  },
  status: "idle",
  message: null,
  error: null,
};

const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the  data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateDonations(state, action) {
      state.data.donations = action.payload;
    },
    updateDonation(state, action) {
      state.data.donation = action.payload;
    },
    createDonation(state, action) {
      state.data.donation = action.payload;
    },
  },
});

export const { updateDonations, updateDonation, createDonation } =
  donationSlice.actions;

export default donationSlice.reducer;
