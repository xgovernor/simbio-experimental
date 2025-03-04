"use client";
import { ReactNode, useRef, useState } from "react";
import {
  FluentProvider,
  teamsDarkTheme,
  SSRProvider,
  RendererProvider,
  createDOMRenderer,
  renderToStyleElements,
  IdPrefixProvider,
} from "@fluentui/react-components";
import { useServerInsertedHTML } from "next/navigation";
import { useSelector } from "react-redux";
import lightTheme from "@/assets/theme/lightSimbioTheme.json";

export function Providers({ children }: { children: ReactNode }) {
  const { data } = useSelector((state: any) => state.settings);
  const [renderer] = useState(() => createDOMRenderer());
  const didRenderRef = useRef(false);

  useServerInsertedHTML(() => {
    if (didRenderRef.current) {
      return;
    }

    didRenderRef.current = true;

    return <>{renderToStyleElements(renderer)}</>;
  });

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <IdPrefixProvider value="d9-">
        <FluentProvider
          theme={data.theme === "light" ? lightTheme : teamsDarkTheme}
          className="bg-[transparent]"
        >
          {children}
          </FluentProvider>
          </IdPrefixProvider>
      </SSRProvider>
    </RendererProvider>
  );
}
