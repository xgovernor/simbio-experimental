"use client";
import lightTheme from "@/assets/theme/lightSimbioTheme.json";
import { StoreProvider } from "@/store/StoreProvider";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <FluentProvider theme={lightTheme} className="bg-[transparent]">
        {children}
      </FluentProvider>
    </StoreProvider>
  );
}
