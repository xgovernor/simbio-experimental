"use client";
import TeamTable, { TTeamItem } from "@/components/team/TeamTable";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { FC, memo } from "react";

export type TeamResponseType = {
  data: TTeamItem[];
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
  data: TeamResponseType;
  config: TPageConfig;
}

const PageRootComponent: FC<PageRootComponentPropsType> = ({
  data,
  config,
}: PageRootComponentPropsType) => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-[22px] p-[22px]">
        <TeamTable
          title="Team members"
          description={`Showing ${data?.limit} of ${data?.total} members`}
          data={data?.data}
        />
      </div>
    </DashboardLayout>
  );
};

export default memo(PageRootComponent);
