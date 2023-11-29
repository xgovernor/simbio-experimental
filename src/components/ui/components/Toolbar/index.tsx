export type ToolbarProps = {
    className?: string;
    children?: React.ReactNode;
    size?: "small" | "medium" | "large";
    layout?: "vertical" | "horizontal";
}

const Toolbar: React.FC<ToolbarProps> = ({ children, className, size = "medium", layout = "horizontal", ...rest }) => {
    return (
        <div className="px-2 pt-1 rounded-[4px]">
            <div className={`gap-0 flex ${layout === "horizontal" ? "flex-row" : "flex-col"} flex-nowrap items-center justify-between`} {...rest}>
                {children}
            </div>
        </div>
    )
}


export type ToolbarButtonProps = {
    className?: string;
    children?: React.ReactNode;
    rest?: object;
}
export const ToolbarButton = ({ className, children, ...rest }: ToolbarProps) => {
    return (
        <div className="py-1.5 px-1.5 flex justify-center items-center" {...rest}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Toolbar;