"use client";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import ChartMemberStats from "@/components/charts/ChartMemberStats";
import ChartTeamStats from "@/components/charts/ChartTeamStats";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { memo } from "react";


const PageRootComponent = () => {
    return (
        <DashboardLayout>
            <ChartMatrix>
                <ChartTeamStats />
                <ChartMemberAgeDemographic />
                <ChartMemberActivity />
                <ChartMemberStats />
                <ChartTeamStats />
                <ChartMemberActivity />
                <ChartTeamStats />
                <ChartTeamStats />
                <ChartMemberActivity />
                <ChartTeamStats />
                <ChartMemberAgeDemographic />
                <ChartTeamStats />
                <ChartMemberStats />
                <ChartTeamStats />
            </ChartMatrix>
        </DashboardLayout>
    );
};


export default memo(PageRootComponent);
