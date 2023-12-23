"use client";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar, { ISidebarMenuItem } from "../Sidebar";
import {
  Home24Regular,
  People24Regular,
  Settings24Regular,
  SignOut24Regular,
} from "@fluentui/react-icons";
import { memo } from "react";
import Canvas from "../Canvas";
import { BreadcrumbLinkType } from "../Canvas/CanvasBreadcrumb";

interface ILayoutProps {
  className?: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
  layout?: boolean;
  title?: string;
  icon?: React.ReactNode;
  breadcrumb?: BreadcrumbLinkType[];
  rest?: object;
}

const SIDEBAR_MENU_ITEMS: ISidebarMenuItem[] = [
  {
    name: "Home",
    description: "Home page",
    icon: <Home24Regular />,
    url: "/dashboard",
  },
  {
    name: "Requests",
    description: "Special blood requests",
    icon: <People24Regular />,
    url: "/blood-requests",
  },
  {
    name: "Events",
    description: "Blood donation events",
    icon: <People24Regular />,
    url: "/events",
  },
  {
    name: "Support",
    description: "Official support",
    icon: <People24Regular />,
    url: "/supports",
  },
  {
    name: "Settings",
    description: "Profile settings",
    icon: <Settings24Regular />,
    url: "/settings",
  },
  {
    name: "About",
    description: "About project Simbio",
    icon: <People24Regular />,
    url: "/about",
  },
  {
    name: "Logout",
    description: "Logout from account",
    icon: <SignOut24Regular />,
    url: "/auth/logout",
  },
];

const Layout: React.FC<ILayoutProps> = ({
  className,
  children,
  aside,
  layout = true,
  title,
  icon,
  breadcrumb,
  ...rest
}: ILayoutProps) => {
  return (
    <>
      {layout && (
        <div
          className="grid h-screen w-screen gap-0 overflow-hidden"
          style={{
            gridTemplateColumns: "68px 1fr",
            gridTemplateRows: "48px 1fr 44px",
          }}
          {...rest}
        >
          <Navbar className="sticky left-0 right-0 top-0 z-50 col-span-2 col-start-1 col-end-3 row-span-1 row-start-1 row-end-2 w-full" />

          <Sidebar
            className="col-span-1 col-start-1 col-end-2 row-span-2 row-start-2 row-end-4 flex w-17 flex-col flex-nowrap items-center justify-start overflow-y-auto overflow-x-hidden pt-3"
            menu={SIDEBAR_MENU_ITEMS}
          />

          <Canvas
            className="relative col-span-1 col-start-2 col-end-3 row-span-1 row-start-2 row-end-3 block h-full w-full overflow-y-auto"
            title={title}
            icon={icon}
            breadcrumb={breadcrumb}
            style={{
              height: "calc(100vh - 92px)",
            }}
          >
            {/* <Transition> */}
            {children}
            {/* </Transition> */}
          </Canvas>

          <Footer className="z-10 col-span-1 col-start-2 col-end-3 row-span-1 row-start-3 row-end-4 bg-white" />
        </div>
      )}

      {!layout && (
        <main className={className} {...rest}>
          {/* <Transition> */}
          {children}
          {/* </Transition> */}
        </main>
      )}
    </>
  );
};

export default memo(Layout);
