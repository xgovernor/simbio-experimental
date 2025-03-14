import { memo } from "react";
import dynamic from "next/dynamic";
import ChartMatrix from "@/components/charts/ChartMatrix";
const ChartMemberActivity = dynamic(
  () => import("@/components/charts/ChartMemberActivity"),
);
const ChartMemberAgeDemographic = dynamic(
  () => import("@/components/charts/ChartMemberAgeDemographic"),
);
const ChartMemberStats = dynamic(
  () => import("@/components/charts/ChartMemberStats"),
);
const ChartTeamStats = dynamic(
  () => import("@/components/charts/ChartTeamStats"),
);

const PageDashboard = async () => {
  return (
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
  );
};

export default memo(PageDashboard);
