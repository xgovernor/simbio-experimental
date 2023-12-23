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
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { MapPin, ScanEye, VenetianMask } from "lucide-react";
import { DataTableColumnHeader } from "@/components/ui/DataGrid/DataTableColumnHeader";
import { TTeamItem } from ".";

export const columns: ColumnDef<TTeamItem>[] = [
  {
    accessorKey: "name",
    header: "Name",
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
            href={`/members/${row.original.id}`}
            hrefLang="en"
          >
            {row.original.name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  // {
  //   id: "period",
  //   header: "Period",
  //   cell: ({ row }) => {
  //     const user = row.original;

  //     return (
  //       <span className="flex items-center gap-2">
  //         {user.period_from} - {user.period_to}
  //       </span>
  //     );
  //   },
  // },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
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

// Filter: Designation
export const designation = [
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

// Filter: Period
export const period = [
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

export const filters = [
  {
    key: "designation",
    label: "Designation",
    options: designation,
  },
  {
    key: "location",
    label: "Location",
    options: locations,
  },
  {
    key: "period",
    label: "Period",
    options: period,
  },
];
