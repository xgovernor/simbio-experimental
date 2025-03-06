"use client";
import Image from "next/image";
import BG from "@/assets/images/bg.svg";
import { FC, memo } from "react";
import LOGO from "@/assets/images/simbio-color.svg";

const Error404Page: FC = () => {
  return (
    <section className="h-screen w-full">
      {/* Backgorund */}
      <div
        className="absolute top-0 left-0 z-0 h-screen w-full overflow-y-auto bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG.src})`,
        }}
      />

      <div className="flex-center relative flex h-screen min-h-[252px] w-screen items-center p-5">
        {/* Error Card */}
        {/* <div className="fixed top-[45%] mb-5 w-full min-w-[440px] max-w-[640px] -translate-y-1/2 rounded-md bg-white p-11 shadow-sm shadow-[rgba(0,0,0,0.2)]"> */}
        <div className="mx-auto w-full max-w-[640px] rounded-md bg-white p-8 shadow-sm md:p-10 lg:p-11">
          <div>
            <Image
              className="brandLogo"
              src={LOGO}
              alt="Simbio logo"
              priority
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjExOSIgdmlld0JveD0iMCAwIDEyMCAxMTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ny44NTA4IDc0LjIzNTFDOTYuMDE5NiA3MC42MjE2IDk0LjA1NyA2Ny4xNDMzIDkxLjk3MTcgNjMuODExQzgyLjAzMjQgNzkuMjM4IDY1LjM5MiA5My4wNDE0IDQ0LjMwODUgMTAxLjYyNUw1MS4zNjE4IDExOC45NUM3My4xNjgxIDExMC4wNzMgODkuMzgyOCA5My41NzE1IDk3Ljg1MDggNzQuMjM1MVoiIGZpbGw9IiNGQkJDMDUiLz4KPHBhdGggZD0iTTU0LjcwNzUgOTUuMzYwNEM1Ny41OTE5IDkzLjc1NzIgNjAuMzgxMiA5Mi4wNjc5IDYzLjA2OTIgOTAuMjk5NEM0NC41MjA1IDgxLjQwODggMjcuMzU0OCA2Mi44NDEgMTcuMzIzMyAzOC4yMDE1TDAgNDUuMjU0NEMxMC4zNjk3IDcwLjczMTYgMzEuMTQ5NCA4OC41OTY4IDU0LjcwNzUgOTUuMzYwNFoiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZD0iTTgyLjUwMzggMTcuMzI0NUw3NS40NTA0IDBDNTAuNjM2MiAxMC4xMDI3IDMzLjA1MzIgMzAuMDgxOCAyNS45MDU1IDUyLjg3OTdDMjcuNjM5NiA1NS43MzY3IDI5LjQ2OTcgNTguNDc3MiAzMS4zNzExIDYxLjExODNDNDAuNjAxNCA0My4zMTkyIDU4LjczMTggMjcuMDAyOSA4Mi41MDM4IDE3LjMyNDVaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMTkuNDQxIDczLjI2NjdDMTA5LjgwOSA0OS42MDc5IDkxLjIwNTMgMzIuNTE3OCA2OS43MzYgMjQuNzc4OUM2Ni42MzY1IDI2LjU5NzQgNjMuNjU0MSAyOC41MTMxIDYwLjc5NzUgMzAuNTE5NUM3Ny42MjM0IDQwLjEwNzIgOTIuODg2OCA1Ny42NDkzIDEwMi4xMTcgODAuMzIwMUwxMTkuNDQxIDczLjI2NjdaIiBmaWxsPSIjRUE0MzM1Ii8+CjxwYXRoIGQ9Ik02Mi4yNTgzIDcxLjg3NTlDNjguMjA5NiA3MS44NzU5IDczLjAzNDEgNjcuMDUxNCA3My4wMzQxIDYxLjEwMDFDNzMuMDM0MSA1NS4xNDg3IDY4LjIwOTYgNTAuMzI0MiA2Mi4yNTgzIDUwLjMyNDJDNTYuMzA2OSA1MC4zMjQyIDUxLjQ4MjQgNTUuMTQ4NyA1MS40ODI0IDYxLjEwMDFDNTEuNDgyNCA2Ny4wNTE0IDU2LjMwNjkgNzEuODc1OSA2Mi4yNTgzIDcxLjg3NTlaIiBmaWxsPSIjMTk0QjY3Ii8+Cjwvc3ZnPgo="
            />
          </div>

          <div className="">
            <div>
              <h1 className="mt-4 mb-4 text-2xl leading-7 font-semibold">
                Opps!
              </h1>
            </div>

            <div>
              <p className="caption1 mb-2 font-semibold">
                Sorry, but we are having trouble finding the page.
              </p>
              <p className="caption1 font-medium text-[#1b1b1b]">
                The page your are looking is not available or it might be busy.
                Please try again after sometime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Error404Page);
