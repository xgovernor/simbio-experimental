import { ReactElement, memo } from "react";

interface TChartMatrixProps {
  className?: string;
  children: ReactElement[];
}

const ChartMatrix: React.FC<TChartMatrixProps> = ({
  className,
  children,
}: TChartMatrixProps) => {
  return (
    <section className="h-full w-full">
      <div className="grid h-fit w-full grid-cols-4 gap-5 p-[22px] 2xl:grid-cols-6">
        {children}
      </div>
    </section>
  );
};

export default memo(ChartMatrix);
