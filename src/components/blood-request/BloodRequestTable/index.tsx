"use client";
import { Button } from "@fluentui/react-components";
import { Add24Regular } from "@fluentui/react-icons";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";
import BloodRequestTableMenu from "./BloodRequestTableMenu";
import { DataGrid } from "@/components/ui/DataGrid";
import { columns, filters } from "./data";

export type RequestItemType = {
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
  data: RequestItemType[];
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
  const COLUMN = [
    {
      key: "patient",
      name: "Patient",
      fieldName: "patient",
      minWidth: 250,
      maxWidth: 250,
      className: "min-w-[255px]",
    },
    {
      key: "blood",
      name: "Blood",
      fieldName: "blood",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: "delivery_date",
      name: "Delivery",
      fieldName: "delivery_date",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: "healthIssue",
      name: "Health issue",
      fieldName: "healthIssue",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: "location",
      name: "Location",
      fieldName: "location",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: "status",
      name: "Status",
      fieldName: "status",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: "phone",
      name: "Phone",
      fieldName: "phone",
      minWidth: 100,
      maxWidth: 100,
    },
  ];

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
            appearance="primary"
            icon={<Add24Regular />}
            // size="small"
            style={{ width: "110px" }}
            onClick={() => router.push("/blood-requests/new")}
          >
            Add new
          </Button>
          <BloodRequestTableMenu />
        </div>
      </div>

      {/* Card Body */}
      <div className="pb-4">
        <DataGrid columns={columns} data={data} filters={filters} />
      </div>
    </section>
  );
};

export default memo(BloodRequestTable);
