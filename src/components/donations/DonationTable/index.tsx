import {
  makeStyles,
  shorthands,
  tokens,
  typographyStyles,
} from "@fluentui/react-components";
import { FC, memo, useState } from "react";
import DonationTableMenu from "./DonationTableMenu";
import { DataGrid } from "@/components/ui/DataGrid";
import { columns, filters } from "./data";

export type DonationItemType = {
  id: string;
  avatar: string;
  name: string;
  amount: string;
  date: string;
  location: string;
  phone: string;
  email: string;
  gender: string;
  reference: string;
};

interface DonationsTablePropsType {
  className?: string;
  title: string;
  description?: string;
  data: DonationItemType[];
  rest?: object;
}

const useStyles = makeStyles({
  header: {
    // backgroundColor: tokens.colorNeutralBackground4Pressed
  },

  header_title: {
    ...typographyStyles.subtitle2Stronger,
  },
  table_description: {
    ...typographyStyles.caption1,
    color: tokens.colorNeutralForeground3,
  },

  memberTable_head_row: {
    ...shorthands.padding("", "22px"),
    // MozBorderBottomColors: ...tokens.
    borderBottomColor: "rgb(240, 240, 240)",
  },
  thc_title: {
    width: "100%",
    minWidth: "100px",
  },
  thc_label: {
    width: "inherit",
    position: "relative",
    display: "inline-block",
    ...typographyStyles.body1Strong,
  },
  thc_name: {
    minWidth: "250px",
    maxWidth: "250px",
  },
  thc_amount: {
    minWidth: "100px",
    maxWidth: "180px",
  },
  thc_blood: {
    minWidth: "100px",
    maxWidth: "130px",
  },
  thc_date: {
    minWidth: "100px",
    maxWidth: "180px",
  },
  thc_phone: {},
  thc_location: {},
  thc_prefLocation: {},

  memberTable_body_row: {
    ...shorthands.padding("", "22px"),
    borderBottomColor: "rgb(240, 240, 240)",
  },
  // Table Body Cell
  tbc_root: {
    ...typographyStyles.caption1,
    width: "100%",
    maxWidth: "100px",
  },
  tbc_text: {
    width: "inherit",
    position: "relative",
    ...typographyStyles.caption1,
    color: tokens.colorNeutralForeground3,
  },
  tbc_name: {
    minWidth: "250px",
    maxWidth: "250px",
  },
  tbc_name_label: {
    ...typographyStyles.body1Strong,
    color: tokens.colorNeutralForeground1,
  },
  tbc_amount: {
    minWidth: "100px",
    maxWidth: "180px",
  },
  tbc_date: {
    minWidth: "100px",
    maxWidth: "180px",
    ...typographyStyles.caption1Strong,
  },
  tbc_donation: {},
  tbc_phone: {},
  tbc_location: {},
  tbc_prefLocation: {},
});

const DonationsTable: FC<DonationsTablePropsType> = ({
  className,
  title,
  description,
  data,
  ...rest
}: DonationsTablePropsType) => {
  const classes = useStyles();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <section
      className="gap grid h-full w-full gap-3 rounded bg-white"
      style={{
        boxShadow: "0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)",
      }}
    >
      {/* Card Header */}
      <div className="relative flex w-full flex-nowrap justify-between gap-3 pe-2 ps-5 pt-4">
        <div className="">
          <h1 className="text-[16px] font-bold leading-[22px] text-[#242424]">
            {title}
          </h1>
          <p className="text-xs text-[#616161]">{description}</p>
        </div>

        <div className="flex gap-2">
          <DonationTableMenu />
        </div>
      </div>

      {/* Card Body */}
      <div className="pb-4">
        <DataGrid columns={columns} data={data} filters={filters} />
      </div>
    </section>
  );
};

export default memo(DonationsTable);
