import {
    Button,
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
    Menu,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    Toolbar,
    ToolbarButton,
} from "@fluentui/react-components";
import {
    MoreHorizontal20Filled,
    Bug24Regular,
    BookQuestionMark24Regular,
    ArrowSortDown24Filled,
    DocumentTableArrowRight24Regular,
} from "@fluentui/react-icons";
import Link from "next/link";
import { FC, memo } from "react";
import DonationsStatsChart from "../DonationsStatsChart";

const chartData = [20, 30, 15, 25, 40]; // Example data for the chart

const ChartTeamStats = () => {
    return (
        <Card className="h-fit w-full max-w-[296px] p-4">
            <CardHeader
                header={<h3 className="subtitle2Stronger m-0">Team&apos;s Stats</h3>}
                action={
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
                                <MenuItem disabled icon={<DocumentTableArrowRight24Regular />}>
                                    Export
                                </MenuItem>
                                <MenuItem icon={<BookQuestionMark24Regular />}>Help</MenuItem>
                                <MenuItem icon={<Bug24Regular />}>Report issue</MenuItem>
                            </MenuList>
                        </MenuPopover>
                    </Menu>
                }
            />

            <CardPreview className="relative block px-3 py-0">
                <Toolbar className="mb-5" size="small" aria-label="Default" as="div">
                    <ToolbarButton className="caption1 w-full min-w-1/3 max-w-fit gap-0" as="button" value="7">
                        7 days
                    </ToolbarButton>
                    <ToolbarButton className="caption1 w-full min-w-1/3 max-w-fit gap-0" as="button" value="30">
                        30 days
                    </ToolbarButton>
                    <ToolbarButton className="caption1 w-full min-w-1/3 max-w-fit gap-0" as="button" value="60">
                        60 days
                    </ToolbarButton>
                </Toolbar>

                <div className="relative h-40 w-full">
                    <DonationsStatsChart className="h-40 w-full" data={chartData} />
                </div>
            </CardPreview>

            <CardFooter>
                <Link
                    className="caption1Stronger m-0 flex h-3 flex-row flex-nowrap items-center justify-start p-0 hover:underline"
                    href="/stats/member-stats"
                >
                    View details <ArrowSortDown24Filled style={{ transform: "rotate(270deg)" }} />
                </Link>
            </CardFooter>
        </Card>
    );
};

export default memo(ChartTeamStats);