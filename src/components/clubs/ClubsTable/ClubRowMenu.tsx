import { Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, ToolbarButton } from "@fluentui/react-components";
import { MoreVertical16Regular, BookQuestionMark24Regular, Bug24Regular } from "@fluentui/react-icons";
import Link from "next/link";
import { FC, memo } from "react";

const ClubRowMenu: FC = () => {
    return (
        <Menu>
            <MenuTrigger disableButtonEnhancement>
                <ToolbarButton appearance="subtle" icon={<MoreVertical16Regular />} aria-label="More options" />
            </MenuTrigger>

            <MenuPopover>
                <MenuList>
                    <MenuItem icon={<BookQuestionMark24Regular />}>
                        <Link href={"/help/clubs"} target="_blank">
                            Report
                        </Link>
                    </MenuItem>

                    <MenuItem icon={<Bug24Regular />}>
                        <Link href={"/issues/report"} target="_blank">
                            Disable
                        </Link>
                    </MenuItem>

                    <MenuItem icon={<Bug24Regular />}>
                        <Link href={"/issues/report"} target="_blank">
                            Remove
                        </Link>
                    </MenuItem>
                </MenuList>
            </MenuPopover>
        </Menu>
    );
};

export default memo(ClubRowMenu);
