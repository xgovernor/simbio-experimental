import { createSlice } from "@reduxjs/toolkit";

interface ContactType {
  data: {
    contact: Object;
    contacts: Object[];
    total: number;
    page: number;
    limit: number;
    offset: number;
  };
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: ContactType = {
  data: {
    contact: {},
    contacts: [],
    total: 0,
    page: 1,
    limit: 0,
    offset: 0,
  },
  status: "idle",
  message: null,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the  data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateContacts(state, action) {
      state.data.contacts = action.payload;
    },
    updateContact(state, action) {
      state.data.contact = action.payload;
    },
    createContact(state, action) {
      state.data.contact = action.payload;
    },
  },
});

export const { updateContacts, updateContact, createContact } =
  contactSlice.actions;

export default contactSlice.reducer;
