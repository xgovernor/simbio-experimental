import { MenuItemType } from "@/types";
import {
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  ToolbarButton,
} from "@fluentui/react-components";
import { Navigation24Filled } from "@fluentui/react-icons";
import { useRouter } from "next/navigation";
import { memo } from "react";

interface OptionalMenuPropsType {
  menu: MenuItemType[];
}

const OptionalMenu: React.FC<OptionalMenuPropsType> = ({
  menu,
}: OptionalMenuPropsType) => {
  const router = useRouter();

  return (
    <Menu positioning="below-end">
      <MenuTrigger>
        <ToolbarButton appearance="subtle" icon={<Navigation24Filled />} />
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

export default memo(OptionalMenu);
