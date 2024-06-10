import { Avatar } from "@fluentui/react-components";
import { FC, RefObject, memo, useEffect, useRef, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { IMenuItem } from "@/types";
import AddNewMenu from "./AddNewMenu";
import OptionalMenu from "./OptionalMenu";
import BuildingPeopleIcon from "@/assets/icons/BuildingPeopleIcon";
import ArrowTrendingLineIcon from "@/assets/icons/ArrowTrendingLineIcon";
import PeoplesIcon from "@/assets/icons/PeoplesIcon";
import PeopleCommunityIcon from "@/assets/icons/PeopleCommunityIcon";
import PeopleTeamIcon from "@/assets/icons/PeopleTeamIcon";
import MoneyHandIcon from "@/assets/icons/MoneyHandIcon";
import BookContactsIcon from "@/assets/icons/BookContactsIcon";
import BuildingBankIcon from "@/assets/icons/BuildingBankIcon";
import BuildingTownHouseIcon from "@/assets/icons/BuildingTownHouseIcon";
import PeopleTeamAddIcon from "@/assets/icons/PeopleTeamAddIcon";
import PeopleAddIcon from "@/assets/icons/PeopleAddIcon";
import HandshakeIcon from "@/assets/icons/HandshakeIcon";
import StethoscopeIcon from "@/assets/icons/ StethoscopeIcon";
import CommunicationIcon from "@/assets/icons/CommunicationIcon";

interface IMenuBarProps {
  className?: string;
  rest?: object;
}

const profileMenu: IMenuItem[] = [
  {
    title: "Profile",
    url: "/profile",
    icon: <BuildingPeopleIcon className="h-6 w-6" />,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: <ArrowTrendingLineIcon className="h-6 w-6" />,
  },
  {
    title: "Users",
    url: "/users",
    icon: <PeoplesIcon />,
  },
  {
    title: "Teams",
    url: "/teams",
    icon: <PeopleTeamIcon className="h-6 w-6" />,
  },
  {
    title: "Members",
    url: "/members",
    icon: <PeopleCommunityIcon className="h-6 w-6" />,
  },
  // Now `Team` is accessible through `Teams` directory.
  // {
  //   title: "Team",
  //   url: "/team",
  //   icon: <PeopleTeam24Regular />,
  // },
  {
    title: "Funds",
    url: "/funds",
    icon: <MoneyHandIcon className="h-6 w-6" />,
  },
  {
    title: "Phonebook",
    url: "/contacts",
    icon: <BookContactsIcon className="h-6 w-6" />,
  },
  {
    title: "Clubs",
    url: "/clubs",
    icon: <BuildingBankIcon className="h-6 w-6" />,
  },
  {
    title: "Collection Centers",
    url: "/collection-centers",
    icon: <BuildingTownHouseIcon className="h-6 w-6" />,
  },
];

const profileActionMenu: IMenuItem[] = [
  {
    title: "New member",
    url: "/members/new",
    icon: <PeopleAddIcon className="h-6 w-6" />,
  },
  {
    title: "New club",
    url: "/clubs/new",
    icon: <BuildingBankIcon className="h-6 w-6" />,
  },
  {
    title: "New team member",
    url: "/teams/new",
    icon: <PeopleTeamAddIcon className="h-6 w-6" />,
  },
  {
    title: "New fund",
    url: "funds/new ",
    icon: <MoneyHandIcon />,
  },
  {
    title: "New contact",
    url: "/contacts/new",
    icon: <BookContactsIcon />,
  },
  {
    title: "New collection center",
    url: "/collection-centers/new",
    icon: <BuildingTownHouseIcon />,
  },
  {
    title: "New donation",
    url: "/donations/new",
    icon: <HandshakeIcon />,
  },
  {
    title: "New Event",
    url: "/events/new",
    icon: <StethoscopeIcon />,
  },
  {
    title: "New blood request",
    url: "/blood-requests/new",
    icon: <CommunicationIcon />,
  },
];

const DashboardMenuBar: FC<IMenuBarProps> = ({
  className,
  ...rest
}: IMenuBarProps) => {
  const [showAvatar, setShowAvatar] = useState(false);
  const menuBarRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const mainElement = document.querySelector("main");

    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);

      return () => {
        mainElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleScroll = () => {
    if (menuBarRef.current) {
      let top: any = menuBarRef.current.getBoundingClientRect().y;

      if (top <= 48) {
        setShowAvatar(true);
      } else {
        setShowAvatar(false);
      }
    }
  };

  return (
    <header
      className="sticky top-0 z-1 w-full border-b border-b-[#e0e0e0] bg-[#f5f5f5] max-md:w-screen"
      ref={menuBarRef}
      {...rest}
    >
      <div className="flex h-full w-full flex-row flex-nowrap items-start justify-between px-4 py-2">
        <div className="flex w-full flex-row flex-nowrap items-center justify-start gap-3">
          {/* This is member profile avatar. This will be visible when
                    user page get scrolled and profile header is not in the viewport. */}
          {showAvatar && (
            <Avatar
              aria-label="Avatar"
              image={{ src: "/image/logo/bss.jpg" }}
            />
          )}

          {/* Dropdown Menu */}
          <OptionalMenu menu={profileActionMenu} />

          <ProfileMenu menu={profileMenu} />
        </div>

        <div>
          {/* Right side */}
          <AddNewMenu menu={profileActionMenu} />
        </div>
      </div>
    </header>
  );
};

export default memo(DashboardMenuBar);
