"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { MapPin, PersonStanding, ScanEye, VenetianMask } from "lucide-react";
import { DataTableColumnHeader } from "@/components/ui/DataGrid/DataTableColumnHeader";
import { TRequestItem } from ".";

export const columns: ColumnDef<TRequestItem>[] = [
  {
    accessorKey: "name",
    header: "Patient",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Image
            src={row.original.avatar}
            alt={row.original.name}
            width={28}
            height={28}
            className="h-7 w-7 rounded-full border border-[#f0f0f0]"
          />
          <Link
            className="text-sm font-semibold"
            href={`/blood-requests/${row.original.id}`}
            hrefLang="en"
          >
            {row.original.name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "blood_group",
    enableHiding: true,
  },
  {
    accessorKey: "quantity",
  },
  {
    accessorKey: "blood_type",
    enableHiding: true,
  },
  {
    id: "blood",
    header: "Blood",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          {row.original.blood_group} ({row.original.blood_type} •{" "}
          {row.original.quantity})
        </div>
      );
    },
  },
  {
    accessorKey: "delivery_date",
    header: "Delivery",
  },
  {
    accessorKey: "health_issue",
    header: "Health issue",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="data-[state=open]:bg-accent -ml-3 h-8"
            >
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>Ask for review</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const hiddenColumns = { "blood_group": false, "quantity": false, "blood_type": false };

// Filter: Telecom Operator
export const gender = [
  {
    value: "Male",
    label: "Male",
    icon: PersonStanding,
  },
  {
    value: "Female",
    label: "Female",
    icon: ScanEye,
  },
  {
    value: "Trans",
    label: "Trans",
    icon: VenetianMask,
  },
];

// Filter: Location
export const locations = [
  {
    value: "ZYL",
    label: "Sylhet",
    icon: MapPin,
  },
  {
    value: "DAC",
    label: "Dhaka",
    icon: MapPin,
  },
  {
    value: "CTG",
    label: "Chattogram",
    icon: MapPin,
  },
];

// Filter: Blood Group
export const blood_groups = [
  {
    value: "A+",
    label: "A+",
    icon: CircleIcon,
  },
  {
    value: "A-",
    label: "A-",
    icon: CircleIcon,
  },
  {
    value: "B+",
    label: "B+",
    icon: CircleIcon,
  },
  {
    value: "B-",
    label: "B-",
    icon: CircleIcon,
  },
  {
    value: "AB+",
    label: "AB+",
    icon: CircleIcon,
  },
  {
    value: "AB-",
    label: "AB-",
    icon: CircleIcon,
  },
  {
    value: "O+",
    label: "O+",
    icon: CircleIcon,
  },
  {
    value: "O-",
    label: "O-",
    icon: CircleIcon,
  },
];

// Filter: Blood Group
export const substance = [
  {
    value: "Plasma",
    label: "Plasma",
    icon: CircleIcon,
  },
  {
    value: "Platelet",
    label: "Platelet",
    icon: CircleIcon,
  },
  {
    value: "Double red cell",
    label: "Double red cell",
    icon: CircleIcon,
  },
  {
    value: "Whole blood cell",
    label: "Whole blood cell",
    icon: CircleIcon,
  },
];

export const filters = [
  {
    key: "blood_group",
    label: "Blood Group",
    options: blood_groups,
  },
  {
    key: "blood_type",
    label: "Substance",
    options: substance,
  },
  {
    key: "location",
    label: "Location",
    options: locations,
  },
  {
    key: "delivery_date",
    label: "Delivery",
    options: [], // TODO: Put Calender
  },
];
