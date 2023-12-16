"use client";
import lightTheme from "@/assets/theme/lightSimbioTheme.json";
import { StoreProvider } from "@/store/StoreProvider";
import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import { useDispatch, useSelector } from "react-redux";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useSelector((state: any) => state.settings);

  return (
    // <StoreProvider>
    <FluentProvider theme={data.theme === "light" ? lightTheme : teamsDarkTheme} className="bg-[transparent]">
      {children}
    </FluentProvider>
    // </StoreProvider>
  );
}
