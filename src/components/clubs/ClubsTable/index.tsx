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
    Toolbar
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

const ClubsTable: FC<ClubsTablePropsType> = ({ title, description, data }: ClubsTablePropsType) => {

    return (
        <section className="h-full w-full">
            <div className="py-4 shadow-md bg-white">
                <div
                    className="pe-1 ps-5 grid grid-cols-2 grid-rows-1 gap-y-2"
                    style={{ gridTemplateColumns: "auto 1fr", gridTemplateRows: "auto" }}
                >
                    <div className="grid grid-cols-1 grid-rows-2 gap-y-1">
                        <h4 className="subtitle2Stronger m-0">{title}</h4>
                        <p className="caption1 text-[#adadad]">
                            {description}
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <Toolbar>
                            <ClubsTableFilter />
                            <ClubsTableMenu />
                        </Toolbar>
                    </div>
                </div>

                <div className="pe-1 px-0 w-full relative">
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
    <TableRow className="px-[22px] border-b-[rgb(240, 240, 240)] w-full">
        <TableHeaderCell
            className="min-w-[250px] w-full"
            labelClass="w-[inherit] relative inline-block body1Strong"
            label="Title"
        />
        <TableHeaderCell
            className="w-full min-w-[100px] max-w-[130px] caption1Strong"
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
            className="w-full min-w-10 max-w-10"
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

const TableBodyRow: FC<{ item: ClubItemType }> = ({  item }) => {
    return useMemo(
        () => (
            <TableRow key={item._id} className="border-b-[rgb(240, 240, 240)] active:bg-transparent min-w-full w-full max-w-full">
                {/* Title */}
                <TableCell className="caption1 w-full min-w-[250px] max-w-[250px]">
                    <TableCellLayout
                        className="w-[inherit] min-w-[inherit] max-w-[inherit]"
                        media={
                            <Avatar aria-label={item.name} name={item.name} image={{ src: item.avatar }} size={28} />
                        }
                    >
                        <Link href={`/clubs/${item._id}`}>
                            <Text className="body1Strong bg-white">{item.name}</Text>
                        </Link>
                    </TableCellLayout>
                </TableCell>

                {/* Total Member */}
                <TableBodyCell
                    className="inherit relative caption1 text-[#858585] caption1Strong max-w-[80px]"
                    valueClass=""
                    value={item.total_member || ""}
                />

                {/* Total Donation */}
                <TableBodyCell
                    className="inherit relative caption1 text-[#adadad] min-w-[100px] max-w-[80px]"
                    valueClass=""
                    value={item.total_donation}
                />

                <TableBodyCell
                    className="inherit relative caption1 text-[#adadad] min-w-[150px] max-w-[170px]"
                    valueClass=""
                    value={item.phone}
                />

                <TableBodyCell
                    className="inherit relative caption1 text-[#adadad] w-full min-w-[250px] max-w-[300px]"
                    valueClass=""
                    value={item.email}
                />
                <TableBodyCell
                    className="inherit relative caption1 text-[#adadad] min-w-[250px] w-full justify-end"
                    valueClass=""
                    value={item.location}
                />

                <TableCell className="max-w-10 w-full min-w-10 m-0 ">
                    <TableCellLayout className="max-w-10 w-full min-w-10">
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
