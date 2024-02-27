"use client";
import Image from "next/image";
import BG from "@/assets/images/bg.svg";
import { FC } from "react";
import LOGO from "@/assets/images/simbio-color.svg";
import { Button } from "@/components/ui/button";

const PageAuthRegistered: FC = () => {
  return (
    <section className="relative block h-screen w-full">
      {/* Background image */}
      <div
        className="absolute left-0 top-0 -z-1 h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG.src})`,
        }}
      />
      {/* Main content */}
      <div className="relative mx-auto block h-screen w-full min-w-[440px] max-w-[440px] overflow-y-auto">
        {/* Login Card Start */}
        <div className="absolute top-1/2 mb-5 flex w-full max-w-[440px] -translate-y-1/2 flex-col gap-8 rounded-md bg-white px-11 pb-8 pt-11 shadow">
          <div>
            {/* Logo */}
            <Image
              className="brandLogo"
              src={LOGO}
              alt="Simbio logo"
              priority
            />
          </div>

          <div className="">
            <div>
              {/* Title */}
              <h1 className="mb-4 text-xl font-semibold leading-7">
                Register with
              </h1>
            </div>

            <div className="flex flex-col gap-7 ">
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-red-600  text-white">
                  Register with Google
                </Button>
                <Button className="w-full bg-black text-white">
                  Register with Apple
                </Button>
                <Button className="w-full bg-blue-700 text-white">
                  Register with Microsoft
                </Button>
                <Button className="w-full bg-gray-900 text-white">
                  Login with GitHub
                </Button>
              </div>

              <div className="">
                {/* Error message */}
                <p className="caption1 mb-2 font-medium">
                  We do not support email and password based registration.
                  Please go with one of the above options.
                </p>
                {/* <p className="caption1 font-medium text-[#1b1b1b]">
                  ADSTS900561: The endpoint only accepts POST requests. Received
                  a GET request.
                </p> */}
              </div>

              <div className="flex items-start justify-between">
                <p className="caption1 font-medium">All right reserved.</p>
                <p className="caption1 font-medium">&copy; SIMBIO</p>
              </div>
            </div>
          </div>
        </div>
        {/* Login Card End */}
      </div>
    </section>
  );
};

export default PageAuthRegistered;
