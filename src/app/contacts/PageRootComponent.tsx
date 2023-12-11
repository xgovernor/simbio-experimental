"use client";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { FC, Suspense, memo } from "react";
import { BloodType } from "@/types";
import ContactsTable from "@/components/contacts/ContactsTable";

export type ContactItemType = {
  _id: string;
  avatar: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  status: string; // "available" | "offline" | "busy";
};

export type ContactResponseType = {
  data: ContactItemType[];
  offset: number;
  total: number;
  limit: number;
};

export type PageConfig = {
  analytics?: boolean;
  settings?: boolean;
  table?: boolean;
};

interface PageRootComponentPropsType {
  data: ContactResponseType;
  config: PageConfig;
}

const PageRootComponent: FC<PageRootComponentPropsType> = ({
  data,
  config,
}: PageRootComponentPropsType) => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1">
        <Suspense>
          <div className="p-[22px]">
            <ContactsTable
              title="Contacts Table"
              description={`Showing ${data?.limit} of ${data?.total} Contacts`}
              data={data?.data}
            />
          </div>
        </Suspense>
      </div>
    </DashboardLayout>
  );
};

export default memo(PageRootComponent);
