import PageRootComponent, { TPageConfig } from "./PageRootComponent";
import { memo } from "react";
import data from "@/assets/data/info.json";

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData() {
//     const res = await fetch("/data/info.json");
//     const data = await res.json();

//     return data;
// }

const PageSettings = async (props: any) => {
  // const data = await getData();
  const config: TPageConfig = {
    analytics: true,
    settings: true,
    data: true,
  };

  return (
    <PageRootComponent
      page={props.page || "account"}
      data={data}
      config={config}
    />
  );
};

export default memo(PageSettings);
