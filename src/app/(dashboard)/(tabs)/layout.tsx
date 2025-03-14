import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
