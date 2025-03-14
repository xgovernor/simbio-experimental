import { BreadcrumbLinkType } from "@/components/ui/Canvas/CanvasBreadcrumb";
import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { TStoreState } from "..";

export interface ILayout {
  breadcrumb: BreadcrumbLinkType[] | null;
  title: string | null;
  icon: ReactNode | null;
  message: string | null;
  error: string | null;
}

const initialState: ILayout = {
  breadcrumb: null,
  title: null,
  icon: null,
  message: null,
  error: null,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setBreadcrumb(state, action) {
      state.breadcrumb = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setIcon(state, action) {
      state.icon = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLayout(state, action) {
      console.log("=====================");
      console.log("SATE", action.payload);
      state = { ...state, ...action.payload };
    },
    clearLayout(state) {
      state.icon = null;
      state.title = null;
      state.breadcrumb = null;
    },
  },
});

export const selectLayout = (state: TStoreState) => state.layout;

export const {
  setBreadcrumb,
  setTitle,
  setIcon,
  setMessage,
  setError,
  setLayout,
  clearLayout,
} = layoutSlice.actions;

export default layoutSlice.reducer;
