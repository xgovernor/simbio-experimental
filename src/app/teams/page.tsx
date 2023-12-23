import PageRootComponent, { PageConfig } from "./PageRootComponent";
import { memo } from "react";
import data from "@/assets/data/teams.json";

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData(): Promise<TeamsResponseType> {
//     const res = await fetch("/data/teams.json");
//     const data = await res.json();

//     return data;
// }

const PageTeams = async () => {
  // const data = await getData();
  const config: PageConfig = {
    analytics: false,
    settings: false,
    table: true,
  };

  return <PageRootComponent data={data} config={config} />;
};

export default memo(PageTeams);
