import { memo } from "react";
import data from "@/assets/data/funds.json";
import FundTable, { TFundItem } from "@/components/funds/FundTable";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";

export type DonationResponseType = {
  data: TFundItem[];
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
// async function getData(): Promise<DonationResponseType> {
//     const res = await fetch("/datafunds.json");
//     const data = await res.json();

//     return data;
// }

const PageDonations = async () => {
  // const data = await getData();
  const config: TPageConfig = {
    analytics: true,
    settings: true,
    table: true,
  };

  return (
    <div className="grid grid-cols-1">
      {config.analytics && (
        <ChartMatrix>
          <ChartMemberActivity />
          <ChartMemberAgeDemographic />
        </ChartMatrix>
      )}

      <div className="px-5 pb-5">
        <FundTable
          title="Funds"
          description={`Showing ${data?.limit} of ${data?.total} donations`}
          data={data?.data}
        />
      </div>
    </div>
  );
};

export default memo(PageDonations);
