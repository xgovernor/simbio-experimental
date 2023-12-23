import { makeStyles, mergeClasses } from "@fluentui/react-components";
import { memo } from "react";

interface ISettingsCanvasProps {
  className?: string;
  children: React.ReactNode;
  rest?: object;
}

const useStyles = makeStyles({
  canvas: {
    // paddingTop: "18px",
    // paddingBottom: "18px"
  },
});

const SettingsCanvas: React.FC<ISettingsCanvasProps> = ({
  className,
  children,
  ...rest
}: ISettingsCanvasProps) => {
  const classes = useStyles();

  return (
    <>
      <div className={mergeClasses(classes.canvas, className)}>{children}</div>
    </>
  );
};

export default memo(SettingsCanvas);
