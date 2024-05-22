"use client";
import { FC, Suspense, memo } from "react";
import ChartMatrix from "@/components/charts/ChartMatrix";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import TeamsTable, { TTeamsItem } from "@/components/teams/TeamsTable";

export type TeamsResponseType = {
  data: TTeamsItem[];
  offset: number;
  total: number;
  limit: number;
};

export type TPageConfig = {
  analytics?: boolean;
  settings?: boolean;
  table?: boolean;
};

interface PageRootComponentPropsType {
  data: TeamsResponseType;
  config: TPageConfig;
}

const PageRootComponent: FC<PageRootComponentPropsType> = ({
  data,
  config,
}: PageRootComponentPropsType) => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-[22px]">
        {config.analytics && (
          <ChartMatrix>
            <ChartMemberActivity />
            <ChartMemberAgeDemographic />
            <ChartMemberActivity />
          </ChartMatrix>
        )}

        <Suspense>
          <div className="p-[22px]">
            <TeamsTable
              title="Teams list"
              description={`Showing ${data?.limit} of ${data?.total} teams`}
              data={data?.data}
            />
          </div>
        </Suspense>
      </div>
    </DashboardLayout>
  );
};

export default memo(PageRootComponent);
