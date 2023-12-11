import PageRootComponent, {
  PageConfig,
  UsersResponseType,
} from "./PageRootComponent";
import { memo } from "react";
import data from "@/assets/data/members.json";

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
  const config: PageConfig = {
    analytics: true,
    settings: true,
    members: true,
  };

  return <PageRootComponent data={data} config={config} />;
};

export default memo(PageUsers);
