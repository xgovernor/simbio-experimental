import { memo } from "react";
import data from "@/assets/data/team.json";
import TeamTable, { TTeamItem } from "@/components/team/TeamTable";

export type TeamResponseType = {
  data: TTeamItem[];
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
// async function getData(): Promise<TeamResponseType> {
//     const res = await fetch("/data/team.json");
//     const data = await res.json();

//     return data;
// }

const PageTeam = async () => {
  // const data = await getData();
  // const config: TPageConfig = {
  //   analytics: false,
  //   settings: false,
  //   table: true,
  // };

  return (
    <div className="grid grid-cols-1 gap-5 p-5">
      <TeamTable
        title="Team members"
        description={`Showing ${data?.limit} of ${data?.total} members`}
        data={data?.data}
      />
    </div>
  );
};

export default memo(PageTeam);
