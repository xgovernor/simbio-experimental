import { memo } from "react";
import PageRootComponent from "./PageRootComponent";

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<UsersResponseType>} The retrieved data.
 */
// async function getData(): Promise<UsersResponseType> {
//     const res = await fetch("/data/team.json");
//     const data = await res.json();

//     return data;
// }

const PageUsers = async () => {
  // const data = await getData();

  return <PageRootComponent />;
};

export default memo(PageUsers);
