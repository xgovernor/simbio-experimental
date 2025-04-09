"use client";

import { IMenuItem } from "@/types";
import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import { Add20Regular, ChevronDown20Regular } from "@fluentui/react-icons";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

export interface IAddNewMenuProps {
  menu: IMenuItem[];
}

const AddNewMenu: FC<IAddNewMenuProps> = ({ menu }: IAddNewMenuProps) => {
  const router = useRouter();

  return (
    <Menu positioning="below-end">
      <MenuTrigger>
        <Button  appearance="transparent" iconOnly icon={<Add20Regular className="text-white hover:text-white/70" />} iconPosition="after" />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {menu.map((e, i) => (
            <MenuItem key={i} icon={e.icon} onClick={() => router.push(e.url)}>
              {e.title}
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export default memo(AddNewMenu);
