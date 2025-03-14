import Date from "@/components/ui/Date";
import { TSupportMessagePriority, TSupportMessageStatus } from "@/types";
import { getColorWithKey } from "@/utils/color-factory";
import { Button, Card, CardPreview, Menu, MenuDivider, MenuItem, MenuList, MenuPopover, MenuTrigger } from "@fluentui/react-components";
import { CircleEllipsisIcon } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

const COLUMNS = [
  // {
  //     id: "SMB0",
  //     className: "",
  //     title: "ID",
  // },
  {
    id: "SMB1",
    className: "w-full min-w-xs",
    title: "Title",
  },
  {
    id: "SMB2",
    className: "w-[160px]",
    title: "Priority",
  },
  {
    id: "SMB3",
    className: "w-[160px]",
    title: "From",
  },
  {
    id: "SMB4",
    className: "",
    title: "Date",
  },
];

export type TSupportMessageItem = {
  id: string;
  incident_id: string;
  title: string;
  priority: TSupportMessagePriority;
  timestamp: string;
  from: {
    id: string;
    title: string;
  };
  message: string[];
  status: TSupportMessageStatus;
  isViewed: boolean;
};

const MESSAGES: TSupportMessageItem[] = [
  {
    id: "SMB-SM00",
    incident_id: "12534",
    title:
      "Quo laudantium error corporis accusamus unde, labore quidem non officiis.",
    priority: "high",
    timestamp: "",
    from: {
      id: "SU000",
      title: "John Doe",
    },
    message: [
      "Hi Team",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit commodi doloremque.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit? ...",
    ],
    status: "open",
    isViewed: false,
  },
  {
    id: "SMB-SM01",
    incident_id: "12537",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    priority: "none",
    timestamp: "",
    from: {
      id: "SU001",
      title: "Muhammad Sunny",
    },
    message: [
      "Hi",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit commodi doloremque.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur natus aut reiciendis nisi sed! Temporibus, quibusdam voluptates? ...",
    ],
    status: "open",
    isViewed: false,
  },
  {
    id: "SMB-SM02",
    incident_id: "12545",
    title:
      "Excepturi at labore vel accusamus exercitationem quam, amet provident!",
    priority: "low",
    timestamp: "",
    from: {
      id: "SU001",
      title: "Muhammad Sunny",
    },
    message: [
      "Hi Team",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur natus aut reiciendis nisi sed! Temporibus, quibusdam voluptates?",
    ],
    status: "delete",
    isViewed: true,
  },
  {
    id: "SMB-SM03",
    incident_id: "12934",
    title:
      "impedit possimus praesentium voluptatum omnis assumenda rem autem magni consequatur nostrum distinctio unde.",
    priority: "medium",
    timestamp: "",
    from: {
      id: "SU001",
      title: "Muhammad Sunny",
    },
    message: [
      "Hi Team",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit commodi doloremque.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit? ...",
    ],
    status: "close",
    isViewed: true,
  },
  {
    id: "SMB-SM04",
    incident_id: "13534",
    title:
      "Excepturi at labore vel accusamus exercitationem assumenda ex incidunt eum quam, amet provident!",
    priority: "high",
    timestamp: "",
    from: {
      id: "SU001",
      title: "Muhammad Sunny",
    },
    message: [
      "Hi Team",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit commodi doloremque.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur natus aut reiciendis nisi sed! Temporibus, quibusdam voluptates? ...",
    ],
    status: "close",
    isViewed: false,
  },
  {
    id: "SMB-SM05",
    incident_id: "11534",
    title: "Odit consequatur natus aut reiciendis nisi sed!",
    priority: "high",
    timestamp: "",
    from: {
      id: "SU001",
      title: "Muhammad Sunny",
    },
    message: [
      "Hi Team",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit commodi doloremque.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, quibusdam voluptates? ...",
    ],
    status: "open",
    isViewed: true,
  },
];

export type MessagesTablePropsType = {
  title: string;
  address: string;
  logo: string;
};

const MessagesTable: React.FC<MessagesTablePropsType> = ({
  title,
  address,
  logo,
}) => {
  return (
    <Card
      className="w-full rounded-md p-0"
      style={{
        height: "calc(100vh - 187px)",
      }}
    >
      <CardPreview className="m-0 min-w-full p-0">
        <SupportHeader title={title} address={address} logo={logo} />

        {/* content overflow section remove table and thead but keep tbody and change tbody to section, in order to have scrollable overflow section */}
        <table className="max-h-content h-fit w-full">

          <thead className="min-h-0 w-full">
            <tr className="grid grid-cols-[100px_auto_80px] w-full border-b border-b-[#e5e7eb]" >
              <th className={`body1Strong px-4 py-3 text-left`}>Date</th>
              <th className={`body1Strong px-4 py-3 text-left`}>Title</th>
              <th className={`body1Strong px-4 py-3 text-right`}></th>
            </tr>
          </thead>

          <tbody className="min-h-max w-full overflow-y-auto">
            {MESSAGES?.map((message, i) => <TableRow key={i} {...message} />)}
          </tbody>
        </table>
      </CardPreview>
    </Card>
  );
};

