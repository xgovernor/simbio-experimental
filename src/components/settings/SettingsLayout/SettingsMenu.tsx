import { ISettingsMenuTab } from "@/types";
import {
  Overflow,
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  TabValue,
  makeStyles,
  mergeClasses,
  shorthands,
} from "@fluentui/react-components";
import { memo } from "react";

interface ISettingsMenuProps {
  className?: string;
  tabs: ISettingsMenuTab[];
  selectedValue: TabValue;
  onTabSelect: (event: SelectTabEvent, data: SelectTabData) => void;
  rest?: object;
}

const useStyles = makeStyles({
  root: {
    paddingTop: "18px",
    paddingBottom: "18px",
    backgroundColor: "#FAFAFA",
    borderRightColor: "rgb(240, 240, 240)",
    borderRightWidth: "1px",
    borderRightStyle: "solid",
  },
  tabList: {},
  tab: {
    minHeight: "36px",
    paddingLeft: "20px",
    paddingRight: "20px",
    ...shorthands.borderRadius("0"),
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
});

const SettingsMenu: React.FC<ISettingsMenuProps> = ({
  className,
  tabs,
  selectedValue,
  onTabSelect,
  ...rest
}: ISettingsMenuProps) => {
  const classes = useStyles();

  return (
    <div className={mergeClasses(classes.root, className)}>
      <Overflow minimumVisible={2} overflowAxis="vertical">
        <TabList
          className={classes.tabList}
          appearance="subtle"
          vertical
          selectedValue={selectedValue}
          onTabSelect={onTabSelect}
        >
          {tabs.map((tab) => (
            <Tab
              className={classes.tab}
              key={tab.id}
              id={tab.id}
              icon={tab.icon}
              value={tab.id}
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>
      </Overflow>
    </div>
  );
};

export default memo(SettingsMenu);
