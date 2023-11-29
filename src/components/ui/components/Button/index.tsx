export type ButtonProps = {
    className?: string;
    size?: "small" | "medium" | "large";
    before?: React.ReactElement;
    after?: React.ReactElement;
    children: string;
    style?: object;
    rest?: object;
}

const Button: React.FC<ButtonProps> = ({ className, children, size = "medium", before, after, style, ...rest }) => {
    return (
        <button className="py-[3px] px-2 flex gap-1 items-center justify-between" style={style} {...rest}>
            <span>{before}</span>
            <span>{children}</span>
            <span>{after}</span>
        </button>
    )
}

export default Button;