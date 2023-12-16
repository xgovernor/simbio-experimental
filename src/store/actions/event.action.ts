import { createSlice } from "@reduxjs/toolkit";

interface EventType {
  data: {
    event: Object;
    events: Object[];
    total: number;
    page: number;
    limit: number;
    offset: number;
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: EventType = {
  data: {
    event: {},
    events: [],
    total: 0,
    page: 1,
    limit: 0,
    offset: 0,
  },
  status: "idle",
  message: null,
  error: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the  data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateEvents(state, action) {
      state.data.events = action.payload;
    },
    updateEvent(state, action) {
      state.data.event = action.payload;
    },
    createevent(state, action) {
      state.data.event = action.payload;
    },
  },
});

export const { updateEvents, updateEvent, createevent } = eventSlice.actions;

export default eventSlice.reducer;
