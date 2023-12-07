"use client";
import { FC, Suspense, memo } from "react";
import ChartMatrix from "@/components/charts/ChartMatrix";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import DonationTable from "@/components/donations/DonationTable";

export type DonationItemType = {
    _id: string;
    avatar: string;
    name: string;
    amount: string;
    date: string;
    location: string;
    phone: string;
    email: string;
    reference: string;
};

export type DonationResponseType = {
    data: DonationItemType[];
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
    data: DonationResponseType;
    config: PageConfig;
}

const PageRootComponent: FC<PageRootComponentPropsType> = ({ config, data }: PageRootComponentPropsType) => {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1">
                {config.analytics && (
                    <ChartMatrix>
                        <ChartMemberActivity />
                        <ChartMemberAgeDemographic />
                    </ChartMatrix>
                )}

                <Suspense>
                    <div className="px-[22px] pb-[22px]">
                        <DonationTable
                            title="Donor's list"
                            description={`Showing ${data?.limit} of ${data?.total} donations`}
                            data={data?.data}
                        />
                    </div>
                </Suspense>
            </div>
        </DashboardLayout>
    );
};


export default memo(PageRootComponent);
