export type ButtonProps = {
  className?: string;
  size?: "small" | "medium" | "large";
  before?: React.ReactElement;
  after?: React.ReactElement;
  children: string;
  style?: object;
  rest?: object;
};

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  size = "medium",
  before,
  after,
  style,
  ...rest
}) => {
  return (
    <button
      className="flex items-center justify-between gap-1 px-2 py-[3px]"
      style={style}
      {...rest}
    >
      <span>{before}</span>
      <span>{children}</span>
      <span>{after}</span>
    </button>
  );
};

export default Button;
