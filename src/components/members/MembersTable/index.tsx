import { FC, memo } from "react";
import MembersTableMenu from "./MembersTableMenu";
import { columns, filters } from "./data";
import { DataGrid } from "@/components/ui/DataGrid";

export type TMemberItem = {
  id: string;
  avatar: string;
  name: string;
  gender: string;
  blood_group: string; // "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-"; // TBlood;
  last_blood_donation: string;
  phone: string;
  location: string;
  status: string;
  role: string;
};

interface TMembersTableProps {
  className?: string;
  title: string;
  description?: string;
  data: TMemberItem[];
  rest?: object;
}

const MembersTable: FC<TMembersTableProps> = ({
  className,
  title,
  description,
  data,
  ...rest
}: TMembersTableProps) => {
  return (
    <>
      <section
        className="gap relative grid h-full w-full gap-3 overflow-hidden rounded bg-white"
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
            <MembersTableMenu />
          </div>
        </div>

        {/* Card Body */}
        <div className="overflow-x-auto pb-4">
          <DataGrid columns={columns} data={data} filters={filters} />
        </div>
      </section>
    </>
  );
};

export default memo(MembersTable);
