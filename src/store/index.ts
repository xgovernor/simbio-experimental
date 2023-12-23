import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./actions/settings.action";
import userReducer from "./actions/user.action";
import bloodRequestReducer from "./actions/bloodRequest.action";
import clubReducer from "./actions/club.action";
import collectionCenterReducer from "./actions/collectionCenter.action";
import contactReducer from "./actions/contact.action";
import donationReducer from "./actions/donation.action";
import eventReducer from "./actions/event.action";
import memberReducer from "./actions/member.action";
import supportReducer from "./actions/support.action";
import teamReducer from "./actions/team.action";

const reducers = combineReducers({
  bloodRequest: bloodRequestReducer,
  club: clubReducer,
  collectionCenter: collectionCenterReducer,
  contact: contactReducer,
  donation: donationReducer,
  event: eventReducer,
  member: memberReducer,
  support: supportReducer,
  team: teamReducer,
  user: userReducer,
  settings: settingsReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type TStoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
