import { CentersItemType } from "@/app/collection-center/PageRootComponent";
import {
    Avatar,
    Button,
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
import { Map24Regular } from "@fluentui/react-icons";
import Link from "next/link";
import { FC, memo, useMemo } from "react";
import BloodCenterTableFilter from "./BloodCenterTableFilter";
import BloodCenterTableMenu from "./BloodCenterTableMenu";

interface CentersTablePropsType {
    title: string;
    description?: string;
    data: CentersItemType[];
}

const CentersTable: FC<CentersTablePropsType> = ({ title, description, data }: CentersTablePropsType) => {

    return (
        <section className="h-full w-full">
            <Card className="h-full w-full pe-0 ps-0">
                <CardHeader
                    className="pe-0 ps-2.5"
                    header={
                        <h4 className={ "m-0 subtitle2Stronger"}>
                            {title}
                        </h4>
                    }
                    description={
                        <Text className={"caption1 text-[#adadad]"} block>
                            {description}
                        </Text>
                    }
                    action={
                        <Toolbar>
                            <BloodCenterTableFilter />
                            <BloodCenterTableMenu />
                        </Toolbar>
                    }
                />

                <CardPreview>
                    <Table className="w-full table-auto" sortable noNativeElements={true}>
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
    <TableRow className="px-[22px] border-b-[rgb(240, 240, 240)]">
        <TableHeaderCell className="min-w-[250px] w-full max-w-[300px]" labelClass="w-[inherit] relative inline-block body1Strong" label="Title" />
        <TableHeaderCell className="max-w-[250px] w-full min-w-25" labelClass="w-[inherit] relative inline-block body1Strong" label="Facility" />
        <TableHeaderCell className="max-w-28 w-full min-w-25" labelClass="w-[inherit] relative inline-block body1Strong" label="Phone" />
        <TableHeaderCell className="max-w-40 w-full min-w-25" labelClass="w-[inherit] relative inline-block body1Strong" label="Email" />
        <TableHeaderCell className="w-full min-w-25 max-w-45" labelClass="w-[inherit] relative inline-block body1Strong" label="Location" />
        <TableHeaderCell className="w-full min-w-25 max-w-25" labelClass="w-[inherit] relative inline-block body1Strong" label="" />
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

const TableBodyRow: FC<{item: CentersItemType }> = ({ item }) => {
    return useMemo(
        () => (
            <TableRow key={item._id} className="px-[22px] border-b-[rgb(240, 240, 240)]">
                <TableCell className="min-w-[250px] max-w-[300px] w-full">
                    <TableCellLayout
                        media={
                            <Avatar aria-label={item.name} name={item.name} image={{ src: item.avatar }} size={28} />
                        }
                    >
                        <Link href={`/members/${item._id}`}>
                            <Text className="ms-1 font-medium text-sm">{item.name}</Text>
                        </Link>
                    </TableCellLayout>
                </TableCell>

                <TableBodyCell
                    className={"max-w-[250px] min-w-25 w-[inherit] relative caption1 text-[#575757] text-xs"}
                    valueClass=""
                    value={item.facility || ""}
                />
                <TableBodyCell
                    className="max-w-28 min-w-25  w-[inherit] relative caption1 text-[#575757]"
                    valueClass=""
                    value={item.phone}
                />
                <TableBodyCell
                    className="max-w-40 min-w-25 w-[inherit] relative caption1 text-[#575757]"
                    valueClass=""
                    value={item.email}
                />
                <TableBodyCell
                    className="min-w-25 max-w-45 w-[inherit] relative caption1 text-[#575757]"
                    valueClass=""
                    value={item.location}
                />

                <TableCell className="w-full min-w-25 max-w-25" >
                    <TableCellLayout style={{ display: "flex", justifyContent: "center" }}>
                        <Link href={item.mapUrl} target="_blank">
                            <Button appearance="subtle" icon={<Map24Regular />} title="View in map" />
                        </Link>
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
        <TableCellLayout>
            <Text className={valueClass}>{value}</Text>
        </TableCellLayout>
    </TableCell>
);

export default memo(CentersTable);
