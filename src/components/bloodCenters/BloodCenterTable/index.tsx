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
    Toolbar,
    makeStyles,
    mergeClasses,
    shorthands,
    tokens,
    typographyStyles,
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
    thc_label: {
        width: "inherit",
        position: "relative",
        display: "inline-block",
        ...typographyStyles.body1Strong,
    },
    tc_title: {
        minWidth: "250px",
        maxWidth: "250px",
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
    stats_view_link: {
        height: "12px",
        color: tokens.colorBrandForeground1,
        ...typographyStyles.caption1Stronger,
        ...shorthands.margin("0"),
        ...shorthands.padding("0"),
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "start",
    },
});

const CentersTable: FC<CentersTablePropsType> = ({ title, description, data }: CentersTablePropsType) => {
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
                            <BloodCenterTableFilter />
                            <BloodCenterTableMenu />
                        </Toolbar>
                    }
                />

                <CardPreview>
                    <Table className="w-full table-auto" sortable noNativeElements={true}>
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
        <TableHeaderCell className={mergeClasses(classes.tc_title)} labelClass={classes.thc_label} label="Title" />
        <TableHeaderCell className="max-w-32 w-full min-w-25" labelClass={classes.thc_label} label="Facility" />
        <TableHeaderCell className="max-w-28 w-full min-w-25" labelClass={classes.thc_label} label="Phone" />
        <TableHeaderCell className="max-w-40 w-full min-w-25" labelClass={classes.thc_label} label="Email" />
        <TableHeaderCell className="w-full min-w-25 max-w-45" labelClass={classes.thc_label} label="Location" />
        <TableHeaderCell className="w-full min-w-25 max-w-25" labelClass={classes.thc_label} label="" />
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

const TableBodyRow: FC<{ classes: any; item: CentersItemType }> = ({ classes, item }) => {
    return useMemo(
        () => (
            <TableRow key={item._id} className={classes.table_body_row}>
                <TableCell className={mergeClasses(classes.tbc_root, classes.tc_title)}>
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
                    className={mergeClasses(classes.tbc_text, "max-w-32 w-full min-w-25")}
                    valueClass=""
                    value={item.facility || ""}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, "max-w-28 w-full min-w-25")}
                    valueClass=""
                    value={item.phone}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, "max-w-40 w-full min-w-25")}
                    valueClass=""
                    value={item.email}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, "w-full min-w-25 max-w-45")}
                    valueClass=""
                    value={item.location}
                />

                <TableCell
                    className={mergeClasses(classes.memberTable_body_preferedLocation, "w-full min-w-25 max-w-25")}
                >
                    <TableCellLayout style={{ display: "flex", justifyContent: "center" }}>
                        <Link href={item.mapUrl} target="_blank">
                            <Button appearance="subtle" icon={<Map24Regular />} title="View in map" />
                        </Link>
                    </TableCellLayout>
                </TableCell>
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

export default memo(CentersTable);
