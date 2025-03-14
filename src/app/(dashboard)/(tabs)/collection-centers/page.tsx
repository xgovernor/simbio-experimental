import { memo } from "react";
import data from "@/assets/data/blood-centers.json";
import BloodCenterTable, {
  TCentersItem,
} from "@/components/bloodCenters/BloodCenterTable";

export type CentersResponseType = {
  data: TCentersItem[];
  offset: number;
  total: number;
  limit: number;
};

export type TPageConfig = {
  analytics?: boolean;
  settings?: boolean;
  table?: boolean;
};

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData(): Promise<CentersResponseType> {
//     const res = await fetch("/data/blood-centers.json");
//     const data = await res.json();

//     return data;
// }

const PageCenters = async () => {
  // const data = await getData();
  const config: TPageConfig = {
    analytics: true,
    settings: true,
    table: true,
  };

  return (
    <div className="grid grid-cols-1">
      <div className="p-5">
        <BloodCenterTable
          title="Blood collection centers"
          description={`Showing ${data?.limit} of ${data?.total} Contacts`}
          data={data?.data}
        />
      </div>
    </div>
  );
};

export default memo(PageCenters);
