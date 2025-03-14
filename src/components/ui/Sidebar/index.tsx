"use client";

import Link from "next/link";
import { memo } from "react";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import SignOutIconIcon from "@/assets/icons/SignOutIconIcon";
import { usePathname } from "next/navigation";

export interface ISidebarMenuItem {
  name: string;
  description?: string;
  icon?: React.ReactElement<any>;
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
  const pathname = usePathname();

  return (
    <aside className={cn("bg-[rgb(240,240,240)]", className)}>
      <div className="ms-1 flex w-full cursor-pointer flex-col flex-nowrap items-center justify-start gap-2">
        {menu.map((item, index) => (
          <Link
            key={index}
            className={`hover:text-primary flex h-full min-h-[3.25rem] w-full max-w-[3.25rem] min-w-[3.25rem] flex-col flex-nowrap items-center justify-center gap-0 rounded-sm px-1 hover:bg-white hover:shadow ${item.url === pathname ? "bg-white shadow" : "bg-transparent"}`}
            href={item.url}
            title={item.description}
          >
            {item.icon}
            <span className="caption2Strong text-inherit">{item.name}</span>
          </Link>
        ))}

        {/* Logout Button */}
        <button
          className="hover:text-primary flex h-full min-h-[3.25rem] w-full max-w-[3.25rem] min-w-[3.25rem] flex-col flex-nowrap items-center justify-center gap-0 rounded-sm px-1 hover:bg-white hover:shadow"
          onClick={() => signOut()}
          title="Logout from account"
        >
          <SignOutIconIcon className="h-6 w-6" />
          <span className="caption2Strong text-inherit">Sign out</span>
        </button>
      </div>

      {children}
    </aside>
  );
};

export default memo(Sidebar);
