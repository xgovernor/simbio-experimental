"use client";
import BloodRequestForm from "@/components/blood-request/BloodRequestForm";
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
    title: "Requests",
    url: "/requests",
  },
  {
    title: "New",
  },
];

const PageNewBloodRequest: React.FC = () => {
  return (
    <Layout
      breadcrumb={BREADCRUMB_MENU}
      title="Add new request"
      icon={<PeopleAdd24Regular />}
    >
      <section className="flex h-full w-full flex-row max-md:flex-wrap flex-nowrap items-start justify-start p-[22px]">
        <div className="h-full w-full">
          <div className="h-full w-full max-w-full md:pe-[22px]">
            {/* Alerts Area */}
            <div className="h-full w-full">
              {/* <Alert title="New member added" /> */}
            </div>

            <BloodRequestForm />
          </div>
        </div>
        <div className="flex h-full w-full max-w-[289px] flex-col flex-nowrap items-start justify-start"></div>
      </section>
    </Layout>
  );
};

export default memo(PageNewBloodRequest);
