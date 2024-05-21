import PageRootComponent, { TPageConfig } from "./PageRootComponent";
import { memo } from "react";
import data from "@/assets/data/contacts.json";

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData(): Promise<ContactResponseType> {
//     const res = await fetch("/data/contacts.json");
//     const data = await res.json();

//     return data;
// }

const PageContacts = async () => {
  // const data = await getData();
  const config: TPageConfig = {
    analytics: true,
    settings: true,
    table: true,
  };

  return <PageRootComponent data={data} config={config} />;
};

export default memo(PageContacts);
