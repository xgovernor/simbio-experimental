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
import ContactsTableFilter from "./ContactsTableFilter";
import ContactsTableMenu from "./ContactsTableMenu";
import { ContactItemType } from "@/app/contacts/PageRootComponent";

interface ContactsTablePropsType {
    title: string;
    description?: string;
    data: ContactItemType[];
}

const ContactsTable: FC<ContactsTablePropsType> = ({ title, description, data }: ContactsTablePropsType) => {

    return (
        <section className="h-full w-full">
            <Card className="h-full w-full pe-0 ps-0">
                <CardHeader
                    className="pe-0 ps-2.5"
                    header={
                        <h4 className="subtitle2Stronger m-0">
                            {title}
                        </h4>
                    }
                    description={
                        <Text className="caption1 text-[#adadad]">
                            {description}
                        </Text>
                    }
                    action={
                        <Toolbar>
                            <ContactsTableFilter />
                            <ContactsTableMenu />
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

const TableHeaderRow: FC = () => (
    <TableRow className="px-[22px] border-b-[rgb(240, 240, 240)]">
        <TableHeaderCell
      className="w-full min-w-[250px] max-w-[300px]"
      labelClass="w-full relative inline-block body1Strong"
            label="Name"
        />
        <TableHeaderCell
            className="w-full min-w-[100px] max-w-[180px]"
            labelClass="w-full relative inline-block body1Strong"
            label="Phone"
        />
        <TableHeaderCell
            className="w-full min-w-[100px] max-w-[230px]"
            labelClass="w-full relative inline-block body1Strong"
            label="Email"
        />
        <TableHeaderCell
            className="w-full min-w-[100px] max-w-[250px]"
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

const TableBodyRow: FC<{ item: ContactItemType }> = ({ item }) => {
    return useMemo(
        () => (
            <TableRow key={item._id} className="px-[22px] text-[rgb(240, 240, 240)]">
                <TableCell className="min-w-[100px] max-w-[100px] caption1 w-full">
                    <TableCellLayout
                        media={
                            <Avatar aria-label={item.name} name={item.name} image={{ src: item.avatar }} size={28} />
                        }
                    >
                        <Link href={`/members/${item._id}`}>
                            <p className="body1Strong">{item.name}</p>
                        </Link>
                    </TableCellLayout>
                </TableCell>
                <TableBodyCell
            className="min-w-[100px] max-w-[180px] w-full relative caption1 text-[#adadad]"
                    valueClass=""
                    value={item.phone}
                />
                <TableBodyCell
                    className="min-w-[100px] max-w-[230px] w-full relative caption1 text-[#adadad]"
                    valueClass=""
                    value={item.email}
                />
                <TableBodyCell
                    className="min-w-[100px] max-w-[250px] w-full relative caption1 text-[#adadad]"
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

export default memo(ContactsTable);
