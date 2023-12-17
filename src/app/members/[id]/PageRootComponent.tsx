import Layout from "@/components/ui/Layout";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { memo } from "react";

const PageRootComponent = () => {
  return (
    <DashboardLayout>
      <h1>Single member page</h1>
    </DashboardLayout>
  );
};

export default memo(PageRootComponent);
