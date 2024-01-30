"use client";
import TeamMemberForm from "@/components/team/TeamMemberForm";
import Layout from "@/components/ui/Layout";
import { PeopleTeam24Regular } from "@fluentui/react-icons";
import { memo } from "react";

const BREADCRUMB_MENU = [
  {
    title: "Home",
    url: "/analytics",
  },
  {
    title: "Team",
    url: "/team",
  },
  {
    title: "New",
  },
];

const PageNewMember: React.FC = () => {
  return (
    <Layout
      breadcrumb={BREADCRUMB_MENU}
      title="Add new team member"
      icon={<PeopleTeam24Regular />}
    >
      <section className="flex h-full w-full flex-row max-md:flex-wrap flex-nowrap items-start justify-start p-[22px]">
        <div className="h-full w-full">
          <div className="h-full w-full max-w-full md:pe-[22px]">
            <TeamMemberForm />
          </div>
        </div>
        <div className="flex h-full w-full max-w-[289px] flex-col flex-nowrap items-start justify-start"></div>
      </section>
    </Layout>
  );
};

export default memo(PageNewMember);
