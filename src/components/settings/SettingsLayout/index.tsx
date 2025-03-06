import {
  Card,
  SelectTabData,
  SelectTabEvent,
  TabValue,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";
import { memo } from "react";
import { ISettingsMenuTab } from "@/types";
import SettingsMenu from "./SettingsMenu";
import SettingsCanvas from "./SettingsCanvas";
import { cn } from "@/lib/utils";

const useStyle = makeStyles({
  layout: {
    minHeight: "calc(100vh - 220px)",
    ...shorthands.margin("20px"),
    ...shorthands.padding("0"),
    display: "grid",
    gridTemplateColumns: "200px 1fr",
    gridTemplateRows: "1fr",
    ...shorthands.gap("0"),
  },
  menu: {},
  canvas: {},
});

interface IContactLayoutProps {
  className?: string;
  tabs: ISettingsMenuTab[];
  selectedValue: TabValue;
  onTabSelect: (event: SelectTabEvent, data: SelectTabData) => void;
  children: React.ReactNode;
  rest?: object;
}

const ContactLayout: React.FC<IContactLayoutProps> = ({
  className,
  children,
  tabs,
  selectedValue,
  onTabSelect,
  ...rest
}) => {
  const classes = useStyle();

  return (
    <>
      <Card className={classes.layout} {...rest}>
        {/* Settings Menu */}
        <SettingsMenu
          className={cn(classes.menu)}
          tabs={tabs}
          selectedValue={selectedValue}
          onTabSelect={onTabSelect}
        />

        {/* Settings Body */}
        <SettingsCanvas className={classes.canvas}>{children}</SettingsCanvas>
      </Card>
    </>
  );
};

export default memo(ContactLayout);
