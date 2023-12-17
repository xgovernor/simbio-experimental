import {
  Avatar,
  Card,
  CardHeader,
  CardPreview,
  Table,
  TableBody,
  TableCell,
  TableCellActions,
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

export type UsersItemType = {
  id: string;
  avatar: string;
  name: string;
  role: string;
  email: string;
  organization: string;
  org_id: string;
  status: string;
};

interface UsersTablePropsType {
  title: string;
  description?: string;
  data: UsersItemType[];
}

const UsersTable: FC<UsersTablePropsType> = ({ title, description, data }) => {
  return (
    <section className="h-full w-full">
      <Card className="h-full w-full pe-0 ps-0">
        <CardHeader
          className="pe-0 ps-4"
          header={<h4 className="subtitle2Stronger m-0">{title}</h4>}
          description={<p className="caption1 text-[#adadad]">{description}</p>}
          action={
            <Toolbar>
              <UsersTableFilter />
              <UsersTableMenu />
            </Toolbar>
          }
        />

        <CardPreview className="mx-0 pe-0">
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
  <TableRow className="border-b-[rgb(240, 240, 240)]">
    <TableHeaderCell
      className="w-full min-w-[250px] max-w-[300px] ps-4"
      labelClass="w-full relative inline-block body1Strong font-semibold"
      label="User"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[130px]"
      labelClass="w-full relative inline-block body1Strong font-semibold"
      label="Role"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[230px]"
      labelClass="w-full relative inline-block body1Strong font-semibold"
      label="Email"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[230px]"
      labelClass="w-full relative inline-block body1Strong font-semibold"
      label="Organization"
    />
    <TableHeaderCell
      className="w-full min-w-[100px] max-w-[150px]"
      labelClass="w-full relative inline-block body1Strong font-semibold"
      label="Actions"
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

const TableBodyRow: FC<{ item: UsersItemType }> = ({ item }) => {
  return useMemo(
    () => (
      <TableRow key={item.id} className="border-b-rgb(240, 240, 240) px-[22]">
        <TableCell className="caption1 w-full min-w-[250px] max-w-[300px] ps-4">
          <TableCellLayout
            className="gap-3"
            media={
              <Avatar
                aria-label={item.name}
                name={item.name}
                image={{ src: item.avatar }}
                size={28}
              />
            }
          >
            <h3 className="text-sm font-bold text-[#212524]">
              <Link href={`/members/${item.id}`}>{item.name}</Link>
            </h3>
          </TableCellLayout>
        </TableCell>

        <TableBodyCell
          className="caption1 caption1Strong relative w-full max-w-[130px] text-[#adadad]"
          valueClass=""
          value={item.role || ""}
        />
        <TableBodyCell
          className="caption1 relative w-full min-w-[100px] max-w-[230px] text-[#adadad]"
          valueClass=""
          value={item.email}
        />
        <TableBodyCell
          className="caption1 min-w-10 relative w-full text-[#adadad]"
          valueClass=""
          value={"(+880) 123 456 7894"}
        />
        <TableBodyCell
          className="caption1 caption1Strong relative w-full max-w-[130px] text-[#adadad]"
          valueClass=""
          value={
            <p className="text-xs text-[#616161]">
              <Link href={`/organizations/${item.org_id}`}>
                {item.organization}
              </Link>
            </p>
          }
        />

        <TableCell>
          <TableCellActions />
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
    <TableCellLayout>
      <Text className={valueClass}>{value}</Text>
    </TableCellLayout>
  </TableCell>
);

export default memo(UsersTable);
