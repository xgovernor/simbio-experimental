import { memo } from "react";

interface CanvasHeaderPropsType {
    title?: string;
    icon?: React.ReactNode;
}

const CanvasHeader: React.FC<CanvasHeaderPropsType> = ({ title, icon }: CanvasHeaderPropsType) => {

    return (
        <header className="w-full h-12 sticky top-0 flex flex-row flex-nowrap items-center justify-start bg-white z-1"
            style={{
                // boxShadow: "0px 1.2px 3.6px rgba(0, 0, 0, 0.03), 0px 6.4px 14.4px rgba(0, 0, 0, 0.07)",
            }}>
            <div className="w-full h-full py-[14px] px-5 flex flex-row flex-nowrap items-center justify-start gap-3">
                {icon && icon}

                {title && (
                    <p className="font-bold text-sm">
                        {title}
                    </p>
                )}
            </div>
        </header>
    );
};

export default memo(CanvasHeader);