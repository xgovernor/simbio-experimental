import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar, { ISidebarMenuItem } from "../Sidebar";
import { memo } from "react";
import Canvas from "../Canvas";
import CanvasBreadcrumb, {
  BreadcrumbLinkType,
} from "../Canvas/CanvasBreadcrumb";

import CanvasHeader from "../Canvas/CanvasHeader";
import PeoplesIcon from "@/assets/icons/PeoplesIcon";
import HomeIcon from "@/assets/icons/HomeIcon";
import HandshakeIcon from "@/assets/icons/HandshakeIcon";
import StethoscopeIcon from "@/assets/icons/ StethoscopeIcon";
import PersonSupportIcon from "@/assets/icons/PersonSupportIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import ErrorCircleIcon from "@/assets/icons/ErrorCircleIcon";

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
    icon: <HomeIcon className="h-6 w-6" />,
    url: "/profile",
  },
  {
    name: "Requests",
    description: "Special blood requests",
    icon: <PeoplesIcon className="h-6 w-6" />,
    url: "/blood-requests",
  },
  {
    name: "Donations",
    description: "List of donations",
    icon: <HandshakeIcon className="h-6 w-6" />,
    url: "/donations",
  },
  {
    name: "Events",
    description: "Blood donation events",
    icon: <StethoscopeIcon className="h-6 w-6" />,
    url: "/events",
  },
  {
    name: "Support",
    description: "Official support",
    icon: <PersonSupportIcon className="h-6 w-6" />,
    url: "/supports",
  },
  {
    name: "Settings",
    description: "Profile settings",
    icon: <SettingsIcon className="h-6 w-6" />,
    url: "/settings",
  },
  {
    name: "About",
    description: "About project Simbio",
    icon: <ErrorCircleIcon className="h-6 w-6" />,
    url: "/about",
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
  return layout ? (
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
        className="col-span-1 col-start-1 col-end-2 row-span-2 row-start-2 row-end-4 w-17 flex-col flex-nowrap items-center justify-start overflow-y-auto overflow-x-hidden pt-3 max-md:hidden md:flex"
        menu={SIDEBAR_MENU_ITEMS}
      />

      <Canvas className="col-span-1 col-start-2 col-end-3 row-span-1 row-start-2 row-end-3 block h-[calc(100vh-92px)] w-full overflow-y-auto md:relative">
        {title && <CanvasHeader title={title} icon={icon} />}
        {breadcrumb && <CanvasBreadcrumb links={breadcrumb} />}
        {/* <Transition> */}
        {children}
        {/* </Transition> */}
      </Canvas>

      <Footer className="z-10 col-span-1 col-start-2 col-end-3 row-span-1 row-start-3 row-end-4 bg-white max-md:col-span-2 max-md:col-start-1 max-md:col-end-3" />
    </div>
  ) : (
    <main className={className} {...rest}>
      {/* <Transition> */}
      {children}
      {/* </Transition> */}
    </main>
  );
};

export default memo(Layout);