const TableRow: React.FC<TSupportMessageItem> = ({
  incident_id,
  title,
  priority,
  timestamp,
  from,
  message,
  status,
  isViewed,
}) => {
  return (
    <tr
      role="row"
      className="grid w-full cursor-pointer grid-cols-[100px_auto_80px] border-b border-b-[#f0f0f0] hover:bg-[#f5f5f5]"
    >
      <td className="truncate px-3 py-2">
        <Date dateString={timestamp as string} />
      </td>

      <td className="px-3 py-2">
        <h3>
          <span className={`${!isViewed && "body1Strong"} truncate`}>
            {title}
          </span>
        </h3>
      </td>

      <td className="truncate px-3 py-2">
        <Menu positioning={{ autoSize: true }}>
          <MenuTrigger disableButtonEnhancement>
            <Button icon={<CircleEllipsisIcon />} appearance="subtle" />
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem>View</MenuItem>
              <MenuItem>Report</MenuItem>
              <MenuDivider />
              <MenuItem>Remove</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </td>
    </tr>
  );
};

const PriorityBadge = ({
  priority,
  className,
}: {
  priority: string;
  className?: string;
}) => {
  return (
    <span
      className={`${className} text-[10px] flex max-w-fit items-center justify-center gap-1 rounded-full border border-gray-500 ${getColorWithKey(
        priority,
        "border",
      )} px-2 font-mono leading-none text-gray-800`}
      style={{
        padding: "2px 5px",
      }}
    >
      <span
        className={`h-2 min-h-2 w-2 min-w-2 rounded-full ${getColorWithKey(
          priority,
          "bg",
        )}`}
      ></span>
      <span
        className={`text-xs text-gray-600 ${getColorWithKey(priority, "text")}`}
      >
        {priority}
      </span>
    </span>
  );
};

const SupportHeader = ({ logo, title, address }: any) => {
  return (
    <>
      <header className="h-fit max-h-fit">
        <div className="flex items-center justify-start gap-3 px-5 py-5">
          <div className="img">
            <Image
              src={logo}
              width={48}
              height={48}
              alt="blood-donor"
              loading="lazy"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjExOSIgdmlld0JveD0iMCAwIDEyMCAxMTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ny44NTA4IDc0LjIzNTFDOTYuMDE5NiA3MC42MjE2IDk0LjA1NyA2Ny4xNDMzIDkxLjk3MTcgNjMuODExQzgyLjAzMjQgNzkuMjM4IDY1LjM5MiA5My4wNDE0IDQ0LjMwODUgMTAxLjYyNUw1MS4zNjE4IDExOC45NUM3My4xNjgxIDExMC4wNzMgODkuMzgyOCA5My41NzE1IDk3Ljg1MDggNzQuMjM1MVoiIGZpbGw9IiNGQkJDMDUiLz4KPHBhdGggZD0iTTU0LjcwNzUgOTUuMzYwNEM1Ny41OTE5IDkzLjc1NzIgNjAuMzgxMiA5Mi4wNjc5IDYzLjA2OTIgOTAuMjk5NEM0NC41MjA1IDgxLjQwODggMjcuMzU0OCA2Mi44NDEgMTcuMzIzMyAzOC4yMDE1TDAgNDUuMjU0NEMxMC4zNjk3IDcwLjczMTYgMzEuMTQ5NCA4OC41OTY4IDU0LjcwNzUgOTUuMzYwNFoiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZD0iTTgyLjUwMzggMTcuMzI0NUw3NS40NTA0IDBDNTAuNjM2MiAxMC4xMDI3IDMzLjA1MzIgMzAuMDgxOCAyNS45MDU1IDUyLjg3OTdDMjcuNjM5NiA1NS43MzY3IDI5LjQ2OTcgNTguNDc3MiAzMS4zNzExIDYxLjExODNDNDAuNjAxNCA0My4zMTkyIDU4LjczMTggMjcuMDAyOSA4Mi41MDM4IDE3LjMyNDVaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMTkuNDQxIDczLjI2NjdDMTA5LjgwOSA0OS42MDc5IDkxLjIwNTMgMzIuNTE3OCA2OS43MzYgMjQuNzc4OUM2Ni42MzY1IDI2LjU5NzQgNjMuNjU0MSAyOC41MTMxIDYwLjc5NzUgMzAuNTE5NUM3Ny42MjM0IDQwLjEwNzIgOTIuODg2OCA1Ny42NDkzIDEwMi4xMTcgODAuMzIwMUwxMTkuNDQxIDczLjI2NjdaIiBmaWxsPSIjRUE0MzM1Ii8+CjxwYXRoIGQ9Ik02Mi4yNTgzIDcxLjg3NTlDNjguMjA5NiA3MS44NzU5IDczLjAzNDEgNjcuMDUxNCA3My4wMzQxIDYxLjEwMDFDNzMuMDM0MSA1NS4xNDg3IDY4LjIwOTYgNTAuMzI0MiA2Mi4yNTgzIDUwLjMyNDJDNTYuMzA2OSA1MC4zMjQyIDUxLjQ4MjQgNTUuMTQ4NyA1MS40ODI0IDYxLjEwMDFDNTEuNDgyNCA2Ny4wNTE0IDU2LjMwNjkgNzEuODc1OSA2Mi4yNTgzIDcxLjg3NTlaIiBmaWxsPSIjMTk0QjY3Ii8+Cjwvc3ZnPgo="
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm">{address}</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(MessagesTable);
