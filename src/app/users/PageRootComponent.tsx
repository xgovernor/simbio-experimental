import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { memo } from "react";


const PageRootComponent = () => {
    return (
        <DashboardLayout>
            <h1>Users List</h1>
        </DashboardLayout>
    );
};


export default memo(PageRootComponent);