"use client";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuPopover,
  MenuTrigger,
  Toolbar,
} from "@fluentui/react-components";
import { Alert24Regular, Alert20Regular } from "@fluentui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

export interface AppUpdatesListItemType {
  id: string;
  // template: string;
  type: string; // This will serve as update template. E.G. ``member-request`  for new membership request.
  src?: string;
  title: string;
  date: string;
  time: string;
  url: string;
}

const UPDATES: AppUpdatesListItemType[] = [
  {
    id: "SBU001",
    type: "member-request",
    // template: "member-request"
    title: "Ralph Edward applied for membership",
    date: "12/12/2023",
    time: "12:00 PM",
    url: "/members/requests",
  },
  {
    id: "SBU002",
    type: "blood-request",
    // template: "member-request"
    title: "Muhammad applied made an special request for `` A+`  blood.`",
    date: "12/12/2023",
    time: "12:00 PM",
    url: "/members/requests",
  },
  {
    id: "SBU003",
    type: "bug",
    // template: "member-request"
    title: "Abdullah experienced an bug in 'member' page!",
    date: "12/12/2023",
    time: "12:00 PM",
    url: "/reports/bugs?user=SBU001&type=requested",
  },
  {
    id: "SBU004",
    type: "new-team-member",
    // template: "member-request"
    title: "Adil added Ehsan as manager to Blood Solidier Society",
    date: "12/12/2023",
    time: "12:00 PM",
    url: "/members/requests",
  },
  {
    id: "SBU005",
    type: "new-message",
    // template: "member-request"
    title: "Adil added Ehsan as manager to Blood Solidier Society",
    date: "12/12/2023",
    time: "12:00 PM",
    url: "/members/requests",
  },
  {
    id: "SBU006",
    type: "new-event",
    // template: "member-request"
    title: "Adil added Ehsan as manager to Blood Solidier Society",
    date: "12/12/2023",
    time: "12:00 PM",
    url: "/members/requests",
  },
  {
    id: "SBU007",
    type: "support-messge",
    // template: "member-request"
    title: "Adil added Ehsan as manager to Blood Solidier Society",
    date: "12/12/2023",
    time: "12:00 PM",
    url: "/members/requests",
  },
];

const AppUpdates: FC = () => {
  const router = useRouter();

  const handleSettings = () => {
    router.push("/settings?tab=notification");
  };

  return (
    <Menu>
      <MenuTrigger>
        <MenuButton
          appearance="transparent"
          icon={<Alert24Regular color="#fff" />}
        />
      </MenuTrigger>

      <MenuPopover className="border-gray-[100px] max-h-[500px] max-w-[400px] rounded p-0 shadow-lg">
        <div className="sticky top-0 z-[2] flex items-center justify-between bg-[#f5f5f5] px-[14px] pb-1 pt-2">
          <p className="subtitle2">Updates</p>

          <Toolbar className="p-0">
            <Link className="font-sm font-medium" href="/updates">
              View all
            </Link>
          </Toolbar>
        </div>

        <div className="relative top-2 block h-full overflow-y-auto rounded bg-[#f5f5f5] px-3 pb-3 pt-1">
          {UPDATES?.map((item) => {
            if (item.type === "member-request") {
              return (
                <TemplateNewMember
                  key={item.id}
                  id={item.id}
                  type={item.type} // Add the 'type' property
                  title={item.title}
                  date={item.date}
                  time={item.time} // Add the 'time' property
                  url={item.url} // Add the 'url' property
                  onAccept={() => console.log("Accepted")}
                  onDeny={() => console.log("Denied")}
                />
              );
            }

            return (
              <div
                key={item.id}
                className="mb-1.5 flex cursor-pointer flex-row items-start gap-x-3 rounded-[6px] bg-white pb-[13px] pe-[14px] ps-[14px] pt-2.5 hover:bg-[#f5f5f5] hover:text-[#adadad]"
              >
                <div>
                  <Avatar icon={<Alert20Regular />} name={item.title} />
                </div>

                <div>
                  <p className="body1 mb-1.5">{item.title}</p>
                  <p className="caption1 text-[#adadad]">{item.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </MenuPopover>
    </Menu>
  );
};

// New Membership Template
type TemplateNewMemberPropsType = {
  onDeny: () => void;
  onAccept: () => void;
} & AppUpdatesListItemType;

const TemplateNewMember: FC<TemplateNewMemberPropsType> = ({
  id,
  title,
  date,
  onAccept,
  onDeny,
}: TemplateNewMemberPropsType) => {
  return (
    <div
      key={id}
      className="mb-1.5 flex cursor-pointer flex-row items-start gap-x-3 rounded-[6px] bg-white pb-[13px] pe-[14px] ps-[14px] pt-2.5 hover:bg-[#f5f5f5] hover:text-[#adadad]"
    >
      <div>
        <Avatar icon={<Alert20Regular />} name={title} />
      </div>

      <div>
        <p className="body1 mb-1.5">{title}</p>
        <p className="caption1 text-[#adadad]">{date}</p>

        <Toolbar className="mt-[10px] gap-x-2" size="small">
          <Button
            aria-label="Settings"
            className="bg-primary"
            appearance="primary"
            size="small"
            onClick={onAccept}
          >
            Accept
          </Button>

          <Button
            aria-label="Settings"
            appearance="outline"
            size="small"
            onClick={onDeny}
          >
            Deny
          </Button>
        </Toolbar>
      </div>
    </div>
  );
};

export default memo(AppUpdates);
