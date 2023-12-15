import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./reducers/settingsReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
