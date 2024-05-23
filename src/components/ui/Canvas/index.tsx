import { memo } from "react";

export interface ICanvasProps {
  className?: string;
  children: React.ReactNode;
  rest?: object;
}

const Canvas: React.FC<ICanvasProps> = ({
  className,
  children,
  ...rest
}: ICanvasProps) => {
  return (
    <main
      className="h-full min-h-[calc(100vh-88px)] overflow-y-auto bg-[#F4F4F4]  max-md:col-span-2 max-md:col-start-1 max-md:col-end-3 "
      style={{
        boxShadow:
          "0px 1.2px 3.6px rgba(0, 0, 0, 0.03), 0px 6.4px 14.4px rgba(0, 0, 0, 0.07)",
      }}
      {...rest}
    >
      <div>{children}</div>
    </main>
  );
};

export default memo(Canvas);
