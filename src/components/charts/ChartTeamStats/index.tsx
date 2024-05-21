/**
 * This component shows member's stats in Pie chart.
 * Labels: Active, Offline, Inactive, Cancelled.
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
import { memo } from "react";
import ReactECharts from "echarts-for-react/lib/core";
import { PieChart } from "echarts/charts";
import * as echarts from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import React from "react";
import {
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
} from "echarts/components";
import { EChartsOption } from "echarts-for-react";

// Register the required components
echarts.use([
  SVGRenderer,
  PieChart,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
]);

const options: EChartsOption = {
  animation: false,
  foo: "bar",
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

const Chart = () => (
  <ReactECharts
    echarts={echarts}
    className="h-55 max-h-55 w-full"
    option={options}
    notMerge={true}
    lazyUpdate={true}
    opts={{ renderer: "svg", height: 212, width: "auto" }}
  />
);

const ChartTeamStats = () => {
  return (
    <Card className="w-full p-4">
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

export default memo(ChartTeamStats);
