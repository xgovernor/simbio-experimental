"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  DotsHorizontalIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import {
  Antenna,
  ArrowUpDown,
  Baby,
  Ban,
  Binary,
  Bot,
  Church,
  CircleDashed,
  Fingerprint,
  MapPin,
  QrCode,
  Shield,
  ShieldCheck,
  ShieldQuestion,
  User,
  UserMinus,
} from "lucide-react";
import { UsersItemType } from ".";
import { DataTableColumnHeader } from "@/components/ui/DataGrid/DataTableColumnHeader";

export const columns: ColumnDef<UsersItemType>[] = [
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
            href={`/users/${row.original.id}`}
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
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
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
    accessorKey: "organization",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Organization" />
    ),
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
    value: "SU",
    label: "Super User",
    icon: ShieldCheck,
  },
  {
    value: "Admin",
    label: "Admin",
    icon: Shield,
  },
  {
    value: "Volunteer",
    label: "Todo",
    icon: Baby,
  },
  {
    value: "Ambassador",
    label: "Ambassador",
    icon: ShieldQuestion,
  },
  {
    value: "Developer",
    label: "Developer",
    icon: Binary,
  },
  {
    value: "Auditor",
    label: "Auditor",
    icon: QrCode,
  },
  {
    value: "Member",
    label: "Member",
    icon: User,
  },
  {
    value: "Bot",
    label: "Bot",
    icon: Bot,
  },
];

// Filter: Telecom Operator
export const telecoms = [
  {
    value: "Grameenphone",
    label: "Grameenphone",
    icon: Antenna,
  },
  {
    value: "Banglalink",
    label: "Banglalink",
    icon: Antenna,
  },
  {
    value: "Teletalk",
    label: "Teletalk",
    icon: Antenna,
  },
  {
    value: "Robi",
    label: "Robi",
    icon: Antenna,
  },
  {
    value: "Airtel",
    label: "Airtel",
    icon: Antenna,
  },
];

// Filter: Organization
export const organizations = [
  {
    value: "sbs",
    label: "Simbio Blood Soldiers",
    icon: Church,
  },
  {
    value: "RC",
    label: "Red Crescent",
    icon: Church,
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
    key: "role",
    label: "Role",
    options: roles,
  },
  {
    key: "phone",
    label: "Phone",
    options: telecoms,
  },
  {
    key: "organization",
    label: "Organization",
    options: organizations,
  },
  {
    key: "location",
    label: "Location",
    options: locations,
  },
];
