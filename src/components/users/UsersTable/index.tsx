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
    makeStyles,
    mergeClasses,
    shorthands,
    tokens,
    typographyStyles,
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

const useStyles = makeStyles({
    header: {
        // backgroundColor: tokens.colorNeutralBackground4Pressed
    },

    header_title: {
        ...typographyStyles.subtitle2Stronger,
    },
    table_description: {
        ...typographyStyles.caption1,
        color: tokens.colorNeutralForeground3,
    },

    table_head_row: {
        ...shorthands.padding("", "22px"),
        // MozBorderBottomColors: ...tokens.
        borderBottomColor: "rgb(240, 240, 240)",
    },
    thc_title: {
        width: "100%",
        minWidth: "100px",
    },
    thc_label: {
        width: "inherit",
        position: "relative",
        display: "inline-block",
        ...typographyStyles.body1Strong,
    },
    tc_name: {
        minWidth: "250px",
        maxWidth: "250px",
    },
    thc_gender: {
        minWidth: "100px",
        maxWidth: "130px",
    },
    thc_member: {
        minWidth: "100px",
        maxWidth: "130px",
    },
    thc_timeline: {
        minWidth: "100px",
        maxWidth: "230px",
    },
    thc_phone: {
        minWidth: "100px",
        maxWidth: "150px",
    },
    thc_email: {
        minWidth: "100px",
        maxWidth: "200px",
    },

    table_body_row: {
        ...shorthands.padding("", "22px"),
        borderBottomColor: "rgb(240, 240, 240)",
    },
    // Table Body Cell
    tbc_root: {
        ...typographyStyles.caption1,
        width: "100%",
        maxWidth: "100px",
    },
    tbc_text: {
        width: "inherit",
        position: "relative",
        ...typographyStyles.caption1,
        color: tokens.colorNeutralForeground3,
    },
    tbc_name_label: {
        ...typographyStyles.body1Strong,
        color: tokens.colorNeutralForeground1,
    },
    tbc_member: {
        maxWidth: "130px",
        ...typographyStyles.caption1Strong,
    },
    tbc_timeline: {
        minWidth: "100px",
        maxWidth: "230px",
    },
    tbc_phone: {
        minWidth: "100px",
        maxWidth: "150px",
    },
    tbc_email: {
        minWidth: "100px",
        maxWidth: "200px",
    },
    tbc_location: {
        minWidth: "15px",
        // maxWidth: "250px",
    },
});

const UsersTable: FC<UsersTablePropsType> = ({ title, description, data }: UsersTablePropsType) => {
    const classes = useStyles();

    return (
        <section className="h-full w-full">
            <Card className="h-full w-full pe-0 ps-0">
                <CardHeader
                    className="pe-0 ps-2.5"
                    header={
                        <Text className={mergeClasses(classes.header_title, "m-0")} block as="h4">
                            {title}
                        </Text>
                    }
                    description={
                        <Text className={classes.table_description} block>
                            {description}
                        </Text>
                    }
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
                            <TableHeaderRow classes={classes} />
                        </TableHeader>

                        <TableBody className="w-full">
                            {data.map((item, i) => (
                                <TableBodyRow key={i} classes={classes} item={item} />
                            ))}
                        </TableBody>
                    </Table>
                </CardPreview>
            </Card>
        </section>
    );
};

const TableHeaderRow: FC<{ classes: any }> = ({ classes }) => (
    <TableRow className={classes.table_head_row}>
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.tc_name)}
            labelClass={classes.thc_label}
            label="Name"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_member)}
            labelClass={classes.thc_label}
            label="Designation"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_timeline)}
            labelClass={classes.thc_label}
            label="Timeline"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_phone)}
            labelClass={classes.thc_label}
            label="Phone"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_email)}
            labelClass={classes.thc_label}
            label="Email"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.tbc_location)}
            labelClass={classes.thc_label}
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

const TableBodyRow: FC<{ classes: any; item: TeamItemType }> = ({ classes, item }) => {
    return useMemo(
        () => (
            <TableRow key={item._id} className={classes.table_body_row}>
                <TableCell className={mergeClasses(classes.tbc_root, classes.tc_name)}>
                    <TableCellLayout
                        media={
                            <Avatar aria-label={item.name} name={item.name} image={{ src: item.avatar }} size={28} />
                        }
                    >
                        <Link href={`/members/${item._id}`}>
                            <Text className={classes.tbc_name_label}>{item.name}</Text>
                        </Link>
                    </TableCellLayout>
                </TableCell>

                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_member)}
                    valueClass=""
                    value={item.designation || ""}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_timeline)}
                    valueClass=""
                    value={` ${item.period_from} - ${item.period_to}`}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_phone)}
                    valueClass=""
                    value={item.phone}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_email)}
                    valueClass=""
                    value={item.email}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_location)}
                    valueClass=""
                    value={item.location}
                />
            </TableRow>
        ),
        [classes, item],
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
