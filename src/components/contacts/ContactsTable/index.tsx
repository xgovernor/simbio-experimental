import { FC, memo } from "react";
import ContactsTableMenu from "./ContactsTableMenu";
import { DataGrid } from "@/components/ui/DataGrid";
import { columns, filters } from "./data";

export type TContactItem = {
  id: string;
  avatar: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  status: string; // "available" | "offline" | "busy";
};

interface TContactsTableProps {
  title: string;
  description?: string;
  data: TContactItem[];
}

const ContactsTable: FC<TContactsTableProps> = ({
  title,
  description,
  data,
}: TContactsTableProps) => {
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
          <ContactsTableMenu />
        </div>
      </div>

      {/* Card Body */}
      <div className="overflow-x-auto pb-4">
        <DataGrid columns={columns} data={data} filters={filters} />
      </div>
    </section>
  );
};

export default memo(ContactsTable);
