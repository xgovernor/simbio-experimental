import { FC, memo } from "react";
import ClubsTableMenu from "./ClubsTableMenu";
import { DataGrid } from "@/components/ui/DataGrid";
import { columns, filters } from "./data";

export type TClubItem = {
  id: string;
  avatar: string;
  name: string;
  location: string;
  total_member: number;
  total_donation: number;
  phone: string;
  email: string;
  status: string;
};

interface TClubsTableProps {
  title: string;
  description?: string;
  data: TClubItem[];
}

const ClubsTable: FC<TClubsTableProps> = ({
  title,
  description,
  data,
}: TClubsTableProps) => {
  return (
    <section
      className="gap grid h-full w-full gap-3 rounded bg-white"
      style={{
        boxShadow: "0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)",
      }}
    >
      {/* Card Header */}
      <div className="relative flex w-full flex-nowrap justify-between gap-3 pe-2 ps-5 pt-4">
        <div className="">
          <h1 className="text-[16px] font-bold leading-[22px] text-[#242424]">
            {title}
          </h1>
          <p className="text-xs text-[#616161]">{description}</p>
        </div>

        <div className="flex gap-2">
          <ClubsTableMenu />
        </div>
      </div>

      {/* Card Body */}
      <div className="overflow-x-auto pb-4">
        <DataGrid columns={columns} data={data} filters={filters} />
      </div>
    </section>
  );
};

export default memo(ClubsTable);
