"use client";
import { Add24Regular } from "@fluentui/react-icons";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";
import TableMenu from "./TableMenu";
import { DataGrid } from "@/components/ui/DataGrid";
import { columns, filters, hiddenColumns } from "./data";
import { Button } from "@/components/ui/button";

export type TRequestItem = {
  id: string;
  avatar: string;
  name: string;
  blood_group: string;
  blood_type: string;
  quantity: string;
  delivery_date: string;
  health_issue: string;
  location: string;
  status: string;
  phone: string;
};

interface BloodRequestTablePropsType {
  className?: string;
  title: string;
  description?: string;
  data: TRequestItem[];
  rest?: object;
}

const BloodRequestTable: FC<BloodRequestTablePropsType> = ({
  className,
  title,
  description,
  data,
  ...rest
}: BloodRequestTablePropsType) => {
  const router = useRouter();

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
          <Button
            className="shadow-none"
            size="sm"
            // style={{ width: "110px" }}
            onClick={() => router.push("/blood-requests/new")}
          >
            <Add24Regular className="mr-2 h-4 w-4" />
            Add new
          </Button>
          <TableMenu />
        </div>
      </div>

      {/* Card Body */}
      <div className="overflow-x-auto pb-4">
        <DataGrid
          columns={columns}
          data={data}
          filters={filters}
          hiddenColumns={hiddenColumns}
        />
      </div>
    </section>
  );
};

export default memo(BloodRequestTable);
