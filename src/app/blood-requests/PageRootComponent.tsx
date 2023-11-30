"use client"
import Layout from "@/components/ui/Layout";
import RequestTable from "@/components/blood-request/BloodRequestTable";
// import ProfileDashboardHeader from "@/app/components/profileDashboard/ProfileDashboardHeader";
// import MenuBar from "@/app/components/profileDashboard/MenuBar";
import { PeopleAdd24Regular } from "@fluentui/react-icons";
import { memo } from "react";

export type RequestItemType = {
    _id: string;
    avatar: string;
    name: string;
    blood_group: string;
    blood_type: string;
    quantity: string;
    delivery_date: string;
    health_issue: string;
    location: string;
    status: string;
    phone: string;
};

export type RequestResponseType = {
    data: RequestItemType[];
    offset: number;
    total: number;
    limit: number;
};



const PageRootComponent = ({ data }: { data: RequestResponseType }) => {
    return (
        <Layout title="Special blood requests" icon={<PeopleAdd24Regular />}>
            {/* <ProfileDashboardHeader />
            <MenuBar /> */}

            <RequestTable
                title="Special Blood Request list"
                description={`Showing ${data?.limit} of ${data?.total} donations`}
                data={data?.data}
            />
        </Layout>
    );
};


export default memo(PageRootComponent);