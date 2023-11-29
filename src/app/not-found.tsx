"use client";
import Image from "next/image";
import BG from "@/assets/images/bg.svg";
import { FC } from "react";
import LOGO from "@/assets/images/simbio-color.svg";

const Error404Page: FC = () => {
    return (
        <section>
            <div
                className="absolute left-0 top-0 -z-1 h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${BG.src})`,
                }}
            />
            <div className="relative mx-auto block w-full min-w-[440px] max-w-[640px]">
                <div className="fixed top-[45%] mb-5 w-full min-w-[440px] max-w-[640px] -translate-y-1/2 rounded-md bg-white p-11 shadow shadow-[rgba(0,0,0,0.2)]">
                    <div>
                        <Image className="brandLogo" src={LOGO} alt="Simbio logo" priority />
                    </div>

                    <div className="mb-4">
                        <div>
                            <h1 className="mb-4 mt-4 text-2xl font-semibold leading-7">Opps!</h1>
                        </div>

                        <div>
                            <p className="caption1 mb-2 font-semibold">
                                Sorry, but we are having trouble finding the page.
                            </p>
                            <p className="caption1 font-medium text-[#1b1b1b]">
                                The page your are looking is not available or it might be busy. Please try again after
                                sometime.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error404Page;
