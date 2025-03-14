import { memo } from "react";
import data from "@/assets/data/members.json";
import MembersTable, { TMemberItem } from "@/components/members/MembersTable";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartMemberStats from "@/components/charts/ChartMemberStats";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";

export type MembersResponseType = {
  data: TMemberItem[];
  offset: number;
  total: number;
  limit: number;
};

export type TPageConfig = {
  analytics?: boolean;
  settings?: boolean;
  members?: boolean;
};

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
  const config: TPageConfig = {
    analytics: true,
    settings: true,
    members: true,
  };

  return (
    <div className="grid grid-cols-1">
      {config.analytics && (
        <ChartMatrix>
          <ChartMemberStats />
          <ChartMemberActivity />
          <ChartMemberAgeDemographic />
          <ChartMemberStats />
        </ChartMatrix>
      )}

      <div className="px-5 pb-5">
        <MembersTable
          title="Members Table"
          description={`Showing ${data?.limit} of ${data?.total} members`}
          data={data?.data}
        />
      </div>
    </div>
  );
};

export default memo(PageMembers);
