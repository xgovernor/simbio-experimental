import { memo } from "react";

interface CanvasHeaderPropsType {
    title?: string;
    icon?: React.ReactNode;
}

const CanvasHeader: React.FC<CanvasHeaderPropsType> = ({ title, icon }: CanvasHeaderPropsType) => {
  return (
    <header className="w-full h-12 sticky top-0 flex flex-row flex-nowrap items-center justify-start bg-white z-1">
      <div className="w-full h-full py-[14px] px-5 flex flex-row flex-nowrap items-center justify-start gap-3 text-primary">
        {icon && (<>{icon}</>)}
        {title && (
          <p className="font-bold text-sm text-primary">
            {title}
          </p>
        )}
      </div>
    </header>
  );
};

export default memo(CanvasHeader);
