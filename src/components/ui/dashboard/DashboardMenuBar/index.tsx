import { Avatar } from "@fluentui/react-components";
import {
  HomeMore24Regular,
  DocumentBulletList24Regular,
  CalendarError24Regular,
  PeopleTeam24Regular,
  People24Regular,
  HomeMore24Filled,
  BookContacts24Regular,
  MoneyHand24Regular,
} from "@fluentui/react-icons";
import { FC, RefObject, memo, useEffect, useRef, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { MenuItemType } from "@/types";
import AddNewMenu from "./AddNewMenu";
import OptionalMenu from "./OptionalMenu";

interface MenuBarPropsType {
  className?: string;
  rest?: object;
}

const profileMenu: MenuItemType[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <People24Regular />,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: <People24Regular />,
  },
  {
    title: "Members",
    url: "/members",
    icon: <People24Regular />,
  },
  {
    title: "Users",
    url: "/users",
    icon: <People24Regular />,
  },
  {
    title: "Clubs",
    url: "/clubs",
    icon: <HomeMore24Filled />,
  },
  {
    title: "Team",
    url: "/team",
    icon: <PeopleTeam24Regular />,
  },
  {
    title: "Teams",
    url: "/teams",
    icon: <PeopleTeam24Regular />,
  },
  {
    title: "Donations",
    url: "/donations",
    icon: <MoneyHand24Regular />,
  },
  {
    title: "Contacts",
    url: "/contacts",
    icon: <BookContacts24Regular />,
  },
  {
    title: "Centers",
    url: "/collection-centers",
    icon: <HomeMore24Regular />,
  },
];

const optionalProfileMenu: MenuItemType[] = [
  {
    title: "Report error",
    url: "/report/error",
    icon: <CalendarError24Regular />,
  },
  {
    title: "Help",
    url: "/doc/help",
    icon: <DocumentBulletList24Regular />,
  },
];

const profileActionMenu: MenuItemType[] = [
  {
    title: "Add member",
    url: "/members/new",
    icon: <People24Regular />,
  },
  {
    title: "Add club",
    url: "/clubs/new",
    icon: <HomeMore24Filled />,
  },
  {
    title: "Add team member",
    url: "/team/new",
    icon: <PeopleTeam24Regular />,
  },
  {
    title: "Add Donation",
    url: "/donation/new ",
    icon: <MoneyHand24Regular />,
  },
  {
    title: "Add contact",
    url: "/contacts/new",
    icon: <BookContacts24Regular />,
  },
  {
    title: "Add collection center",
    url: "/collection-center/new",
    icon: <HomeMore24Regular />,
  },
  {
    title: "New blood request",
    url: "/blood-requests/new",
    icon: <HomeMore24Regular />,
  },
];

const DashboardMenuBar: FC<MenuBarPropsType> = ({
  className,
  ...rest
}: MenuBarPropsType) => {
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
      className="sticky top-0 z-1 w-full border-b border-b-[#e0e0e0] bg-[#f5f5f5]"
      ref={menuBarRef}
      {...rest}
    >
      <div className="flex h-full w-full flex-row flex-nowrap items-start justify-between px-4 py-2">
        <div className="flex w-full flex-row flex-nowrap items-center justify-start gap-3">
          {/* This is member profile avater. This will be visible when
                    user page get scrolled and profile header is not in the viewport. */}
          {showAvatar && (
            <Avatar
              aria-label="Avatar"
              image={{ src: "/image/logo/bss.jpg" }}
            />
          )}

          {/* Dropdown Menu */}
          <OptionalMenu menu={optionalProfileMenu} />

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
