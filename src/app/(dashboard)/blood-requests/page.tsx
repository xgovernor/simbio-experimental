import PageRootComponent from "./PageRootComponent";
import { memo } from "react";
import data from "@/assets/data/requests.json";
import { TRequestItem } from "@/components/blood-request/BloodRequestTable";

export type RequestResponseType = {
  data: TRequestItem[];
  offset: number;
  total: number;
  limit: number;
};

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData() {
//     const res = await fetch("/data/requests.json");
//     const data = await res.json();

//     return data;
// }

const PageBloodRequest = async () => {
  // const data = await getData();

  return <PageRootComponent data={data} />;
};

export default memo(PageBloodRequest);
