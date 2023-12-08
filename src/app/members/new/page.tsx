"use client";
import BloodRequestForm from "@/components/blood-request/BloodRequestForm";
import MemberForm from "@/components/members/MemberForm";
import Layout from "@/components/ui/Layout";
// import Alert from "@/components/ui/Alert";
import { PeopleAdd24Regular } from "@fluentui/react-icons";
import { memo } from "react";

const BREADCRUMB_MENU = [
    {
        title: "Home",
        url: "/dashboard",
    },
    {
        title: "Members",
        url: "/members",
    },
    {
        title: "New",
    },
];

const PageNewMember: React.FC = () => {
    return (
        <Layout breadcrumb={BREADCRUMB_MENU} title="Add new request" icon={<PeopleAdd24Regular />}>
            <section className="w-full h-full p-[22px] flex flex-row flex-nowrap items-start justify-start"
            >
                <div className="w-full h-full"
                >
                    <div
                        className="w-full max-w-full h-full pe-[22px]"
                    >
                        {/* Alerts Area */}
                        <div className="w-full h-full"
                        >
                            {/* <Alert title="New member added" /> */}
                        </div>

                        <MemberForm />
                    </div>
                </div>
                <div className="w-full max-w-[289px] h-full flex flex-col flex-nowrap items-start justify-start"
                ></div>
            </section>
        </Layout>
    );
};

export default memo(PageNewMember);
