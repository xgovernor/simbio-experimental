/**
 * This component shows member's stats in Pie chart.
 * Labels: Active, Offline, Inactive, Cancelled.
 *
 * TODO:
 * - Component is not optimized yet.
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
import ReactECharts, { EChartsOption } from "echarts-for-react";
import { FC, memo } from "react";

const options: EChartsOption = {
    tooltip: {
        trigger: "item",
    },
    legend: {
        show: false,
    },
    label: {
        show: false,
    },
    series: [
        {
            name: "Male Age Demograpic",
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
            },
            label: {
                show: true,
                position: "center",
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 16,
                    fontWeight: "bold",
                },
            },
            labelLine: {
                show: true,
            },
            data: [
                { value: 1048, name: "18-24" },
                { value: 735, name: "25-31" },
                { value: 580, name: "32-38" },
                { value: 484, name: "39-44" },
                { value: 300, name: "45-51" },
                { value: 484, name: "52-59" },
                { value: 4, name: "59+" },
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

const ChartMemberAgeDemographic = () => {
    return (
        <Card className="w-full p-4">
            <CardHeader
                header={<h3 className="subtitle2Stronger m-0">Age Demographic</h3>}
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

export default memo(ChartMemberAgeDemographic);
