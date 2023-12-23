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
import {
  Ban,
  CircleDashed,
  Fingerprint,
  MapPin,
  ShieldCheck,
  ShieldQuestion,
  UserMinus,
} from "lucide-react";
import { TClubItem } from ".";
import { DataTableColumnHeader } from "@/components/ui/DataGrid/DataTableColumnHeader";

export const columns: ColumnDef<TClubItem>[] = [
  {
    accessorKey: "name",
    header: "Club",
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
            href={`/clubs/${row.original.id}`}
            hrefLang="en"
          >
            {row.original.name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "status",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    accessorKey: "total_member",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Member" />
    ),
  },
  {
    accessorKey: "total_donation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Donation" />
    ),
  },
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
              Copy club ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// Filter: Status
export const statuses = [
  {
    value: "Active",
    label: "Active",
    icon: ShieldCheck,
  },
  {
    value: "Pending", // Need to be reviewed.
    label: "Pending",
    icon: CircleDashed,
  },
  {
    value: "Suspend", // Temporary Blocked. Active upon suspension/request.
    label: "Suspend",
    icon: ShieldQuestion,
  },
  {
    value: "Banned", // Forever blocked.
    label: "Banned",
    icon: Ban,
  },
  {
    value: "Cancelled", // Applied for membership. But cancelled by reviewer.
    label: "Cancelled",
    icon: Fingerprint,
  },
  {
    value: "Removed", // Soft delete.
    label: "Removed",
    icon: UserMinus,
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
];

export const filters = [
  {
    key: "status",
    label: "Status",
    options: statuses,
  },
  {
    key: "location",
    label: "Location",
    options: locations,
  },
];
