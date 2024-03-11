"use client";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { FC, Suspense, memo } from "react";
import ContactsTable, {
  TContactItem,
} from "@/components/contacts/ContactsTable";

export type ContactResponseType = {
  data: TContactItem[];
  offset: number;
  total: number;
  limit: number;
};

export type TPageConfig = {
  analytics?: boolean;
  settings?: boolean;
  table?: boolean;
};

interface PageRootComponentPropsType {
  data: ContactResponseType;
  config: TPageConfig;
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
