"use client";

import { memo } from "react";
import SupportOrgCard from "../SupportOrgCard";

export type OrganizationsItemType = {
  id: string;
  avatar: string;
  title: string;
  location: string;
};

type TSupportOrgListProps = {
  organizations: OrganizationsItemType[];
};

const SupportOrgList: React.FC<TSupportOrgListProps> = ({
  organizations,
}: TSupportOrgListProps) => {
  return (
    <section className="h-full space-y-3 overflow-y-auto">
      {organizations.map((organization, i) => (
        <SupportOrgCard
          key={organization.id}
          avatar={organization.avatar}
          title={organization.title}
          location={organization.location}
        />
      ))}
    </section>
  );
};

export default memo(SupportOrgList);
