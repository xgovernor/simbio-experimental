"use client";
import { FC, memo } from "react";
import { TeamStatus } from "@/types";
import ChartMatrix from "@/components/charts/ChartMatrix";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import TeamsTable from "@/components/teams/TeamsTable";

export type TeamsItemType = {
    _id: string;
    avatar: string;
    title: string;
    total_member: number;
    period_from: string;
    period_to: string;
    president: string;
    vice_president?: string;
    management: string;
    status: TeamStatus;
};

export type TeamsResponseType = {
    data: TeamsItemType[];
    offset: number;
    total: number;
    limit: number;
};

export type PageConfig = {
    analytics?: boolean;
    settings?: boolean;
    table?: boolean;
};

interface PageRootComponentPropsType {
    data: TeamsResponseType;
    config: PageConfig;
}

const PageRootComponent: FC<PageRootComponentPropsType> = ({ data, config }: PageRootComponentPropsType) => {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 gap-22px">
                {config.analytics && (
                    <ChartMatrix>
                        <ChartMemberActivity />
                        <ChartMemberAgeDemographic />
                        <ChartMemberActivity />
                    </ChartMatrix>
                )}

                <TeamsTable
                    title="Teams list"
                    description={`Showing ${data?.limit} of ${data?.total} teams`}
                    data={data?.data}
                />
            </div>
        </DashboardLayout>
    );
};

export default memo(PageRootComponent);
