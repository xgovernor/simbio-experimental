"use client";

import DeviceList from "@/components/settings/DeviceList";
import Image from "next/image";
import AVATAR from "@/assets/images/avatar.jpg";
import Link from "next/link";

const PageRootComponent = () => {
  return (
    <div className="grid-rows-auto grid gap-5 p-5 max-md:grid-cols-1 max-md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {/* Profile Stats */}
      <div className="col-span-3 col-start-1 col-end-4 rounded-sm bg-white p-5 shadow-sm max-md:col-span-1 max-md:col-end-2">
        <div className="flex gap-5">
          {/* Profile Information */}
          {/* Personal */}
          {/* Contact */}
          <dl className="w-full max-w-[174px]">
            <Image className="rounded-md" src={AVATAR} alt="John Doe" />
          </dl>

          <div className="grid grid-cols-5 gap-5 max-md:grid-cols-1 md:grid-cols-5">
            <dl className="col-span-3 col-start-1 col-end-4 space-y-2 md:border-e">
              <dt className="text-sm font-medium text-gray-500">
                Personal information
              </dt>

              <dd className="text-xl font-light md:text-3xl">
                Julia Jefferson
              </dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-red-500">
                <span>Irregular</span>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.25 8.75V17.25H8.75"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 17L6.75 6.75"
                  ></path>
                </svg>
              </dd>

              <dd className="mt-3 flex items-center space-x-1 text-sm">
                <span>Age:</span>
                <span>24</span>
              </dd>
              <dd className="flex items-center space-x-1 text-sm">
                <span>CSE,</span>
                <span>Metropolitan University</span>
              </dd>
            </dl>

            <dl className="col-span-2 col-start-4 col-end-6 space-y-2">
              <dt className="text-sm font-medium text-gray-500">
                Contact information
              </dt>

              <dd className="text-2xl font-light md:text-4xl">
                <Link href="tel:01603-221292">01603-221292</Link>
              </dd>
              <dd className="text-grey-500 mt-2 flex items-center space-x-1 text-sm">
                <Link href="mailto:jefferson@dot9.dev">jefferson@dot9.dev</Link>
              </dd>

              <dd className="text-grey-500 mt-2 flex items-center space-x-1 text-sm">
                <span>Shahjalal Uposhahar, Sylhet.</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      {/* Blood Group */}
      <div className="rounded-sm bg-white p-5 shadow">
        <div className="relative block h-full w-full">
          <h3 className="text-sm font-medium">Blood groups</h3>
          <div className="mt-3 flex h-full items-center justify-center">
            <p className="-mt-10 text-5xl font-light text-red-500 md:text-6xl">
              AB+
            </p>
          </div>
        </div>
      </div>

      {/* Accomplishment */}
      <div className="rounded-sm bg-white p-5 shadow">
        <div className="w-full">
          <h3 className="font-bold">Accomplishment</h3>
          <div className="mt-3">
            This card will show the list of accomplishments made by the
            organization
          </div>
        </div>
      </div>

      {/* Login Activity */}
      <div className="col-span-2 rounded-sm bg-white py-5 shadow-sm max-md:col-span-1 max-md:col-end-2">
        <div className="w-full">
          <div className="px-5">
            <h3 className="font-bold">Login Activity</h3>
            <p className="mt-3 text-sm">
              This will show last 10 login information with device, browser and
              location
            </p>
          </div>
          <DeviceList />
        </div>
      </div>

      {/* Member */}
      <div className="rounded-sm bg-white p-5 shadow">
        <div className="flex w-full flex-col items-start justify-between">
          <h3 className="font-bold">Referrals</h3>
          <div className="mt-3">
            <div className="flex w-full flex-col gap-1.5 text-sm text-gray-700">
              <p className="">Total members: 45</p>
              <p className="">Canceled membership: 45</p>
              <p className="">Pending membership: 45</p>
              <p className="">Offline member: 45</p>
              <p className="">Membership request: 45</p>
              <p className="">Total members: 45</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Request */}
      <div className="rounded-sm bg-white p-5 shadow">
        <div className="w-full">
          <h3 className="font-bold">Donation Requests</h3>
          <div className="mt-3">
            This card will show blood donation requests
          </div>
        </div>
      </div>

      {/* Last Donation */}
      <div className="rounded-sm bg-white p-5 shadow">
        <div className="w-full">
          <h3 className="font-bold">Last Donations</h3>
          <div className="mt-3">
            List of all the blood donation made my the organization
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageRootComponent;
