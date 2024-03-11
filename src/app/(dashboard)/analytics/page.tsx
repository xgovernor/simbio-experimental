import PageRootComponent from "./PageRootComponent";
import { memo } from "react";

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData(): Promise {
//     const res = await fetch("/data/requests.json");
//     const data = await res.json();

//     return data;
// }


const PageDashboard = async () => {
  // const data = await getData();

  return <PageRootComponent />;
};

export default memo(PageDashboard);
