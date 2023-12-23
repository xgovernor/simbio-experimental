"use client";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { FC, Suspense, memo } from "react";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import ChartMemberStats from "@/components/charts/ChartMemberStats";
import MembersTable, { TMemberItem } from "@/components/members/MembersTable";

export type MembersResponseType = {
  data: TMemberItem[];
  offset: number;
  total: number;
  limit: number;
};

export type TPageConfig = {
  analytics?: boolean;
  settings?: boolean;
  members?: boolean;
};

interface PageRootComponentPropsType {
  data: MembersResponseType;
  config: TPageConfig;
}

const PageRootComponent: FC<PageRootComponentPropsType> = ({
  data,
  config,
}: PageRootComponentPropsType) => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1">
        {config.analytics && (
          <ChartMatrix>
            <ChartMemberStats />
            <ChartMemberActivity />
            <ChartMemberAgeDemographic />
            <ChartMemberStats />
          </ChartMatrix>
        )}

        <Suspense>
          <div className="px-[22px] pb-[22px]">
            <MembersTable
              title="Members Table"
              description={`Showing ${data?.limit} of ${data?.total} members`}
              data={data?.data}
            />
          </div>
        </Suspense>
      </div>
    </DashboardLayout>
  );
};

export default memo(PageRootComponent);
