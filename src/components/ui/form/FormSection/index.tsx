import { memo } from "react";

interface FormSectionPropsType {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  rest?: object;
}

const FormSection: React.FC<FormSectionPropsType> = ({
  className,
  title,
  children,
  ...rest
}: FormSectionPropsType) => {
  return (
    <div className="mb-5 w-full">
      {title && (
        <div className="mb-[15px] border-b border-b-[#E0E0E0] px-0 py-2">
          <p className="text-[13px] font-bold leading-[18px] text-[#424242]">
            {title}
          </p>
        </div>
      )}

      <div className="flex flex-row flex-wrap items-center justify-between gap-4">
        {children}
      </div>
    </div>
  );
};

export default memo(FormSection);
