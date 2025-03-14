import { memo } from "react";
import data from "@/assets/data/teams.json";
import TeamsTable, { TTeamsItem } from "@/components/teams/TeamsTable";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";

export type TeamsResponseType = {
  data: TTeamsItem[];
  offset: number;
  total: number;
  limit: number;
};

export type TPageConfig = {
  analytics?: boolean;
  settings?: boolean;
  table?: boolean;
};

const PageTeams = async () => {
  // const data = await getData();
  const config: TPageConfig = {
    analytics: false,
    settings: false,
    table: true,
  };

  return (
    <div className="grid grid-cols-1 gap-5">
      {config.analytics && (
        <ChartMatrix>
          <ChartMemberActivity />
          <ChartMemberAgeDemographic />
          <ChartMemberActivity />
        </ChartMatrix>
      )}

      <div className="p-5">
        <TeamsTable
          title="Teams list"
          description={`Showing ${data?.limit} of ${data?.total} teams`}
          data={data?.data}
        />
      </div>
    </div>
  );
};

export default memo(PageTeams);
