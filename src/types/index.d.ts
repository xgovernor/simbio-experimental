import { SelectProps } from "@fluentui/react-components";

export type TBlood =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-"
  | undefined;

export type TeamStatus = "Active" | "Inactive" | "Pending";

type TAddress = {
  address: string;
  city: string;
  district: string;
  zip: string;
  country: string;
};

// DynamicSelect
export interface IOption {
  key?: string;
  value?: string;
  label: string;
}
export type TDynamicSelectProps = SelectProps & {
  options: IOption[];
  name: string;
};

export interface ISettingsMenuTab {
  id: string;
  name: string;
  icon: React.ReactElement;
  component?: React.ReactElement;
}

// Menu Item
export interface IMenuItem {
  id?: string;
  title: string;
  url: string;
  icon?: React.ReactElement;
}

// Settings
export type TLanguageItem = {
  key?: string;
  label: string;
  value?: string;
};

export type TTimeZoonItem = {
  key?: string;
  label: string;
  value: string;
};

export type TTimeFormat = {
  key?: string;
  label: string;
  value: string;
};

export type TDateFormat = {
  key?: string;
  label: string;
  value: string;
};

/* ***************************************************************** */
/* Support                                                           */
/* ***************************************************************** */
// Available priority types
export type TSupportMessagePriority = "high" | "medium" | "low" | "none";

// Support Message Status
export type TSupportMessageStatus = "open" | "close" | "delete" | "flag";
