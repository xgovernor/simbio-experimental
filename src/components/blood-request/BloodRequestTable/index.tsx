"use client";
import { RequestItemType } from "@/app/blood-requests/page";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardPreview,
  FluentProvider,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableRow,
  Text,
  Toolbar,
  ToolbarButton,
  teamsLightTheme,
} from "@fluentui/react-components";
import {
  DocumentTableArrowRight24Regular,
  Add24Regular,
  MoreHorizontal20Filled,
  BookQuestionMark24Regular,
  Bug24Regular,
} from "@fluentui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

interface BloodRequestTablePropsType {
  className?: string;
  title: string;
  description?: string;
  data: RequestItemType[];
  rest?: object;
}

const BloodRequestTable: FC<BloodRequestTablePropsType> = ({
  className,
  title,
  description,
  data,
  ...rest
}: BloodRequestTablePropsType) => {
  const router = useRouter();
  const COLUMN = [
    {
      key: "patient",
      name: "Patient",
      fieldName: "patient",
      minWidth: 250,
      maxWidth: 250,
      className: "min-w-[255px]",
    },
    {
      key: "blood",
      name: "Blood",
      fieldName: "blood",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: "delivery_date",
      name: "Delivery",
      fieldName: "delivery_date",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: "healthIssue",
      name: "Health issue",
      fieldName: "healthIssue",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: "location",
      name: "Location",
      fieldName: "location",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: "status",
      name: "Status",
      fieldName: "status",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      key: "phone",
      name: "Phone",
      fieldName: "phone",
      minWidth: 100,
      maxWidth: 100,
    },
  ];

  return (
    <section
      className="mt-[22px] h-full w-full pb-[22px] pe-[22px] ps-[22px] pt-0"
      {...rest}
    >
      <div className="h-full w-full">
        <Card className="h-full w-full">
          <CardHeader
            className=""
            header={<h4 className="subtitle2Stronger m-0">{title}</h4>}
            description={<p>{description}</p>}
            action={
              <Toolbar aria-label="Default">
                <ToolbarButton
                  appearance="primary"
                  icon={<Add24Regular />}
                  // size="small"
                  style={{ width: "110px" }}
                  onClick={() => router.push("/blood-requests/new")}
                >
                  Add new
                </ToolbarButton>

                {/*
                                <ToolbarButton
                                    appearance="subtle"
                                    icon={<Filter16Regular />}
                                // size="small"
                                >
                                    Filter
                                </ToolbarButton> */}

                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <Button
                      appearance="transparent"
                      icon={<MoreHorizontal20Filled />}
                      aria-label="More options"
                    />
                  </MenuTrigger>

                  <MenuPopover>
                    <MenuList>
                      <MenuItem
                        onClick={() => alert("This feature comming soon!")}
                        icon={<DocumentTableArrowRight24Regular />}
                      >
                        Export
                      </MenuItem>
                      <MenuItem
                        onClick={() => router.push("/doc/page/request")}
                        icon={<BookQuestionMark24Regular />}
                      >
                        Help
                      </MenuItem>
                      <MenuItem
                        onClick={() => router.push("/issue/report")}
                        icon={<Bug24Regular />}
                      >
                        Report issue
                      </MenuItem>
                    </MenuList>
                  </MenuPopover>
                </Menu>
              </Toolbar>
            }
          />

          <CardPreview>
            <Table className="w-full" sortable noNativeElements={true}>
              <TableHeader className="w-full">
                <TableRow className="border-b-[rgb(240, 240, 240)] px-[22px]">
                  {COLUMN.map((item, index) => (
                    <TableCell key={index} className={item.className}>
                      <p className="body1Strong">{item.name}</p>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody className="w-full">
                {data.map((item, index) => (
                  <TableRow
                    key={index}
                    className="border-b-[rgb(240, 240, 240)] px-[22px]"
                  >
                    <TableCell className="min-w-[250px]">
                      <TableCellLayout
                        truncate
                        media={
                          <Avatar
                            aria-label={item.name}
                            name={item.name}
                            image={{ src: item.avatar }}
                            // badge={{ status: item.status }}
                          />
                        }
                      >
                        <Link href={`/members/${item._id}`}>
                          <Text className="body1Strong">{item.name}</Text>
                        </Link>
                      </TableCellLayout>
                    </TableCell>
                    <TableCell className="caption1 w-full">
                      <TableCellLayout>
                        {item?.blood_group && item.blood_group}{" "}
                        {item?.blood_type && item.blood_type} (
                        {item?.quantity && item.quantity} beg)
                      </TableCellLayout>
                    </TableCell>
                    <TableCell className="caption1Strong w-full">
                      <TableCellLayout>{item?.delivery_date}</TableCellLayout>
                    </TableCell>
                    <TableCell className="caption1">
                      <TableCellLayout>{item?.health_issue}</TableCellLayout>
                    </TableCell>
                    <TableCell className="caption1">
                      <TableCellLayout>{item?.phone}</TableCellLayout>
                    </TableCell>
                    <TableCell className="caption1">
                      <TableCellLayout>{item?.status}</TableCellLayout>
                    </TableCell>
                    <TableCell className="caption1">
                      <TableCellLayout>{item?.phone}</TableCellLayout>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardPreview>
        </Card>
      </div>
    </section>
  );
};

export default memo(BloodRequestTable);
