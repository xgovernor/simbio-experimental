import CanvasHeader from "./CanvasHeader";
import CanvasBreadcrumb, { BreadcrumbLinkType } from "./CanvasBreadcrumb";
import { memo } from "react";

export interface ICanvasProps {
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  breadcrumb?: BreadcrumbLinkType[];
  style?: object;
  rest?: object;
}
const Canvas: React.FC<ICanvasProps> = ({
  className,
  title,
  icon,
  children,
  breadcrumb,
  style,
  ...rest
}: ICanvasProps) => {
  return (
    // <main className={mergeClasses(classes.Canvas, className)} style={style} {...rest}>
    <main
      className="overflow-y-auto bg-[#F4F4F4]"
      style={{
        minHeight: "calc(100vh - 88px)",
        boxShadow:
          "0px 1.2px 3.6px rgba(0, 0, 0, 0.03), 0px 6.4px 14.4px rgba(0, 0, 0, 0.07)",
        ...style,
      }}
      {...rest}
    >
      {title && <CanvasHeader title={title} icon={icon} />}
      {breadcrumb && <CanvasBreadcrumb links={breadcrumb} />}

      <div>{children}</div>
    </main>
  );
};

export default memo(Canvas);
