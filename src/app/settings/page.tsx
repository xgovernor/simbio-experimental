import PageRootComponent, { PageConfig } from "./PageRootComponent";
import { memo } from "react";


/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
async function getData() {
    const res = await fetch("http://localhost:3000/data/info.json");
    const data = await res.json();

    return data;
}

type PageProps = {
    page?: string;
};

const PageSettings: React.FC<PageProps> = async ({ page }: PageProps) => {
    const data = await getData();
    const config: PageConfig = {
        analytics: true,
        settings: true,
        data: true,
    };

    return (
        <PageRootComponent page={page || "account"} data={data} config={config} />
    );
};


export default memo(PageSettings);
