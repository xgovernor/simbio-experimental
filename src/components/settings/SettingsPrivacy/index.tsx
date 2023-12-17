import {
  Button,
  Divider,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import { FC, memo } from "react";
import EXCEL_ICON from "@/assets/icons/excel.svg";
import Image from "next/image";
import Link from "next/link";
import SettingsTemplate from "../SettingsTemplate";

const NOTICE_LINKS = [
  {
    id: "SMBL1",
    title: "Privacy statement",
    url: "/privacy",
  },
  {
    id: "SMBL2",
    title: "Code of conduct",
    url: "/code-of-conduct",
  },
  {
    id: "SMBL3",
    title: "Data safety",
    url: "/data-safety",
  },
];

interface SettingsPrivacyPropsType {
  className?: string;
}

const SettingsPrivacy: FC<SettingsPrivacyPropsType> = ({
  className,
}: SettingsPrivacyPropsType) => {
  return (
    <SettingsTemplate className={className} title="Security">
      <>
        <section className="mb-6">
          <h4 className="subtitle2 mb-2">Search history</h4>
          <p className="body1 mb-4">
            Simbio uses your previous searches to improve search results. You
            can delete or download your search history any time.
          </p>

          <div className="flex flex-row justify-start gap-3">
            <Button appearance="outline">Delete search history</Button>

            <Menu>
              <MenuTrigger>
                <Button appearance="outline">Export</Button>
              </MenuTrigger>

              <MenuPopover>
                <MenuList>
                  <MenuItem>CSV format</MenuItem>
                  <MenuItem
                    icon={
                      <Image
                        src={EXCEL_ICON}
                        width={16}
                        height={16}
                        alt="Export in Excel file format"
                        loading="lazy"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjExOSIgdmlld0JveD0iMCAwIDEyMCAxMTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ny44NTA4IDc0LjIzNTFDOTYuMDE5NiA3MC42MjE2IDk0LjA1NyA2Ny4xNDMzIDkxLjk3MTcgNjMuODExQzgyLjAzMjQgNzkuMjM4IDY1LjM5MiA5My4wNDE0IDQ0LjMwODUgMTAxLjYyNUw1MS4zNjE4IDExOC45NUM3My4xNjgxIDExMC4wNzMgODkuMzgyOCA5My41NzE1IDk3Ljg1MDggNzQuMjM1MVoiIGZpbGw9IiNGQkJDMDUiLz4KPHBhdGggZD0iTTU0LjcwNzUgOTUuMzYwNEM1Ny41OTE5IDkzLjc1NzIgNjAuMzgxMiA5Mi4wNjc5IDYzLjA2OTIgOTAuMjk5NEM0NC41MjA1IDgxLjQwODggMjcuMzU0OCA2Mi44NDEgMTcuMzIzMyAzOC4yMDE1TDAgNDUuMjU0NEMxMC4zNjk3IDcwLjczMTYgMzEuMTQ5NCA4OC41OTY4IDU0LjcwNzUgOTUuMzYwNFoiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZD0iTTgyLjUwMzggMTcuMzI0NUw3NS40NTA0IDBDNTAuNjM2MiAxMC4xMDI3IDMzLjA1MzIgMzAuMDgxOCAyNS45MDU1IDUyLjg3OTdDMjcuNjM5NiA1NS43MzY3IDI5LjQ2OTcgNTguNDc3MiAzMS4zNzExIDYxLjExODNDNDAuNjAxNCA0My4zMTkyIDU4LjczMTggMjcuMDAyOSA4Mi41MDM4IDE3LjMyNDVaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMTkuNDQxIDczLjI2NjdDMTA5LjgwOSA0OS42MDc5IDkxLjIwNTMgMzIuNTE3OCA2OS43MzYgMjQuNzc4OUM2Ni42MzY1IDI2LjU5NzQgNjMuNjU0MSAyOC41MTMxIDYwLjc5NzUgMzAuNTE5NUM3Ny42MjM0IDQwLjEwNzIgOTIuODg2OCA1Ny42NDkzIDEwMi4xMTcgODAuMzIwMUwxMTkuNDQxIDczLjI2NjdaIiBmaWxsPSIjRUE0MzM1Ii8+CjxwYXRoIGQ9Ik02Mi4yNTgzIDcxLjg3NTlDNjguMjA5NiA3MS44NzU5IDczLjAzNDEgNjcuMDUxNCA3My4wMzQxIDYxLjEwMDFDNzMuMDM0MSA1NS4xNDg3IDY4LjIwOTYgNTAuMzI0MiA2Mi4yNTgzIDUwLjMyNDJDNTYuMzA2OSA1MC4zMjQyIDUxLjQ4MjQgNTUuMTQ4NyA1MS40ODI0IDYxLjEwMDFDNTEuNDgyNCA2Ny4wNTE0IDU2LjMwNjkgNzEuODc1OSA2Mi4yNTgzIDcxLjg3NTlaIiBmaWxsPSIjMTk0QjY3Ii8+Cjwvc3ZnPgo="
                      />
                    }
                  >
                    Excel format
                  </MenuItem>
                  <MenuItem disabled>TSV format</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
          </div>
        </section>

        <Divider appearance="subtle" />

        <section className="mb-6 mt-5">
          <h4 className="subtitle2">Notice</h4>
          <p className="body1 mt-1">
            Simbio uses your previous searches to improve search results. You
            can delete or download your search history any time.
          </p>

          <div className="e mt-4">
            {NOTICE_LINKS?.map(({ id, title, url }) => (
              <Link
                key={id}
                className="body1 mb-2 block text-black hover:underline "
                style={{
                  color: "rgb(0, 120, 212)",
                }}
                href={url}
              >
                {title}
              </Link>
            ))}
          </div>
        </section>
      </>
    </SettingsTemplate>
  );
};

export default memo(SettingsPrivacy);
