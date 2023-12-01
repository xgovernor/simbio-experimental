import { MenuItemType } from "@/types";
import { Button } from "@fluentui/react-components";
import { usePathname, useRouter } from "next/navigation";
import { FC, memo } from "react";

interface ProfileMenuProps {
    menu: MenuItemType[];
}

const ProfileMenu: FC<ProfileMenuProps> = ({ menu }) => {
    const pathName = usePathname();
    const router = useRouter();

    return (
        <div className="flex w-full flex-row flex-nowrap items-center justify-start">
            {menu.map((e, i) => {
                const isSamePath = e.url === pathName;

                return (
                    <Button
                        key={i}
                        className={isSamePath ? "text-primary pointer-events-none event-none" : ""}
                        // disabled={isSamePath}
                        icon={e.icon}
                        onClick={() => router.push(e.url)}
                        appearance="transparent"
                    >
                        {e.title}
                    </Button>
                );
            })}
        </div>
    );
};

export default memo(ProfileMenu);