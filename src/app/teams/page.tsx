import PageRootComponent, { PageConfig, TeamsResponseType } from "./PageRootComponent";
import { memo } from "react";

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
async function getData(): Promise<TeamsResponseType> {
    const res = await fetch("http://localhost:3000/data/teams.json");
    const data = await res.json();

    return data;
}

const PageTeams = async () => {
    const data = await getData();
    const config: PageConfig = {
        analytics: false,
        settings: false,
        table: true,
    };

    return (
        <PageRootComponent data={data} config={config} />
    );
};


export default memo(PageTeams);
