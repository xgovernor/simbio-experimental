import { SelectProps } from "@fluentui/react-components";

export type BloodType = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-" | undefined;

export type TeamStatus = "active" | "inactive" | "pending";

type AddressType = {
    address: string;
    city: string;
    district: string;
    zip: string;
    country: string;
};

// DynamicSelect
export interface OptionType {
    key?: string;
    value?: string;
    label: string;
}
export type DynamicSelectPropsType = SelectProps & {
    options: OptionType[];
    name: string;
};

export interface SettingsMenuTabType {
    id: string;
    name: string;
    icon: React.ReactElement;
    component?: React.ReactElement;
}

// Menu Item
export interface MenuItemType {
    id?: string;
    title: string;
    url: string;
    icon?: React.ReactElement;
}

// Settings
export type LanguageItemType = {
    key?: string;
    label: string;
    value?: string;
};

export type TimeZoonItemType = {
    key?: string;
    label: string;
    value: string;
};

export type TimeFormatType = {
    key?: string;
    label: string;
    value: string;
};

export type DateFormatType = {
    key?: string;
    label: string;
    value: string;
};

/* ***************************************************************** */
/* Support                                                           */
/* ***************************************************************** */
// Available priority types
export type SupportMessagePriorityType = "high" | "medium" | "low" | "none";

// Support Message Status
export type SupportMessageStatusType = "open" | "close" | "delete" | "flag";
