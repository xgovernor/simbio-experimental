import { memo } from "react";
import data from "@/assets/data/clubs.json";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartMemberStats from "@/components/charts/ChartMemberStats";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ClubsTable, { TClubItem } from "@/components/clubs/ClubsTable";

export type ClubsResponseType = {
  data: TClubItem[];
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
// async function getData(): Promise<ClubsResponseType> {
//     const res = await fetch("/data/clubs.json");
//     const data = await res.json();

//     return data;
// }

const PageClubs = async () => {
  // const data = await getData();
  const config: TPageConfig = {
    analytics: false,
    settings: false,
    table: true,
  };

  return (
    <div className="grid grid-cols-1 gap-5 p-5">
      {/* Render the admin analytics section if in analytics mode */}
      {config.analytics && (
        <ChartMatrix>
          <ChartMemberStats />
          <ChartMemberAgeDemographic />
          <ChartMemberActivity />
        </ChartMatrix>
      )}

      <ClubsTable
        title="Clubs Table"
        description={`Showing ${data?.limit} of ${data?.total} clubs`}
        data={data?.data}
        // columns={columns}
        // data={tasks}
        // filters={{ priorities, statuses }}
      />
    </div>
  );
};

export default memo(PageClubs);
