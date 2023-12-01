import { mergeClasses } from "@fluentui/react-components";
import ReactECharts from "echarts-for-react";
// import * as echarts from 'echarts/core';
// import { BarChart } from 'echarts/charts';
// import { TitleComponent, TooltipComponent } from 'echarts/components';
// import { CanvasRenderer } from 'echarts/renderers';
import { useState } from "react";

// Register the required components
// echarts.use([TitleComponent, TooltipComponent, BarChart, CanvasRenderer]);
interface DonationsStatsChartPropsType {
    className?: string;
    data?: object;
    rest?: object;
}

const DonationsStatsChart: React.FC<DonationsStatsChartPropsType> = ({
    className,
    data,
    ...rest
}: DonationsStatsChartPropsType) => {
    const [options, setOptions] = useState({
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
    });

    return (
        <>
            <ReactECharts
                className={mergeClasses(className)}
                option={options}
                opts={{ renderer: "canvas", height: 160, width: "auto" }}
                {...rest}
            />
        </>
    );
};

export default DonationsStatsChart;