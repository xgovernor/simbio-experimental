import PageRootComponent, {
  MembersResponseType,
  PageConfig,
} from "./PageRootComponent";
import { memo } from "react";
import data from "@/assets/data/members.json";

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<MembersResponseType>} The retrieved data.
 */
// async function getData(): Promise<MembersResponseType> {
//     const res = await fetch("/data/members.json");
//     const data = await res.json();

//     return data;
// }

const PageMembers = async () => {
  // const data = await getData();
  const config: PageConfig = {
    analytics: true,
    settings: true,
    members: true,
  };

  return <PageRootComponent data={data} config={config} />;
};

export default memo(PageMembers);
