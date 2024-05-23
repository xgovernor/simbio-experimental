import Image from "next/image";
import Link from "next/link";
import LOGO from "@/assets/images/simbio-full-white.svg";
import { memo } from "react";
import RouteNav from "./RouteNav";
import UserMenu from "./UserMenu";
import SearchForm from "./SearchForm";
import AppUpdates from "./AppUpdates";
import Toolbar from "../components/Toolbar";

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
      <nav className="flex h-12 w-full items-center justify-center bg-primary text-white">
        <div className="mx-auto my-0 flex w-full items-center justify-between px-5 py-2">
          <NavbarBrand />

          <div className="flex w-1/2 items-center justify-center gap-4">
            {/* Routing Actions */}
            <RouteNav />
            <SearchForm />
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

export default memo(Navbar);
