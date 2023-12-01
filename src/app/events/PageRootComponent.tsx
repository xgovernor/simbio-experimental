import Layout from "@/components/ui/Layout";
import { memo } from "react";


const PageRootComponent = () => {
    return (
        <Layout>
            <h1>Events</h1>
        </Layout>
    );
};


export default memo(PageRootComponent);