import { memo } from "react";

interface ICanvasHeaderProps {
  title?: string;
  icon?: React.ReactNode;
}

const CanvasHeader: React.FC<ICanvasHeaderProps> = ({
  title,
  icon,
}: ICanvasHeaderProps) => {
  return (
    <header className="sticky top-0 z-1 flex h-12 w-full flex-row flex-nowrap items-center justify-start bg-white">
      <div className="flex h-full w-full flex-row flex-nowrap items-center justify-start gap-3 px-5 py-[14px] text-primary">
        {icon && <>{icon}</>}
        {title && <p className="text-sm font-bold text-primary">{title}</p>}
      </div>
    </header>
  );
};

export default memo(CanvasHeader);
