import PageRootComponent, { TPageConfig } from "./PageRootComponent";
import { memo } from "react";
import data from "@/assets/data/blood-centers.json";

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData(): Promise<CentersResponseType> {
//     const res = await fetch("/data/blood-centers.json");
//     const data = await res.json();

//     return data;
// }

const PageCenters = async () => {
  // const data = await getData();
  const config: TPageConfig = {
    analytics: true,
    settings: true,
    table: true,
  };

  return <PageRootComponent data={data} config={config} />;
};

export default memo(PageCenters);
