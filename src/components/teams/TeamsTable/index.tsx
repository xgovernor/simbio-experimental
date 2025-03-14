"use client";

import { FC, memo } from "react";
import TeamsTableMenu from "./TeamsTableMenu";
import { DataGrid } from "@/components/ui/DataGrid";
import { columns, filters } from "./data";

export type TTeamsItem = {
  id: string;
  avatar: string;
  name: string;
  total_member: number;
  period_from: string;
  period_to: string;
  president: string;
  vice_president?: string;
  management: string;
  status: string; // TeamStatus;
};

interface TTeamsTableProps {
  title: string;
  description?: string;
  data: TTeamsItem[];
}

const TeamsTable: FC<TTeamsTableProps> = ({
  title,
  description,
  data,
}: TTeamsTableProps) => {
  return (
    <section
      className="gap grid h-full w-full gap-3 rounded-sm bg-white"
      style={{
        boxShadow: "0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)",
      }}
    >
      {/* Card Header */}
      <div className="relative flex w-full flex-nowrap justify-between gap-3 ps-5 pe-2 pt-4">
        <div className="">
          <h1 className="text-base leading-5 font-bold text-[#242424]">
            {title}
          </h1>
          <p className="text-xs text-[#616161]">{description}</p>
        </div>

        <div className="flex gap-2">
          <TeamsTableMenu />
        </div>
      </div>

      {/* Card Body */}
      <div className="overflow-x-auto pb-4">
        <DataGrid columns={columns} data={data} filters={filters} />
      </div>
    </section>
  );
};

export default memo(TeamsTable);
