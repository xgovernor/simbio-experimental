import { memo } from "react";
import data from "@/assets/data/users.json";
import UsersTable, { TUsersItem } from "@/components/users/UsersTable";
import ChartMatrix from "@/components/charts/ChartMatrix";
import ChartMemberStats from "@/components/charts/ChartMemberStats";
import ChartMemberAgeDemographic from "@/components/charts/ChartMemberAgeDemographic";
import ChartMemberActivity from "@/components/charts/ChartMemberActivity";

export type UsersResponseType = {
  data: TUsersItem[];
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
// async function getData(): Promise<UsersResponseType> {
//   const res = await fetch("/api/users");
//   const data = await res.json();

//   return data;
// }

const UsersPage = async () => {
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

      {/* Render the clubs table */}
      <UsersTable
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

export default memo(UsersPage);
