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
