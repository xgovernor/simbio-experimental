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
import ClubsTableMenu from "./ClubsTableMenu";
import ClubsTableFilter from "./ClubsTableFilter";
import ClubRowMenu from "./ClubRowMenu";
import { ClubItemType } from "@/app/clubs/PageRootComponent";

interface ClubsTablePropsType {
    title: string;
    description?: string;
    data: ClubItemType[];
}

const useStyles = makeStyles({
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
        width: "100%",
        // maxWidth: "250px",
    },
    thc_member: {
        minWidth: "100px",
        maxWidth: "130px",
        ...typographyStyles.caption1Strong,
    },
    thc_donation: {
        minWidth: "100px",
        maxWidth: "130px",
    },
    thc_phone: {
        minWidth: "100px",
        maxWidth: "170px",
    },
    tc_action: {
        minWidth: "40px",
        maxWidth: "40px",
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
    tbc_donation: {
        minWidth: "100px",
        maxWidth: "130px",
    },
    tbc_phone: {
        minWidth: "100px",
        maxWidth: "170px",
    },
    tbc_location: {
        minWidth: "250px",
        // maxWidth: "250px",
    },
});

const ClubsTable: FC<ClubsTablePropsType> = ({ title, description, data }: ClubsTablePropsType) => {
    const classes = useStyles();

    return (
        <section className="h-full w-full">
            <Card className="h-full w-full px-0 py-4">
                <CardHeader
                    className="pe-1 ps-5"
                    header={<h4 className="subtitle2Stronger m-0">{title}</h4>}
                    description={
                        <Text className={classes.table_description} block>
                            {description}
                        </Text>
                    }
                    action={
                        <Toolbar>
                            <ClubsTableFilter />
                            <ClubsTableMenu />
                        </Toolbar>
                    }
                />

                <CardPreview>
                    <Table className="w-full" sortable noNativeElements={true}>
                        <TableHeader className="sticky top-0 w-full">
                            <TableHeaderRow classes={classes} />
                        </TableHeader>

                        <TableBody className="w-full">
                            {data?.map((item, i) => <TableBodyRow key={i} classes={classes} item={item} />)}
                        </TableBody>
                    </Table>
                </CardPreview>
            </Card>
        </section>
    );
};

const TableHeaderRow: FC<{ classes: any }> = ({ classes }) => (
    <TableRow className={classes.table_head_row}>
        <TableHeaderCell className={classes.tc_name} labelClass={classes.thc_label} label="Title" />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_member)}
            labelClass={classes.thc_label}
            label="Members"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_donation)}
            labelClass={classes.thc_label}
            label="Donations"
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

        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.tc_action)}
            labelClass={classes.thc_label}
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

const TableBodyRow: FC<{ classes: any; item: ClubItemType }> = ({ classes, item }) => {
    return useMemo(
        () => (
            <TableRow key={item._id} className={classes.table_body_row}>
                {/* Title */}
                <TableCell className={mergeClasses(classes.tbc_root, classes.tc_name)}>
                    <TableCellLayout
                        media={
                            <Avatar aria-label={item.name} name={item.name} image={{ src: item.avatar }} size={28} />
                        }
                    >
                        <Link href={`/clubs/${item._id}`}>
                            <Text className={classes.tbc_name_label}>{item.name}</Text>
                        </Link>
                    </TableCellLayout>
                </TableCell>

                {/* Total Member */}
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_member)}
                    valueClass=""
                    value={item.total_member || ""}
                />

                {/* Total Donation */}
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_donation)}
                    valueClass=""
                    value={item.total_donation}
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
                <TableBodyCell className={mergeClasses(classes.tbc_text, classes.tc_action)} value={<ClubRowMenu />} />
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

export default memo(ClubsTable);
