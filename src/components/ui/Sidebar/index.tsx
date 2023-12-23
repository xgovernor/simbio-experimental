import Link from "next/link";
import { memo } from "react";

export interface ISidebarMenuItem {
  name: string;
  description?: string;
  icon?: React.ReactElement;
  url: string;
}
interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
  menu: ISidebarMenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  className,
  children,
  menu,
}: SidebarProps) => {
  return (
    <aside
      className={className}
      style={{
        backgroundColor: "rgb(240 240 240)",
      }}
    >
      <div className="ms-1 flex w-full cursor-pointer flex-col flex-nowrap items-center justify-start gap-2">
        {menu.map((item, index) => (
          <Link
            key={index}
            className="flex h-full min-h-13 w-full min-w-13 max-w-13 flex-col flex-nowrap items-center justify-center gap-0 rounded px-1 hover:bg-white hover:text-primary"
            href={item.url}
            title={item.description}
          >
            {item.icon}
            <span className="caption2Strong text-inherit">{item.name}</span>
          </Link>
        ))}
      </div>

      {children}
    </aside>
  );
};

export default memo(Sidebar);
