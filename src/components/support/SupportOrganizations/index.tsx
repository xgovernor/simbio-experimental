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
    <section className="min-h-max max-w-full overflow-y-auto overflow-x-hidden rounded-lg px-1">
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
