"use client";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartTeamStats from "@/components/charts/ChartTeamStats";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { memo } from "react";


const PageRootComponent = () => {
    return (
        <DashboardLayout>
            <ChartMatrix>
                <ChartTeamStats />
                <ChartTeamStats />
                <ChartTeamStats />
                <ChartTeamStats />
                <ChartTeamStats />
                <ChartTeamStats />
                <ChartTeamStats />
                <ChartTeamStats />
                <ChartTeamStats />
                <ChartTeamStats />
            </ChartMatrix>
        </DashboardLayout>
    );
};


export default memo(PageRootComponent);