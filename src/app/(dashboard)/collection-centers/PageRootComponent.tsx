"use client";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { FC, Suspense, memo } from "react";
import BloodCenterTable, {
  TCentersItem,
} from "@/components/bloodCenters/BloodCenterTable";

export type CentersResponseType = {
  data: TCentersItem[];
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
  data: CentersResponseType;
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
            <BloodCenterTable
              title="Blood collection centers"
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
