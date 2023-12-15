import Layout from "@/components/ui/Layout";
import { memo } from "react";

const PageRootComponent = () => {
  return (
    <Layout>
      <h1>User Profile</h1>
    </Layout>
  );
};

export default memo(PageRootComponent);
