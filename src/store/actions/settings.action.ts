import { createSlice } from "@reduxjs/toolkit";


interface SettingsType {
  data: {
    theme: string;
    language: string;
    currency: string;
    currencySymbol: string;
    dateFormat: string;
    timeFormat: string;
    dateTimeFormat: string;
    timezone: string;
    user: {
      id: number;
      name: string;
      designation: string;
      email: string;
      role: string;
      status: number;
      avatar: string;
    }
    notification: {
      newRequest: boolean;
      newMessage: boolean;
      newMemberRequest: boolean;
      weeklySummery: boolean;
      pushNotification: boolean;
      pushNotificationSound: boolean;
      emailNotification: boolean;
      smsNotification: boolean;
    }
    accessibility: {
      keyboardShortcut: boolean;
      alertTime: number;
    }
    device?: null,
    security?: {
      password: string;
      securityQuestion: string;
      securityAnswer: string;
    },
    privacyAndData?: null;
    help?: null;
  };

  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  message: string | null;
  error: string | null
}

const initialState: SettingsType = {
  data: {
    theme: "light",
    language: "en",
    currency: "USD",
    currencySymbol: "$",
    dateFormat: "DD MMMM, YYYY",
    timeFormat: "HH:mm",
    dateTimeFormat: "DD MMMM, YYYY HH:mm",
    timezone: "Asia/Almaty",
    notification: {
      newRequest: true,
      newMessage: true,
      newMemberRequest: true,
      weeklySummery: true,
      pushNotification: true,
      pushNotificationSound: true,
      emailNotification: true,
      smsNotification: true,
    },
    accessibility: {
      keyboardShortcut: true,
      alertTime: 5,
    },
    device: null,
    security: {
      password: "",
      securityQuestion: "Who are you?",
      securityAnswer: "King",
    },
    privacyAndData: null,
    help: null,
    user: {
      id: 0,
      name: "Abu Taher Muhammad",
      designation: "Software Engineer",
      email: "muhammad@dot9.dev",
      role: "su",
      status: 0,
      avatar: "data:image/jpeg;base64,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",
    },
  },
  status: "idle",
  message: null,
  error: null
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    // We are not using any fetch actions here. As we get the data from the API through NextJS's server-side component. We only update the state here which fetched in the component.
    updateSettings(state, action) {
      state.data = action.payload;
    },
    updateTheme(state) {
      state.data.theme = state.data.theme === "light" ? "dark" : "light";
    },
    updatePassword(state, action) {
      // updatedPassword(action.payload.oldPass, action.payload.newPass);
    }
  },
});

export const selectFlight = (state: SettingsType) => state.data;

export const { updateSettings, updateTheme, updatePassword } = settingsSlice.actions;

export default settingsSlice.reducer;
