import PageRootComponent from "./PageRootComponent";
import { memo } from "react";
import data from "@/assets/data/requests.json";

export type RequestItemType = {
  _id: string;
  avatar: string;
  name: string;
  blood_group: string;
  blood_type: string;
  quantity: string;
  delivery_date: string;
  health_issue: string;
  location: string;
  status: string;
  phone: string;
};

export type RequestResponseType = {
  data: RequestItemType[];
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
