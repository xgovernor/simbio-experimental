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
import { MapPin, PersonStanding, ScanEye, VenetianMask } from "lucide-react";
import { DataTableColumnHeader } from "@/components/ui/DataGrid/DataTableColumnHeader";
import { DonationItemType } from ".";

export const columns: ColumnDef<DonationItemType>[] = [
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
            href={`/donations/${row.original.id}`}
            hrefLang="en"
          >
            {row.original.name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "gender",
    header: "Gender",
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
    key: "location",
    label: "Location",
    options: locations,
  },
  {
    key: "amount",
    label: "Amount",
    options: [],
  },
  {
    key: "date",
    label: "Date",
    options: [],
  },
];
