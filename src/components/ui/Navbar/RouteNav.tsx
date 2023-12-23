"use client";
import { Button } from "@fluentui/react-components";
import {
  ChevronLeft24Regular,
  ChevronRight24Regular,
} from "@fluentui/react-icons";
import { useRouter } from "next/navigation";
import { memo } from "react";

interface IRouteNavProps {
  className?: string;
  rest?: object;
}

const RouteNav = ({ className, ...rest }: IRouteNavProps) => {
  const router = useRouter();

  // Backward Button
  const goBack = () => {
    router.back();
  };

  // Forward Button
  const goForward = () => {
    router.forward();
  };

  return (
    <div
      className="flex h-[24px] w-[52px] items-center justify-between"
      {...rest}
    >
      <div className="flex w-6 items-center justify-start">
        <Button
          className="hover:opacity-70"
          icon={
            <ChevronLeft24Regular
              primaryFill="#fff"
              title="Go to previous page"
            />
          }
          onClick={goBack}
          // disabled={!router.asPath}
          appearance="transparent"
        />
      </div>

      <div className="flex w-6 items-center justify-end">
        <Button
          className="hover:opacity-70"
          icon={
            <ChevronRight24Regular primaryFill="#fff" title="Go to next page" />
          }
          onClick={goForward}
          // disabled={!router.route}
          appearance="transparent"
        />
      </div>
    </div>
  );
};

export default memo(RouteNav);
