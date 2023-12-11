import Layout from "@/components/ui/Layout";
import { memo } from "react";

const PageRootComponent = () => {
  return (
    <Layout>
      <div className="w-full p-[22px]">
        <h1 className="text-2xl font-bold">Events</h1>
        <p className="mt-1">List of upcoming events</p>
      </div>
    </Layout>
  );
};

export default memo(PageRootComponent);
