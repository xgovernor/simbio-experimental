/**
 * This component shows member's stats in Pie chart.
 * Labels: Active, Offline, Inactive, Cancelled.
 *
 * TODO:
 * - Component is not optimised yet.
 */
import {
    Button,
    Card,
    CardHeader,
    CardPreview,
    Menu,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
} from "@fluentui/react-components";
import {
    MoreHorizontal20Filled,
    Bug24Regular,
    BookQuestionMark24Regular,
    DocumentTableArrowRight24Regular,
} from "@fluentui/react-icons";
import ReactECharts from "echarts-for-react";
// import * as echarts from 'echarts/core';
// import { BarChart } from 'echarts/charts';
// import { TitleComponent, TooltipComponent } from 'echarts/components';
// import { CanvasRenderer } from 'echarts/renderers';
import { FC, memo } from "react";


const options = {
    tooltip: {
        trigger: "item",
    },
    legend: {
        show: false,
    },
    series: [
        {
            name: "Member Stats",
            type: "pie",
            radius: ["70%", "100%"],
            center: ["100%", "50%"],
            // adjust the start angle
            clockwise: true,
            startAngle: -90,
            label: {
                show: true,
                formatter(param: any) {
                    // correct the percentage
                    return param.name + " (" + param.percent! * 2 + "%)";
                },
            },
            data: [
                { value: 1048, name: "Active" },
                { value: 735, name: "Inactive" },
                { value: 580, name: "Offline" },
                { value: 484, name: "Cancelled" },
                {
                    // make an record to fill the bottom 50%
                    value: 1048 + 735 + 580 + 484,
                    itemStyle: {
                        // stop the chart from rendering this piece
                        color: "none",
                        decal: {
                            symbol: "none",
                        },
                    },
                    label: {
                        show: false,
                    },
                },
            ],
        },
    ],
};

const Chart: FC = () => (
    <ReactECharts
        className="h-55 max-h-55 w-full"
        option={options}
        opts={{ renderer: "svg", height: 212, width: "auto" }}
    />
);

const ChartMemberStats = () => {

    return (
        <Card className="w-full p-4">
            <CardHeader
                header={<h3 className="subtitle2Stronger m-0">Members Stats</h3>}
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

            <CardPreview className="relative m-0 block px-3">
                {/**
                 * Time period selector
                 * This filters Pie chart data based on time period like 7 days, 30 days, 90 days, etc.
                 * This feature was implemented but It is commented now due to not necessary, as well occurence some style erros .
                 */}

                <div className="relative h-55 w-full">
                    <Chart />
                </div>
            </CardPreview>
        </Card>
    );
};

export default memo(ChartMemberStats);
