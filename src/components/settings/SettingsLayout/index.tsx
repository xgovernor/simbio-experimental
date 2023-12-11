import {
  Card,
  SelectTabData,
  SelectTabEvent,
  TabValue,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";
import { memo } from "react";
import { SettingsMenuTabType } from "@/types";
import SettingsMenu from "./SettingsMenu";
import SettingsCanvas from "./SettingsCanvas";

const useStyle = makeStyles({
  layout: {
    ...shorthands.margin("22px"),
    ...shorthands.padding("0"),
    display: "grid",
    gridTemplateColumns: "200px 1fr",
    gridTemplateRows: "1fr",
    ...shorthands.gap("0"),
  },
  menu: {},
  canvas: {},
});

interface ContactLayoutPropsType {
  className?: string;
  tabs: SettingsMenuTabType[];
  selectedValue: TabValue;
  onTabSelect: (event: SelectTabEvent, data: SelectTabData) => void;
  children: React.ReactNode;
  rest?: object;
}

const ContactLayout: React.FC<ContactLayoutPropsType> = ({
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
          className={classes.menu}
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
