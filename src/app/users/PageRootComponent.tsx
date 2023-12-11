"use client";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { FC, Suspense, memo } from "react";
import { BloodType } from "@/types";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import ChartMemberStats from "@/components/charts/ChartMemberStats";
import MembersTable from "@/components/members/MembersTable";

export type UsersItemType = {
  id: string;
  avatar: string;
  name: string;
  gender: string;
  blood_group: string; // BloodType;
  last_blood_donation: string;
  phone: string;
  location: string;
  status: string;
  preferred_location: string;
};

export type UsersResponseType = {
  data: UsersItemType[];
  offset: number;
  total: number;
  limit: number;
};

export type PageConfig = {
  analytics?: boolean;
  settings?: boolean;
  members?: boolean;
};

interface PageRootComponentPropsType {
  data: UsersResponseType;
  config: PageConfig;
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
