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
      <div className="text-primary flex h-full w-full flex-row flex-nowrap items-center justify-start gap-3 px-5 py-[14px]">
        {icon && <>{icon}</>}
        {title && <p className="text-primary text-sm font-bold">{title}</p>}
      </div>
    </header>
  );
};

export default memo(CanvasHeader);
