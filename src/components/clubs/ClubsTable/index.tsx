import {
  Avatar,
  Card,
  CardHeader,
  CardPreview,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableRow,
  Text,
  Toolbar,
} from "@fluentui/react-components";
import Link from "next/link";
import { FC, memo, useMemo } from "react";
import ClubsTableMenu from "./ClubsTableMenu";
import ClubsTableFilter from "./ClubsTableFilter";
import ClubRowMenu from "./ClubRowMenu";
import { ClubItemType } from "@/app/clubs/PageRootComponent";

interface ClubsTablePropsType {
  title: string;
  description?: string;
  data: ClubItemType[];
}

const ClubsTable: FC<ClubsTablePropsType> = ({
  title,
  description,
  data,
}: ClubsTablePropsType) => {
  return (
    <section className="h-full w-full">
      <div className="bg-white py-4 shadow-md">
        <div
          className="grid grid-cols-2 grid-rows-1 gap-y-2 pe-1 ps-5"
          style={{ gridTemplateColumns: "auto 1fr", gridTemplateRows: "auto" }}
        >
          <div className="grid grid-cols-1 grid-rows-2 gap-y-1">
            <h4 className="subtitle2Stronger m-0">{title}</h4>
            <p className="caption1 text-[#adadad]">{description}</p>
          </div>

          <div className="flex justify-end">
            <Toolbar>
              <ClubsTableFilter />
              <ClubsTableMenu />
            </Toolbar>
          </div>
        </div>

        <div className="relative w-full px-0 pe-1">
          <Table className="w-full" sortable noNativeElements={true}>
            <TableHeader className="sticky top-0 w-full min-w-full">
              <TableHeaderRow />
            </TableHeader>

            <TableBody className="w-full min-w-full">
              {data?.map((item, i) => <TableBodyRow key={i} item={item} />)}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

const TableHeaderRow = () => (
  <TableRow className="border-b-[rgb(240, 240, 240)] w-full px-[22px]">
    <TableHeaderCell
      className="w-full min-w-[250px]"
      labelClass="w-[inherit] relative inline-block body1Strong"
      label="Title"
    />
    <TableHeaderCell
      className="caption1Strong w-full min-w-[100px] max-w-[130px]"
      labelClass="w-[inherit] relative inline-block body1Strong"
      label="Members"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[130px]"
      labelClass="w-[inherit] relative inline-block body1Strong"
      label="Donations"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[170px]"
      labelClass="w-[inherit] relative inline-block body1Strong"
      label="Phone"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[250px]"
      labelClass="w-[inherit] relative inline-block body1Strong"
      label="Email"
    />
    <TableHeaderCell
      className="w-full min-w-[250px]"
      labelClass="w-[inherit] relative inline-block body1Strong"
      label="Location"
    />

    <TableHeaderCell
      className="min-w-10 max-w-10 w-full"
      labelClass="w-[inherit] relative inline-block body1Strong"
      label=""
    />
  </TableRow>
);

const TableHeaderCell: FC<{
  className: any;
  label: string;
  labelClass: any;
}> = ({ className, label, labelClass }) => (
  <TableCell className={className}>
    <Text className={labelClass}>{label}</Text>
  </TableCell>
);

const TableBodyRow: FC<{ item: ClubItemType }> = ({ item }) => {
  return useMemo(
    () => (
      <TableRow
        key={item._id}
        className="border-b-[rgb(240, 240, 240)] w-full min-w-full max-w-full active:bg-transparent"
      >
        {/* Title */}
        <TableCell className="caption1 w-full min-w-[250px] max-w-[250px]">
          <TableCellLayout
            className="w-[inherit] min-w-[inherit] max-w-[inherit]"
            media={
              <Avatar
                aria-label={item.name}
                name={item.name}
                image={{ src: item.avatar }}
                size={28}
              />
            }
          >
            <Link href={`/clubs/${item._id}`}>
              <Text className="body1Strong bg-white">{item.name}</Text>
            </Link>
          </TableCellLayout>
        </TableCell>

        {/* Total Member */}
        <TableBodyCell
          className="inherit caption1 caption1Strong relative max-w-[80px] text-[#858585]"
          valueClass=""
          value={item.total_member || ""}
        />

        {/* Total Donation */}
        <TableBodyCell
          className="inherit caption1 relative min-w-[100px] max-w-[80px] text-[#adadad]"
          valueClass=""
          value={item.total_donation}
        />

        <TableBodyCell
          className="inherit caption1 relative min-w-[150px] max-w-[170px] text-[#adadad]"
          valueClass=""
          value={item.phone}
        />

        <TableBodyCell
          className="inherit caption1 relative w-full min-w-[250px] max-w-[300px] text-[#adadad]"
          valueClass=""
          value={item.email}
        />
        <TableBodyCell
          className="inherit caption1 relative w-full min-w-[250px] justify-end text-[#adadad]"
          valueClass=""
          value={item.location}
        />

        <TableCell className="max-w-10 min-w-10 m-0 w-full ">
          <TableCellLayout className="max-w-10 min-w-10 w-full">
            <ClubRowMenu />
          </TableCellLayout>
        </TableCell>
      </TableRow>
    ),
    [item],
  );
};

const TableBodyCell: FC<{
  className: string;
  valueClass?: string;
  value: any;
}> = ({ className, value, valueClass }) => (
  <TableCell className={className}>
    <TableCellLayout className="w-[inherit] min-w-[inherit] max-w-[inherit]">
      <Text className={valueClass}>{value}</Text>
    </TableCellLayout>
  </TableCell>
);

export default memo(ClubsTable);
