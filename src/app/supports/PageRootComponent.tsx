"use client";
import MessagesTable from "@/components/support/MessagesTable";
import SupportOrganizations, { OrganizationsItemType } from "@/components/support/SupportOrganizations";
import Layout from "@/components/ui/Layout";
import { PeopleAdd24Regular } from "@fluentui/react-icons";
import { memo } from "react";


export type PageConfig = {
    analytics?: boolean;
    settings?: boolean;
    organizations: true;
    messages?: boolean;
};

export type OrganizationsResponseType = {
    data: OrganizationsItemType[];
    offset: number;
    total: number;
    limit: number;
};

type SupportOrganizationsPropsType = {
    organizations: OrganizationsResponseType;
    config: PageConfig;
};

const SupportPage: React.FC<SupportOrganizationsPropsType> = ({ organizations, config}: SupportOrganizationsPropsType) => {
    return (
        <Layout title="Support messages" icon={<PeopleAdd24Regular />} className="">
            <div
            className=" grid gap-5 overflow-hidden p-[22px]"
            style={{
                gridTemplateColumns: "22rem 1fr",
                height: "calc(100vh - 184px)",
            }}
        >
            {/* Support Card List */}
            <SupportOrganizations organizations={organizations.data} />

            {/* section content  */}
            <MessagesTable />
        </div>
        </Layout>
    );
};

export default memo(SupportPage);
