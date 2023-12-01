import { ReactElement, memo } from "react";

interface ChartMatrixPropsType {
    className?: string;
    children: ReactElement[];
}

const ChartMatrix: React.FC<ChartMatrixPropsType> = ({ className, children }: ChartMatrixPropsType) => {
    return (
        <section className="h-full w-full">
            <div className="grid h-fit w-full gap-5 p-5.5 grid-cols-4 2xl:grid-cols-6">
                {children}
            </div>
        </section>
    );
};

export default memo(ChartMatrix);