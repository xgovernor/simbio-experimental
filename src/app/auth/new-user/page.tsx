"use client";
import Image from "next/image";
import { FC } from "react";
import LOGO from "@/assets/images/simbio-color.svg";
import MembershipForm from "./MembershipForm";

const PageAuthVerification: FC = () => {
  return (
      <div className="flex w-full max-w-[850px] flex-col gap-8 rounded-md bg-white px-11 pt-11 pb-8 shadow">
        <div>
          {/* Logo */}
          <Image className="brandLogo" src={LOGO} alt="Simbio logo" priority />
        </div>

        <div className="">
          <div className="">
            <div>
              {/* Title */}
              <h1 className="mb-3 text-lg leading-7 font-semibold">
                New membership form
              </h1>
            </div>

            <div className="flex flex-col gap-7">
              <MembershipForm />

              <div className="">
                {/* Error message */}

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
      </div>
  );
};

export default PageAuthVerification;
