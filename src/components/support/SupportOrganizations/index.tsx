"use client";
import { memo } from "react";
import SupportOrganizationCard from "../SupportOrganizationCard";

export type OrganizationsItemType = {
  id: string;
  avatar: string;
  title: string;
  location: string;
};

type SupportOrganizationsPropsType = {
  organizations: OrganizationsItemType[];
};

const SupportOrganizations: React.FC<SupportOrganizationsPropsType> = ({
  organizations,
}: SupportOrganizationsPropsType) => {
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
