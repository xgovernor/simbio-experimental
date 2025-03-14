import { IMenuItem } from "@/types";
import { Button } from "@fluentui/react-components";
import { usePathname, useRouter } from "next/navigation";
import { FC, memo } from "react";

interface ProfileMenuProps {
  menu: IMenuItem[];
}

const ProfileMenu: FC<ProfileMenuProps> = ({ menu }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex w-max flex-row flex-nowrap items-center justify-start overflow-x-auto">
      {menu.map((e, i) => {
        return (
          <Button
            key={i}
            className={
              e.url === pathname
                ? "event-none text-primary pointer-events-none !bg-white shadow"
                : "bg-transparent"
            }
            // disabled={isSamePath}
            icon={e.icon}
            onClick={() => router.push(e.url)}
            appearance="subtle"
          >
            {e.title}
          </Button>
        );
      })}
    </div>
  );
};

export default memo(ProfileMenu);
