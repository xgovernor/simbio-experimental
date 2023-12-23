import { FC, memo } from "react";
import BloodCenterTableMenu from "./BloodCenterTableMenu";
import { DataGrid } from "@/components/ui/DataGrid";
import { columns, filters } from "./data";

export type TCentersItem = {
  id: string;
  avatar: string;
  name: string;
  area: string;
  location: string;
  facility: string;
  phone: string;
  email: string;
  status: string;
  mapUrl: string;
};

interface TCentersTableProps {
  title: string;
  description?: string;
  data: TCentersItem[];
}

const CentersTable: FC<TCentersTableProps> = ({
  title,
  description,
  data,
}: TCentersTableProps) => {
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
          <BloodCenterTableMenu />
        </div>
      </div>

      {/* Card Body */}
      <div className="pb-4">
        <DataGrid columns={columns} data={data} filters={filters} />
      </div>
    </section>
  );
};
export default memo(CentersTable);
