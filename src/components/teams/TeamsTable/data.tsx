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
  PersonStanding,
  ScanEye,
  ShieldCheck,
  ShieldQuestion,
  UserMinus,
  VenetianMask,
} from "lucide-react";
import { TeamsItemType } from ".";

export const columns: ColumnDef<TeamsItemType>[] = [
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
    accessorKey: "total_member",
    header: "Members",
  },
  {
    id: "period",
    header: "Period",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <span className="flex items-center gap-2">
          {user.period_from} - {user.period_to}
        </span>
      );
    },
  },
  {
    accessorKey: "president",
    header: "President",
  },
  {
    accessorKey: "vice_president",
    header: "Vice President",
  },
  {
    accessorKey: "management",
    header: "Management",
  },
  {
    accessorKey: "status",
    header: "Status",
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
    value: "Cancelled", // Applied for membership. But cancelled by reviewer.
    label: "Cancelled",
    icon: Fingerprint,
  },
];

// Filter: Telecom Operator
export const period = [
  {
    value: "period",
    label: "Period1",
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
    key: "status",
    label: "Status",
    options: statuses,
  },
  {
    key: "location",
    label: "Location",
    options: locations,
  },
  {
    key: "president",
    label: "Period",
    options: period,
  },
];
