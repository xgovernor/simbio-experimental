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
  Baby,
  Ban,
  CircleDashed,
  Fingerprint,
  MapPin,
  PersonStanding,
  ScanEye,
  ShieldCheck,
  ShieldQuestion,
  User,
  UserMinus,
  VenetianMask,
} from "lucide-react";
import { DataTableColumnHeader } from "@/components/ui/DataGrid/DataTableColumnHeader";
import { TMemberItem } from ".";

export const columns: ColumnDef<TMemberItem>[] = [
  {
    accessorKey: "name",
    header: "User",
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
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "blood_group",
    header: "Blood group",
  },
  {
    accessorKey: "last_blood_donation",
    header: "Last donation",
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
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
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

// Filter: Status
export const roles = [
  {
    value: "Founder",
    label: "Founder",
    icon: Baby,
  },
  {
    value: "Co-Founder",
    label: "Co-Founder",
    icon: Baby,
  },
  {
    value: "Communication",
    label: "Communication",
    icon: Baby,
  },
  {
    value: "President",
    label: "President",
    icon: Baby,
  },
  {
    value: "Accountant",
    label: "Accountant",
    icon: Baby,
  },
  {
    value: "Volunteer",
    label: "Volunteer",
    icon: Baby,
  },
  {
    value: "Ambassador",
    label: "Ambassador",
    icon: ShieldQuestion,
  },
  {
    value: "Member",
    label: "Member",
    icon: User,
  },
];

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

export const filters = [
  {
    key: "gender",
    label: "Gender",
    options: gender,
  },
  {
    key: "status",
    label: "Status",
    options: statuses,
  },
  {
    key: "role",
    label: "Role",
    options: roles,
  },
  {
    key: "location",
    label: "Location",
    options: locations,
  },
];
