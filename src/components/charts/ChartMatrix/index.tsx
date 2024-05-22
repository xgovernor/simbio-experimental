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
      <div className="xs:grid-cols-1 grid h-fit w-full gap-5 p-[22px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {children}
      </div>
    </section>
  );
};

export default memo(ChartMatrix);
