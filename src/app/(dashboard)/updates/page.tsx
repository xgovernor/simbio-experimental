import PageRootComponent from "./PageRootComponent";
import { memo } from "react";

const PageUpdates = async () => {
  return (
    <>
      <PageRootComponent />
    </>
  );
};

export default memo(PageUpdates);
