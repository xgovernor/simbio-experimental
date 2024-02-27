"use client";
import { memo } from "react";
import SupportOrganizationCard from "../SupportOrganizationCard";

export type OrganizationsItemType = {
  id: string;
  avatar: string;
  title: string;
  location: string;
};

type TSupportOrganizationsProps = {
  organizations: OrganizationsItemType[];
};

const SupportOrganizations: React.FC<TSupportOrganizationsProps> = ({
  organizations,
}: TSupportOrganizationsProps) => {
  return (
    <section className="flex flex-col gap-3">
      {organizations.map((organization, i) => (
        <SupportOrganizationCard
          key={organization.id}
          avatar={organization.avatar}
          title={organization.title}
          location={organization.location}
        />
      ))}
    </section>
  );
};

export default memo(SupportOrganizations);
