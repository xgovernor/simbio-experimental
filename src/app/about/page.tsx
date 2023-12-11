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
