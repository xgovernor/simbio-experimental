import { auth } from "@/lib/auth";
import PageRootComponent from "./PageRootComponent";
import { memo } from "react";
import { Session } from "next-auth";

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

const PageProfile = async () => {
  // const data = await getData();
  const session = (await auth()) as Session;

  return <PageRootComponent />;
};

export default memo(PageProfile);
