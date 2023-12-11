"use client";
import lightTheme from "@/assets/theme/lightSimbioTheme.json";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FluentProvider theme={lightTheme} className="bg-[transparent]">
      {children}
    </FluentProvider>
  );
}
