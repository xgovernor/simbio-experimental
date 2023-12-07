import PageRootComponent, {  CentersResponseType, PageConfig } from "./PageRootComponent";
import { memo } from "react";


/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
async function getData(): Promise<CentersResponseType> {
    const res = await fetch("http://localhost:3000/data/blood-centers.json");
    const data = await res.json();

    return data;
}

const PageCenters = async () => {
    const data = await getData();
    const config: PageConfig = {
        analytics: true,
        settings: true,
        table: true,
    };

    return (
        <PageRootComponent data={data} config={config} />
    );
};


export default memo(PageCenters);
