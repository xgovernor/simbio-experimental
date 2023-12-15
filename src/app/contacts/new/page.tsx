"use client";
import NewContactForm from "@/components/contacts/NewContactForm";
import TeamMemberForm from "@/components/team/TeamMemberForm";
import Layout from "@/components/ui/Layout";
import { PeopleTeam24Regular } from "@fluentui/react-icons";
import { memo } from "react";

const BREADCRUMB_MENU = [
  {
    title: "Home",
    url: "/dashboard",
  },
  {
    title: "Team",
    url: "/team",
  },
  {
    title: "New",
  },
];

const PageNewContact: React.FC = () => {
  return (
    <Layout
      breadcrumb={BREADCRUMB_MENU}
      title="Add new club"
      icon={<PeopleTeam24Regular />}
    >
      <section className="flex h-full w-full flex-row flex-nowrap items-start justify-start p-[22px]">
        <div className="h-full w-full">
          <div className="h-full w-full max-w-full pe-[22px]">
            <NewContactForm />
          </div>
        </div>
        <div className="flex h-full w-full max-w-[289px] flex-col flex-nowrap items-start justify-start"></div>
      </section>
    </Layout>
  );
};

export default memo(PageNewContact);
