import "server-only";
import Image from "next/image";
import BG from "@/assets/images/bg.svg";
import { FC } from "react";
import LOGO from "@/assets/images/simbio-color.svg";
import Link from "next/link";

const PageAuthError: FC = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <section className="relative block min-h-screen w-full">
      {/* Background image */}
      <div
        className="absolute left-0 top-0 -z-1 min-h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG.src})`,
        }}
      />
      {/* Main content */}
      <div className="relative mx-auto block h-full min-h-screen w-full max-w-[640px] overflow-y-auto max-md:px-5 max-md:py-10 md:px-8 md:py-14 lg:py-20">
        {/* Login Card Start */}
        <div className="flex w-full max-w-[640px] flex-col gap-8 rounded-md bg-white px-11 pb-8 pt-11 shadow">
          <div>
            <Link href="/">
              {/* Logo */}
              <Image
                className="brandLogo"
                src={LOGO}
                alt="Simbio logo"
                priority
              />
            </Link>
          </div>

          <div className="flex flex-col gap-7">
            <div>
              {/* Title */}
              <h1 className="mb-3 text-xl font-semibold leading-7">
                {searchParams?.error || "Server error"}
              </h1>
              {/* Error message */}
              <p className="caption1 mb-2 font-medium">
                {searchParams?.error_description ||
                  "Something went wrong on the server. Please try again later."}
              </p>
              <p className="caption1 font-medium text-[#1b1b1b]">
                {searchParams?.error_uri}
              </p>
            </div>

            <div className="flex items-start justify-between">
              <p className="caption1 font-medium">All right reserved.</p>
              <p className="caption1 font-medium">&copy; SIMBIO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageAuthError;
