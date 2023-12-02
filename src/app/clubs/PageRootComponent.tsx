"use client";
import { FC, memo } from "react";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartMemberStats from "@/components/charts/ChartMemberStats";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import ClubsTable from "@/components/clubs/ClubsTable";

export type ClubItemType = {
    _id: string;
    avatar: string;
    name: string;
    location: string;
    total_member: number;
    total_donation: number;
    phone: string;
    email: string;
    status: string;
};

export type ClubsResponseType = {
    data: ClubItemType[];
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
    data: ClubsResponseType;
    config: PageConfig;
}

/**
 * Renders the Clubs Page component.
 *
 * @param isSettings - Boolean indicating whether it is in settings mode.
 * @param isAnalytics - Boolean indicating whether it is in analytics mode.
 * @param data - Data containing club information.
 * @returns The Clubs Page component.
 */
const PageRootComponent: FC<PageRootComponentPropsType> = ({ data, config }: PageRootComponentPropsType) => {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 gap-22px p-[22px]">
                {/* Render the admin analytics section if in analytics mode */}
                {config.analytics && (
                    <ChartMatrix>
                        <ChartMemberStats />
                        <ChartMemberAgeDemographic />
                        <ChartMemberActivity />
                    </ChartMatrix>
                )}

                {/* Render the clubs table */}
                <ClubsTable
                    title="Clubs Table"
                    description={`Showing ${data?.limit} of ${data?.total} clubs`}
                    data={data?.data}
                />
            </div>
        </DashboardLayout>
    );
};

export default memo(PageRootComponent);
