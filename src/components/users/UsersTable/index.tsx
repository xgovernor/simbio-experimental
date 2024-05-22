import { memo } from "react";
import { columns, filters } from "./data";
import UsersTableMenu from "./UsersTableMenu";
import { DataGrid } from "@/components/ui/DataGrid";

export type TUsersItem = {
  id: string;
  avatar: string;
  name: string;
  status: string;
  role: string;
  email: string;
  phone: string;
  org_id: string;
  organization: string;
  location: string;
};

interface IUsersTableProps {
  title: string;
  description?: string;
  data: TUsersItem[];
}

function UsersTable({ title, description, data }: IUsersTableProps) {
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
          <UsersTableMenu />
        </div>
      </div>

      {/* Card Body */}
      <div className="overflow-x-auto pb-4">
        <DataGrid columns={columns} data={data} filters={filters} />
      </div>
    </section>
  );
}
export default memo(UsersTable);
