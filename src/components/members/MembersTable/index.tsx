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
    ToolbarButton,
    makeStyles,
    mergeClasses,
    shorthands,
    tokens,
    typographyStyles,
} from "@fluentui/react-components";
import { FC, memo, useMemo } from "react";
import MembersTableMenu from "./MembersTableMenu";
import MembersTableFilter from "./MembersTableFilter";
import Link from "next/link";
import { MemberItemType } from "@/app/members/PageRootComponent";

interface MembersTablePropsType {
    className?: string;
    title: string;
    description?: string;
    data: MemberItemType[];
    rest?: object;
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

    memberTable_head_row: {
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
    thc_name: {
        minWidth: "250px",
        maxWidth: "250px",
    },
    thc_gender: {
        minWidth: "100px",
        maxWidth: "130px",
    },
    thc_blood: {
        minWidth: "100px",
        maxWidth: "130px",
    },
    thc_donation: {},
    thc_phone: {},
    thc_location: {},
    thc_prefLocation: {},

    memberTable_body_row: {
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
    tbc_name: {
        minWidth: "250px",
        maxWidth: "250px",
    },
    tbc_name_label: {
        ...typographyStyles.body1Strong,
        color: tokens.colorNeutralForeground1,
    },
    tbc_gender: {
        maxWidth: "130px",
    },
    tbc_blood: {
        maxWidth: "130px",
        ...typographyStyles.caption1Strong,
    },
    tbc_donation: {},
    tbc_phone: {},
    tbc_location: {},
    tbc_prefLocation: {},
});

const MembersTable: FC<MembersTablePropsType> = ({
    className,
    title,
    description,
    data,
    ...rest
}: MembersTablePropsType) => {
    const classes = useStyles();

    return (
        <section className="h-full w-full" {...rest}>
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
                            <MembersTableFilter />
                            <MembersTableMenu />
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
    <TableRow className={classes.memberTable_head_row}>
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_name)}
            labelClass={classes.thc_label}
            label="Name"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_gender)}
            labelClass={classes.thc_label}
            label="Gender"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_blood)}
            labelClass={classes.thc_label}
            label="Blood"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_donation)}
            labelClass={classes.thc_label}
            label="Last Donation"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_phone)}
            labelClass={classes.thc_label}
            label="Phone"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_location)}
            labelClass={classes.thc_label}
            label="Location"
        />
        <TableHeaderCell
            className={mergeClasses(classes.thc_title, classes.thc_prefLocation)}
            labelClass={classes.thc_label}
            label="Prefered Location"
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

const TableBodyRow: FC<{ classes: any; item: MemberItemType }> = ({ classes, item }) => {
    return useMemo(
        () => (
            <TableRow key={item._id} className={classes.memberTable_body_row}>
                <TableCell className={mergeClasses(classes.tbc_root, classes.tbc_name)}>
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
                    className={mergeClasses(classes.tbc_text, classes.tbc_gender)}
                    labelClass=""
                    label={item.gender}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_blood)}
                    labelClass=""
                    label={item.blood_group || ""}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_donation)}
                    labelClass=""
                    label={item.last_blood_donation}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_phone)}
                    labelClass=""
                    label={item.phone}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_location)}
                    labelClass=""
                    label={item.location}
                />
                <TableBodyCell
                    className={mergeClasses(classes.tbc_text, classes.tbc_prefLocation)}
                    labelClass=""
                    label={item.preferred_location}
                />
            </TableRow>
        ),
        [classes, item],
    );
};

const TableBodyCell: FC<{
    className: any;
    label: string;
    labelClass?: any;
}> = ({ className, label, labelClass }) => (
    <TableCell className={className}>
        <TableCellLayout>
            <Text className={labelClass}>{label}</Text>
        </TableCellLayout>
    </TableCell>
);

export default memo(MembersTable);
