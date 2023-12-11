export type ToolbarProps = {
  className?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  layout?: "vertical" | "horizontal";
};

const Toolbar: React.FC<ToolbarProps> = ({
  children,
  className,
  size = "medium",
  layout = "horizontal",
  ...rest
}) => {
  return (
    <div className="rounded-[4px] px-2 pt-1">
      <div
        className={`flex gap-0 ${
          layout === "horizontal" ? "flex-row" : "flex-col"
        } flex-nowrap items-center justify-between`}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export type ToolbarButtonProps = {
  className?: string;
  children?: React.ReactNode;
  rest?: object;
};
export const ToolbarButton = ({
  className,
  children,
  ...rest
}: ToolbarProps) => {
  return (
    <div className="flex items-center justify-center px-1.5 py-1.5" {...rest}>
      <div>{children}</div>
    </div>
  );
};

export default Toolbar;
