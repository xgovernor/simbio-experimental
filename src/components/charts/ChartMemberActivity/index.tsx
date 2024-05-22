"use client";
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
import { FC, memo } from "react";

import ReactECharts from "echarts-for-react/lib/core";
import {
  RadarChart,
  // BarChart,
  // LineChart,
  // PieChart,
  // ScatterChart,
  // GaugeChart,
  // FunnelChart,
  // EffectScatterChart,
  // CandlestickChart,
  // HeatmapChart,
  // TreeChart,
  // TreemapChart,
  // SunburstChart,
  // MapChart,
  // LinesChart,
  // GraphChart,
  // BoxplotChart,
  // ParallelChart,
  // SankeyChart,
  // ThemeRiverChart,
  // PictorialBarChart,
  // CustomChart
} from "echarts/charts";
import {
  // GridSimpleComponent,
  // GridComponent,
  // PolarComponent,
  RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  // ToolboxComponent,
  // TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  // TitleComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  // LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  // DatasetComponent,
} from "echarts/components";
import * as echarts from "echarts/core";
import {
  // CanvasRenderer,
  SVGRenderer,
} from "echarts/renderers";
import React from "react";
import { EChartsOption } from "echarts-for-react";

// Register the required components
echarts.use([
  // GridSimpleComponent,
  // GridComponent,
  // PolarComponent,
  RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  // ToolboxComponent,
  // TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  // TitleComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  // LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  // DatasetComponent,
  // TitleComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  // TimelineComponent,
  // DataZoomComponent,
  // BrushComponent,
  // VisualMapComponent,
  // ToolboxComponent,
  // GraphicComponent,
  // TooltipComponent,
  RadarChart,
  RadarComponent,
  // CanvasRenderer,
  // DatasetComponent,
  SVGRenderer,
  // PolarComponent,

  // BarChart,
  // LineChart,
  // PieChart,
  // ScatterChart,
  // GaugeChart,
  // FunnelChart,
  // EffectScatterChart,
  // CandlestickChart,
  // HeatmapChart,
  // TreeChart,
  // TreemapChart,
  // SunburstChart,
  // MapChart,
  // LinesChart,
  // GraphChart,
  // BoxplotChart,
  // ParallelChart,
  // SankeyChart,
  // ThemeRiverChart,
  // PictorialBarChart,
  // CustomChart
]);

const dataGZ = [
  [26, 37, 27, 1.163, 27, 13, 1],
  [85, 62, 71, 1.195, 60, 8, 2],
  [78, 38, 74, 1.363, 37, 7, 3],
  [21, 21, 36, 0.634, 40, 9, 4],
];

const options: EChartsOption = {
  animation: false,
  legend: {
    show: false,
  },
  label: {
    show: true,
  },
  radar: {
    indicator: [
      { name: "Donation", max: 300 },
      { name: "Fundrise", max: 250 },
      { name: "SO2", max: 100 },
      { name: "Volunteer", max: 5 },
      { name: "NO2", max: 200 },
      { name: "Mannagement", max: 300 },
    ],
    shape: "circle",
    splitNumber: 5,
    axisName: {
      color: "#000",
    },
    splitLine: {
      lineStyle: {
        color: [
          "rgba(92, 123, 217, 0.1)",
          "rgba(92, 123, 217, 0.2)",
          "rgba(92, 123, 217, 0.4)",
          "rgba(92, 123, 217, 0.6)",
          "rgba(92, 123, 217, 0.8)",
          "rgba(92, 123, 217, 1)",
        ].reverse(),
      },
    },
    splitArea: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: "#5C7BD9",
      },
    },
  },
  series: [
    {
      name: "Guangzhou",
      type: "radar",
      lineStyle: {
        width: 1,
        opacity: 0.5,
      },
      data: dataGZ,
      symbol: "none",
      itemStyle: {
        color: "#5C7BD9",
      },
      areaStyle: {
        opacity: 0.05,
      },
    },
  ],
};

const Chart: FC = () => (
  <ReactECharts
    echarts={echarts}
    className="h-55 max-h-55 w-full"
    option={options}
    notMerge={true}
    lazyUpdate={true}
    opts={{ renderer: "svg", height: 212, width: "auto" }}
  />
);

const ChartMemberActivity = () => {
  return (
    <Card className="w-full p-4">
      <CardHeader
        header={<h3 className="subtitle2Stronger m-0">Member Activity</h3>}
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

export default memo(ChartMemberActivity);
