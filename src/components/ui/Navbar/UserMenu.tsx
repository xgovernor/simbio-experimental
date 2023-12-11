"use client";
import {
  Avatar,
  Menu,
  MenuPopover,
  MenuTrigger,
  Text,
  Toolbar,
  ToolbarButton,
} from "@fluentui/react-components";
import {
  WeatherSunny24Regular,
  Person24Regular,
  Settings24Regular,
  SignOut24Regular,
} from "@fluentui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";

interface UserMenuPropsType {
  className?: string;
}

const UserMenu: FC<UserMenuPropsType> = ({ className }: UserMenuPropsType) => {
  const router = useRouter();

  const changeTheme = (theme: string): void => {
    console.log("Theme Changed");
  };

  const logoutHandler = () => {
    console.log("CLICKED: Sign Out");
    router.replace("/auth/login");
  };

  return (
    <div>
      <Menu>
        <MenuTrigger>
          <Avatar aria-label="Avatar" icon={<Person24Regular />} />
        </MenuTrigger>

        <MenuPopover className="h-[280px] min-h-[270px] w-full min-w-[320px] max-w-[320px] rounded border-0 bg-white p-0 shadow-lg">
          <div className="inherit flex h-[268px] min-h-[220px] flex-col items-center justify-center p-[14px]">
            {/* <Link href={"/user/profile"}> */}
            <Link href={"/user"} title="Abu Taher Muhammad" className="mb-3">
              <Avatar
                className="mx-[10] my-[15]"
                name="Abu Taher Muhammad"
                image={{ src: "/image/logo/bss.jpg" }}
                size={72}
              />
            </Link>

            <div className="mb-[15px]">
              <Link href={"/user"} title="Abu Taher Muhammad">
                <p className="subtitle1 mb-0.5 text-center hover:text-primary hover:underline">
                  Abu Taher Muhammad
                </p>
              </Link>

              <p className="body1 text-center">Software Engineer</p>

              <Link href={"/profile"}>
                <p className="body1Strong text-center hover:text-primary hover:underline">
                  Blood Solider Society
                </p>
              </Link>
            </div>

            <Toolbar>
              <ToolbarButton
                title="Profile"
                icon={<Person24Regular />}
                onClick={() => router.push("/user")}
              />
              <ToolbarButton
                title="Profile"
                icon={<WeatherSunny24Regular />}
                onClick={() => changeTheme}
              />
              <ToolbarButton
                title="Settings"
                icon={<Settings24Regular />}
                onClick={() => router.push("/settings")}
              />
              <ToolbarButton
                title="Logout"
                icon={<SignOut24Regular />}
                onClick={logoutHandler}
              />
            </Toolbar>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex h-10 items-center justify-center bg-[#f5f5f5]">
            <Text className="caption1 text-[13px] leading-7 text-[#1b1b1b]">
              All rights reserved by <Link href="https://dot9.dev">Dot9</Link>
            </Text>
          </div>
        </MenuPopover>
      </Menu>
    </div>
  );
};

export default memo(UserMenu);
