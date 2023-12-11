import { SupportMessagePriorityType, SupportMessageStatusType } from "../types";

// CSS Attribute Type
export type GetColorWithKeyParamAttributeKey = "bg" | "border" | "text";

// List of keys available function dictionary
export type GetColorWithKeyParamType =
  | SupportMessagePriorityType
  | SupportMessageStatusType;

// Function Type
export type GetColorWithKey = (
  key: string, // GetColorWithKeyParamType,
  attributeType: GetColorWithKeyParamAttributeKey,
) => string | undefined;

/**
 *
 * @param key
 * @param attributeType
 * @returns {string} string
 */
export const getColorWithKey: GetColorWithKey = (key, attributeType) => {
  // Returns default value color when no `key` or `attributeType` given.
  if (!key || !attributeType) {
    return "";
  }

  // for background
  if (attributeType === "bg") {
    // Background Dictionary
    const dict: { [key: string]: string } = {
      high: "bg-red-600",
      medium: "bg-yellow-400",
      low: "bg-green-600",
      none: "bg-blue-600",
      open: "bg-blue-600",
      close: "bg-green-600",
      delete: "bg-grey-600",
      flag: "bg-red-600",
    };

    return dict[key];
  }

  // For text
  if (attributeType === "text") {
    // Background Dictionary
    const dict: { [key: string]: string } = {
      high: "text-red-600",
      medium: "text-yellow-400",
      low: "text-green-600",
      none: "text-blue-600",
      open: "text-blue-600",
      close: "text-transparent",
      delete: "text-grey-400",
      flag: "text-red-600",
    };

    return dict[key];
  }

  // For border
  if (attributeType === "border") {
    // Background Dictionary
    const dict: { [key: string]: string } = {
      high: "border-red-600",
      medium: "border-yellow-400",
      low: "border-green-600",
      none: "border-blue-600",
      open: "border-blue-600",
      close: "border-transparent",
      delete: "border-grey-400",
      flag: "border-red-600",
    };

    // Getting & returning color class according to priority
    return dict[key];
  }
};
