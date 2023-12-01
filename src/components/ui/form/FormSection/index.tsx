import { memo } from "react"

interface FormSectionPropsType {
    className?: string;
    title?: string;
    children?: React.ReactNode;
    rest?: object;
}

const FormSection: React.FC<FormSectionPropsType> = ({ className, title, children, ...rest }: FormSectionPropsType) => {

    return (
        <div className="w-full mb-5">
            <div className="mb-[15px] py-2 px-0 border-b border-b-[#E0E0E0]">
                {title && (
                    <p className="text-[#424242] text-[13px] leading-[18px] font-bold">
                        {title}
                    </p>
                )}
            </div>

            <div className="flex flex-row flex-wrap items-center justify-between gap-4">{children}</div>
        </div>
    );
};

export default memo(FormSection);