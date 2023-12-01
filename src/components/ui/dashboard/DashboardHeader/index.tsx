import Image from "next/image";
import { FC, memo } from "react";
import DashboardHeaderStats from "../DashboardHeaderStats";

const DashboadHeader: FC = () => {
    return (
        <section className="flex w-full items-center justify-center bg-white">
            <div className="flex w-full flex-row flex-nowrap items-start justify-between p-22px">
                <div className="w-2/5">
                    <div className="flex w-full flex-row flex-nowrap items-center justify-start gap-6">
                        <div className="flex h-24 w-24 rounded-full">
                            <Image
                                className="border-rounded min-w-24 min-h-24"
                                src="/image/logo/bss.jpg"
                                alt="Blood Soldier Society (BSS)"
                                width={96}
                                height={96}
                                style={{
                                    minWidth: "96px",
                                }}
                            />
                        </div>

                        <div className="relative block">
                            <h1 className="title3 mb-2 mt-0">Blood Soldier Society (BSS)</h1>
                            <p className="body1 m-0 w-112">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <DashboardHeaderStats />
                </div>
            </div>
        </section>
    );
};

export default memo(DashboadHeader);