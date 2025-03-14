import { FC, ReactNode, memo } from "react";
import DashboardHeader from "../DashboardHeader";
import DashboardMenuBar from "../DashboardMenuBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <>
      <DashboardHeader />
      <DashboardMenuBar />

      <div className="w-full">{children}</div>
    </>
  );
};

export default memo(DashboardLayout);
