"use client";
import { isValid, parseISO, format } from "date-fns";

function Date({ dateString }: { dateString: string }) {
  if (!isValid(parseISO(dateString))) {
    return "No date";
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "d MMM, yyyy")}</time>;
}

export default Date;
