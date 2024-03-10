"use client";
import { updateTheme } from "@/store/actions/settings.action";
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
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IUserMenuProps {
  className?: string;
}

const UserMenu: FC<IUserMenuProps> = ({ className }: IUserMenuProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const settings = useSelector((state: any) => state.settings);

  const changeTheme = (): void => {
    dispatch(updateTheme());
    console.log("Theme Changed");
  };

  const logoutHandler = () => {
    // console.log("CLICKED: Sign Out");
    signOut({ callbackUrl: "/auth/login" });
    // router.replace("/auth/login");
  };

  return (
    <div>
      <Menu>
        <MenuTrigger>
          <Avatar
            aria-label="Avatar"
            icon={
              <Image
                className="h-[32px] w-[32px] rounded-full"
                src={settings.data.user?.avatar}
                width={32}
                height={32}
                alt={settings.data.user?.name}
                loading="lazy"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjExOSIgdmlld0JveD0iMCAwIDEyMCAxMTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ny44NTA4IDc0LjIzNTFDOTYuMDE5NiA3MC42MjE2IDk0LjA1NyA2Ny4xNDMzIDkxLjk3MTcgNjMuODExQzgyLjAzMjQgNzkuMjM4IDY1LjM5MiA5My4wNDE0IDQ0LjMwODUgMTAxLjYyNUw1MS4zNjE4IDExOC45NUM3My4xNjgxIDExMC4wNzMgODkuMzgyOCA5My41NzE1IDk3Ljg1MDggNzQuMjM1MVoiIGZpbGw9IiNGQkJDMDUiLz4KPHBhdGggZD0iTTU0LjcwNzUgOTUuMzYwNEM1Ny41OTE5IDkzLjc1NzIgNjAuMzgxMiA5Mi4wNjc5IDYzLjA2OTIgOTAuMjk5NEM0NC41MjA1IDgxLjQwODggMjcuMzU0OCA2Mi44NDEgMTcuMzIzMyAzOC4yMDE1TDAgNDUuMjU0NEMxMC4zNjk3IDcwLjczMTYgMzEuMTQ5NCA4OC41OTY4IDU0LjcwNzUgOTUuMzYwNFoiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZD0iTTgyLjUwMzggMTcuMzI0NUw3NS40NTA0IDBDNTAuNjM2MiAxMC4xMDI3IDMzLjA1MzIgMzAuMDgxOCAyNS45MDU1IDUyLjg3OTdDMjcuNjM5NiA1NS43MzY3IDI5LjQ2OTcgNTguNDc3MiAzMS4zNzExIDYxLjExODNDNDAuNjAxNCA0My4zMTkyIDU4LjczMTggMjcuMDAyOSA4Mi41MDM4IDE3LjMyNDVaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMTkuNDQxIDczLjI2NjdDMTA5LjgwOSA0OS42MDc5IDkxLjIwNTMgMzIuNTE3OCA2OS43MzYgMjQuNzc4OUM2Ni42MzY1IDI2LjU5NzQgNjMuNjU0MSAyOC41MTMxIDYwLjc5NzUgMzAuNTE5NUM3Ny42MjM0IDQwLjEwNzIgOTIuODg2OCA1Ny42NDkzIDEwMi4xMTcgODAuMzIwMUwxMTkuNDQxIDczLjI2NjdaIiBmaWxsPSIjRUE0MzM1Ii8+CjxwYXRoIGQ9Ik02Mi4yNTgzIDcxLjg3NTlDNjguMjA5NiA3MS44NzU5IDczLjAzNDEgNjcuMDUxNCA3My4wMzQxIDYxLjEwMDFDNzMuMDM0MSA1NS4xNDg3IDY4LjIwOTYgNTAuMzI0MiA2Mi4yNTgzIDUwLjMyNDJDNTYuMzA2OSA1MC4zMjQyIDUxLjQ4MjQgNTUuMTQ4NyA1MS40ODI0IDYxLjEwMDFDNTEuNDgyNCA2Ny4wNTE0IDU2LjMwNjkgNzEuODc1OSA2Mi4yNTgzIDcxLjg3NTlaIiBmaWxsPSIjMTk0QjY3Ii8+Cjwvc3ZnPgo="
              />
            }
          />
        </MenuTrigger>

        <MenuPopover className="h-[280px] min-h-[270px] w-full min-w-[320px] max-w-[320px] rounded border-0 bg-white p-0 shadow-lg">
          <div className="inherit flex h-[268px] min-h-[220px] flex-col items-center justify-center p-[14px]">
            {/* <Link href={"/user/profile"}> */}
            <Link
              href={"/user"}
              title={settings.data.user?.name}
              className="mb-3"
            >
              <Avatar
                className="mx-[10] my-[15]"
                name={settings.data.user?.name}
                image={{ src: settings.data.user?.avatar }}
                size={72}
              />
            </Link>

            <div className="mb-[15px]">
              <Link href={"/user"} title={settings.data.user?.name}>
                <p className="subtitle1 mb-0.5 text-center hover:text-primary hover:underline">
                  {settings.data.user?.name}
                </p>
              </Link>

              <p className="body1 text-center">
                {settings.data.user?.designation}
              </p>

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
                onClick={changeTheme}
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
