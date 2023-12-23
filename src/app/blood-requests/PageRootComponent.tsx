"use client";
import Layout from "@/components/ui/Layout";
import RequestTable, {
  RequestItemType,
} from "@/components/blood-request/BloodRequestTable";
// import ProfileDashboardHeader from "@/app/components/profileDashboard/ProfileDashboardHeader";
// import MenuBar from "@/app/components/profileDashboard/MenuBar";
import { Suspense, memo } from "react";

export type RequestResponseType = {
  data: RequestItemType[];
  offset: number;
  total: number;
  limit: number;
};

const PageRootComponent = ({ data }: { data: RequestResponseType }) => {
  return (
    <Layout>
      <div className="mt-[22px] grid grid-cols-1">
        <Suspense>
          <div className="px-[22px] pb-[22px]">
            <RequestTable
              title="Special Blood Request list"
              description={`Showing ${data?.limit} of ${data?.total} donations`}
              data={data?.data}
            />
          </div>
        </Suspense>
      </div>
    </Layout>
  );
};

export default memo(PageRootComponent);
