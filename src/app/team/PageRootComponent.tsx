"use client";
import TeamTable from "@/components/team/TeamTable";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { FC, memo } from "react";

export type TeamItemType = {
    _id: string;
    avatar: string;
    name: string;
    designation: string;
    period_from: string;
    period_to: string;
    phone: string;
    email: string;
    location: string;
    status: string;
};

export type TeamResponseType = {
    data: TeamItemType[];
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
    data: TeamResponseType;
    config: PageConfig;
}

const PageRootComponent: FC<PageRootComponentPropsType> = ({ data, config }: PageRootComponentPropsType) => {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 gap-22px p-[22px]">
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
