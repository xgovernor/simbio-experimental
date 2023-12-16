import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./actions/settingsReducer";
import userReducer from "./actions/userReducer";

const reducers = combineReducers({
  settings: settingsReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
