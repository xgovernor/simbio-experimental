"use client";
import { FC, ReactNode, memo } from "react";
import DashboardHeader from "../DashboardHeader";
import DashboardMenuBar from "../DashboardMenuBar";
import Layout from "../../Layout";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }: DashboardLayoutProps) => {
    return (
        <Layout>
            <DashboardHeader />
            <DashboardMenuBar />

            <div className="w-full p-22px">{children}</div>
        </Layout>
    );
};

export default memo(DashboardLayout);