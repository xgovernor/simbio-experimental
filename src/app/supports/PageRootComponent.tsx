"use client";
import MessagesTable from "@/components/support/MessagesTable";
import SupportOrganizations, {
  OrganizationsItemType,
} from "@/components/support/SupportOrganizations";
import Layout from "@/components/ui/Layout";
import {
  selectSupport,
  updateOrganizations,
} from "@/store/actions/support.action";
import { PeopleAdd24Regular } from "@fluentui/react-icons";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export type TPageConfig = {
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

type TSupportOrganizationsProps = {
  organizations: OrganizationsResponseType;
  config: TPageConfig;
};

const SupportPage: React.FC<TSupportOrganizationsProps> = ({
  organizations,
  config,
}: TSupportOrganizationsProps) => {
  const dispatch = useDispatch();
  const supportState = useSelector(selectSupport);

  useEffect(() => {
    dispatch(updateOrganizations(organizations));
  }, [dispatch, organizations]);

  return (
    <Layout title="Support messages" icon={<PeopleAdd24Regular />} className="">
      <div
        className="relative grid h-full gap-5 overflow-hidden p-[22px]"
        style={{
          maxHeight: "calc(100vh - 136px)",
          gridTemplateColumns: "22rem 1fr",
          // height: "calc(100vh - 184px)",
        }}
      >
        {/* Support Card List */}
        <SupportOrganizations organizations={organizations.data} />

        {/* section content  */}
        <MessagesTable
          title={supportState.data.organization.name}
          address={supportState.data.organization.address}
          logo={supportState.data.organization.avatar}
        />
      </div>
    </Layout>
  );
};

export default memo(SupportPage);
