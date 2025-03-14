import AppLayout from "@/components/ui/AppLayout";
import React, { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default layout;
