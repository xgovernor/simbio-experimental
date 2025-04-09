import Image from "next/image";
import Link from "next/link";
import LOGO from "@/assets/images/simbio-full-white.svg";
import RouteNav from "./RouteNav";
import UserMenu from "./UserMenu";
import SearchForm from "./SearchForm";
import AppUpdates from "./AppUpdates";
import Toolbar from "../components/Toolbar";
import MoneyHandIcon from "@/assets/icons/MoneyHandIcon";
import BookContactsIcon from "@/assets/icons/BookContactsIcon";
import BuildingBankIcon from "@/assets/icons/BuildingBankIcon";
import BuildingTownHouseIcon from "@/assets/icons/BuildingTownHouseIcon";
import PeopleTeamAddIcon from "@/assets/icons/PeopleTeamAddIcon";
import PeopleAddIcon from "@/assets/icons/PeopleAddIcon";
import HandshakeIcon from "@/assets/icons/HandshakeIcon";
import StethoscopeIcon from "@/assets/icons/ StethoscopeIcon";
import CommunicationIcon from "@/assets/icons/CommunicationIcon";
import { IMenuItem } from "@/types";
import AddNewMenu from "../dashboard/DashboardMenuBar/AddNewMenu";

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

const NavbarBrand = () => {
  return (
    <div className="flex w-1/4 items-center justify-start">
      <div className="flex items-center justify-center text-base font-medium">
        <Link href="/">
          <Image src={LOGO} priority height={24} width={101} alt="Simbio" />
        </Link>
      </div>
    </div>
  );
};

const Navbar = ({ className }: { className?: string }) => {
  return (
    <header className={className}>
      <nav className="bg-primary flex h-12 w-full items-center justify-center text-white">
        <div className="mx-auto my-0 flex w-full items-center justify-between px-5 py-2">
          <NavbarBrand />

          <div className="flex w-1/2 items-center justify-center gap-4">
            {/* Routing Actions */}
            <RouteNav />
            <SearchForm />
            <AddNewMenu menu={profileActionMenu} />
          </div>

          <div className="flex w-1/4 items-center justify-end gap-4">
            <Toolbar>
              {/* Theme */}
              <AppUpdates />
            </Toolbar>

            {/* Action */}
            <UserMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
