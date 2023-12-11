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
import UsersTableFilter from "./UsersTableFilter";
import UsersTableMenu from "./UsersTableMenu";

export type TeamItemType = {
  _id: string;
  avatar: string;
  name: string;
  designation: string;
  period_from: string;
  period_to: string;
  phone: string;
  email: string;
  location: string;
  status: string;
};

interface UsersTablePropsType {
  title: string;
  description?: string;
  data: TeamItemType[];
}

const UsersTable: FC<UsersTablePropsType> = ({
  title,
  description,
  data,
}: UsersTablePropsType) => {
  return (
    <section className="h-full w-full">
      <Card className="h-full w-full pe-0 ps-0">
        <CardHeader
          className="pe-0 ps-2.5"
          header={<h4 className="subtitle2Stronger m-0">{title}</h4>}
          description={<p className="caption1 text-[#adadad]">{description}</p>}
          action={
            <Toolbar>
              <UsersTableFilter />
              <UsersTableMenu />
            </Toolbar>
          }
        />

        <CardPreview>
          <Table className="w-full" sortable noNativeElements={true}>
            <TableHeader className="sticky top-0 w-full">
              <TableHeaderRow />
            </TableHeader>

            <TableBody className="w-full">
              {data.map((item, i) => (
                <TableBodyRow key={i} item={item} />
              ))}
            </TableBody>
          </Table>
        </CardPreview>
      </Card>
    </section>
  );
};

const TableHeaderRow = () => (
  <TableRow className="border-b-[rgb(240, 240, 240)] px-[22px]">
    <TableHeaderCell
      className="w-full min-w-[250px] max-w-[250px]"
      labelClass="w-full relative inline-block body1Strong"
      label="Name"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[130px]"
      labelClass="w-full relative inline-block body1Strong"
      label="Designation"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[230px]"
      labelClass="w-full relative inline-block body1Strong"
      label="Timeline"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[150px]"
      labelClass="w-full relative inline-block body1Strong"
      label="Phone"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[200px]"
      labelClass="w-full relative inline-block body1Strong"
      label="Email"
    />
    <TableHeaderCell
      className="w-full min-w-[40px]"
      labelClass="w-full relative inline-block body1Strong"
      label="Location"
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

const TableBodyRow: FC<{ item: TeamItemType }> = ({ item }) => {
  return useMemo(
    () => (
      <TableRow key={item._id} className="border-b-rgb(240, 240, 240) px-[22]">
        <TableCell className="caption1 w-full min-w-[100px] max-w-[100px]">
          <TableCellLayout
            media={
              <Avatar
                aria-label={item.name}
                name={item.name}
                image={{ src: item.avatar }}
                size={28}
              />
            }
          >
            <Link href={`/members/${item._id}`}>
              <p className="body1Strong">{item.name}</p>
            </Link>
          </TableCellLayout>
        </TableCell>

        <TableBodyCell
          className="caption1 caption1Strong relative w-full max-w-[130px] text-[#adadad]"
          valueClass=""
          value={item.designation || ""}
        />
        <TableBodyCell
          className="caption1 relative w-full min-w-[100px] max-w-[230px] text-[#adadad]"
          valueClass=""
          value={` ${item.period_from} - ${item.period_to}`}
        />
        <TableBodyCell
          className="caption1 relative w-full min-w-[100px] max-w-[150px] text-[#adadad]"
          valueClass=""
          value={item.phone}
        />
        <TableBodyCell
          className="caption1 relative w-full min-w-[100px] max-w-[200px] text-[#adadad]"
          valueClass=""
          value={item.email}
        />
        <TableBodyCell
          className="caption1 min-w-10 relative w-full text-[#adadad]"
          valueClass=""
          value={item.location}
        />
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
    <TableCellLayout>
      <Text className={valueClass}>{value}</Text>
    </TableCellLayout>
  </TableCell>
);

export default memo(UsersTable);
