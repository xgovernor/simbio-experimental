import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


import {
  MoreVertical16Regular,
  BookQuestionMark24Regular,
  Bug24Regular,
} from "@fluentui/react-icons";
import Link from "next/link";
import { FC, memo } from "react";

const TableMenu: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="icon">
          <MoreVertical16Regular className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <DropdownMenuCheckboxItem className="ps-0 py-0">
            <BookQuestionMark24Regular className="h-5 w-5" />
          </DropdownMenuCheckboxItem>

          <Link href={"/help/members"} target="_blank">
            Help
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem >

          <DropdownMenuCheckboxItem className="ps-0 py-0">
            <Bug24Regular className="h-5 w-5" />
          </DropdownMenuCheckboxItem>
          <Link href={"/issues/report"} target="_blank">
            Report issue
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(TableMenu);
