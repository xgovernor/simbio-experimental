"use client";
import Image from "next/image";
import LOGO from "@/assets/images/simbio-color.svg";
import Link from "next/link";
import { memo } from "react";
import Layout from "@/components/ui/Layout";

const MENU: { id: string; title: string; url: string }[] = [
  {
    id: "1",
    title: "About",
    url: "/about",
  },
  {
    id: "2",
    title: "Privacy",
    url: "/privacy-policy",
  },
  {
    id: "3",
    title: "Terms",
    url: "/terms",
  },
  {
    id: "4",
    title: "Donation",
    url: "/donation",
  },
];

const PageAbout: React.FC = () => {
  return (
    <Layout>
      <div
        className="mx-auto flex h-full w-1/3 flex-col flex-nowrap items-center justify-center p-5"
        style={{
          minHeight: "calc(100vh - 92px)",
        }}
      >
        <Image
          className="mb-4"
          src={LOGO}
          alt="SIMBIO - World first & largest online blood network"
          loading="lazy"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjExOSIgdmlld0JveD0iMCAwIDEyMCAxMTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ny44NTA4IDc0LjIzNTFDOTYuMDE5NiA3MC42MjE2IDk0LjA1NyA2Ny4xNDMzIDkxLjk3MTcgNjMuODExQzgyLjAzMjQgNzkuMjM4IDY1LjM5MiA5My4wNDE0IDQ0LjMwODUgMTAxLjYyNUw1MS4zNjE4IDExOC45NUM3My4xNjgxIDExMC4wNzMgODkuMzgyOCA5My41NzE1IDk3Ljg1MDggNzQuMjM1MVoiIGZpbGw9IiNGQkJDMDUiLz4KPHBhdGggZD0iTTU0LjcwNzUgOTUuMzYwNEM1Ny41OTE5IDkzLjc1NzIgNjAuMzgxMiA5Mi4wNjc5IDYzLjA2OTIgOTAuMjk5NEM0NC41MjA1IDgxLjQwODggMjcuMzU0OCA2Mi44NDEgMTcuMzIzMyAzOC4yMDE1TDAgNDUuMjU0NEMxMC4zNjk3IDcwLjczMTYgMzEuMTQ5NCA4OC41OTY4IDU0LjcwNzUgOTUuMzYwNFoiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZD0iTTgyLjUwMzggMTcuMzI0NUw3NS40NTA0IDBDNTAuNjM2MiAxMC4xMDI3IDMzLjA1MzIgMzAuMDgxOCAyNS45MDU1IDUyLjg3OTdDMjcuNjM5NiA1NS43MzY3IDI5LjQ2OTcgNTguNDc3MiAzMS4zNzExIDYxLjExODNDNDAuNjAxNCA0My4zMTkyIDU4LjczMTggMjcuMDAyOSA4Mi41MDM4IDE3LjMyNDVaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMTkuNDQxIDczLjI2NjdDMTA5LjgwOSA0OS42MDc5IDkxLjIwNTMgMzIuNTE3OCA2OS43MzYgMjQuNzc4OUM2Ni42MzY1IDI2LjU5NzQgNjMuNjU0MSAyOC41MTMxIDYwLjc5NzUgMzAuNTE5NUM3Ny42MjM0IDQwLjEwNzIgOTIuODg2OCA1Ny42NDkzIDEwMi4xMTcgODAuMzIwMUwxMTkuNDQxIDczLjI2NjdaIiBmaWxsPSIjRUE0MzM1Ii8+CjxwYXRoIGQ9Ik02Mi4yNTgzIDcxLjg3NTlDNjguMjA5NiA3MS44NzU5IDczLjAzNDEgNjcuMDUxNCA3My4wMzQxIDYxLjEwMDFDNzMuMDM0MSA1NS4xNDg3IDY4LjIwOTYgNTAuMzI0MiA2Mi4yNTgzIDUwLjMyNDJDNTYuMzA2OSA1MC4zMjQyIDUxLjQ4MjQgNTUuMTQ4NyA1MS40ODI0IDYxLjEwMDFDNTEuNDgyNCA2Ny4wNTE0IDU2LjMwNjkgNzEuODc1OSA2Mi4yNTgzIDcxLjg3NTlaIiBmaWxsPSIjMTk0QjY3Ii8+Cjwvc3ZnPgo="
        />
        <p className=" text-xs">Version: v1.0.0-dev</p>

        <p className="mt-3 text-center text-xs">
          SIMBIO serves as a centralized system designed for the comprehensive
          management of blood donation organizations and their entire process,
          spanning from member registration to the blood donation process and
          beyond. Our overarching objective is to deliver a versatile system
          that caters to the needs of any blood donation organization. What sets
          this system apart is its ability to seamlessly oversee the journey of
          a donor from one corner of the nation to a patient residing in
          another, particularly in special cases, all while enhancing the
          efficiency of the donation process and elevating the donor experience.
          Our approach to security exceeds the standard norms prevalent within
          the same domain, ensuring a robust safeguarding of information.
          Furthermore, our strategic vision encompasses integration with
          prevalent ERP systems in the health sector, elevating its utility and
          value.
        </p>

        <ul className="mt-5 inline-flex flex-nowrap gap-4 ">
          {MENU?.map(({ id, title, url }) => (
            <li key={id}>
              <Link className="text-xs font-medium hover:underline" href={url}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs">
          Developed by{" "}
          <Link
            className="font-medium hover:underline"
            href="https://at-mah.vercel.app"
          >
            Abu Taher Muhammad
          </Link>{" "}
        </p>
        <p className="mt-1 text-xs">
          Maintained by{" "}
          <Link className="font-medium hover:underline" href="https://dot9.dev">
            Dot9
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default memo(PageAbout);
