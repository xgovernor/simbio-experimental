"use client";
import ChartMatrix from "@/components/charts/ChartMatrix";
import { memo } from "react";
import dynamic from 'next/dynamic'
const ChartMemberActivity = dynamic(() => import('@/components/charts/ChartMemberActivity'))
const ChartMemberAgeDemographic = dynamic(() => import('@/components/charts/ChartMemberAgeDemographic'))
const ChartMemberStats = dynamic(() => import('@/components/charts/ChartMemberStats'))
const ChartTeamStats = dynamic(() => import('@/components/charts/ChartTeamStats'))
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout"

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
