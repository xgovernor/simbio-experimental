"use client";
import { FC, memo } from "react";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import { Badge } from "@/components/ui/badge";

const PageRootComponent: FC = () => {
  return (
    <DashboardLayout>
      <div className="grid-rows-auto grid gap-[22px] p-4 max-md:grid-cols-1 max-md:gap-4 md:grid-cols-2 md:p-[22px] lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {/* <div className="max-md:col-span-1 max-md:col-end-2 col-span-4 col-start-1 col-end-5"> */}
        {/* <Alert className="shadow"> */}
        {/* <Terminal className="h-4 w-4" /> */}
        {/* <AlertTitle className="text-green-600">Your Order placed Successfully.</AlertTitle> */}
        {/* <AlertDescription>Your Order placed Successfully.</AlertDescription> */}
        {/* </Alert> */}

        {/* Alert Success */}
        {/* <div className="mt-2 bg-green-50 border border-green-400 px-6 py-4 rounded-md flex items-center w-full">
            <svg viewBox="0 0 24 24" className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
              <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
              </path>
            </svg>
            <div className="text-sm text-green-600">
              <p>Your Order placed Successfully.</p>
            </div>
          </div> */}
        {/* End Alert Success */}
        {/* </div> */}

        {/* Profile Stats */}
        <div className="col-span-4 col-start-1 col-end-5 rounded bg-white shadow max-md:col-span-1  max-md:col-end-2 lg:p-5">
          <div className="grid grid-cols-2 max-md:grid-cols-2 lg:grid-cols-5 lg:gap-5 ">
            <dl className="space-y-2 max-lg:col-start-1 max-lg:col-end-3 max-md:border-b max-md:p-4 max-md:text-center lg:border-e">
              <dt className="text-sm font-medium text-gray-600">Donations</dt>

              <dd className="text-5xl font-light md:text-6xl">192 bag</dd>

              <dd className="text-green-500 flex items-center space-x-1 text-sm font-medium max-lg:justify-center">
                <span>32% increase</span>

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
                    d="M17.25 15.25V6.75H8.75"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 7L6.75 17.25"
                  ></path>
                </svg>
              </dd>
            </dl>

            <dl className="space-y-2 border-e max-lg:border-b max-md:p-4">
              <dt className="text-sm font-medium text-gray-500">Fund raised</dt>

              <dd className="text-5xl font-light md:text-6xl">20K</dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-red-500">
                <span>7% increase</span>

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
            </dl>

            <dl className="space-y-2 max-lg:border-b max-md:p-4 lg:border-e">
              <dt className="text-sm font-medium text-gray-500">New member</dt>

              <dd className="text-5xl font-light md:text-6xl">10</dd>

              <dd className="text-green-500 flex items-center space-x-1 text-sm font-medium">
                <span>3% increase</span>

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
                    d="M17.25 15.25V6.75H8.75"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 7L6.75 17.25"
                  ></path>
                </svg>
              </dd>
            </dl>

            <dl className="space-y-2 border-e max-md:p-4">
              <dt className="text-sm font-medium text-gray-500">
                Patient served
              </dt>

              <dd className="text-5xl font-light md:text-6xl">180</dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-red-500">
                <span>7% increase</span>

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
            </dl>

            <dl className="space-y-2 max-md:p-4">
              <dt className="text-sm font-medium text-gray-500">
                Special request
              </dt>

              <dd className="text-5xl font-light md:text-6xl">20</dd>

              <dd className="text-green-500 flex items-center space-x-1 text-sm font-medium">
                <span>3% increase</span>

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
                    d="M17.25 15.25V6.75H8.75"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 7L6.75 17.25"
                  ></path>
                </svg>
              </dd>
            </dl>
          </div>
        </div>

        {/* Blood Group */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Blood groups</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className="rounded-full" variant="secondary">
                A+
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                A-
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                B+
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                B-
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                AB+
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                AB-
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                O+
              </Badge>
              <Badge className="rounded-full" variant="secondary">
                O-
              </Badge>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">
              Personal Information
              <Badge className="ms-1 rounded-full text-xs" variant="secondary">
                +4.4%
              </Badge>
            </h3>
            <div className="mt-3">
              This will display organization information
            </div>
          </div>
        </div>

        {/* Campaign */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Campaigns</h3>
            <div className="mt-3">
              This card will show the list of campaigns arranged by the
              organization
            </div>
          </div>
        </div>

        {/* Accomplishment */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Accomplishment</h3>
            <div className="mt-3">
              This card will show the list of accomplishments made by the
              organization
            </div>
          </div>
        </div>

        {/* Member */}
        <div className="rounded bg-white p-5 shadow">
          <div className="flex w-full flex-col items-start justify-between">
            <h3 className="font-bold">Member</h3>
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
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Donation Requests</h3>
            <div className="mt-3">
              This card will show blood donation requests
            </div>
          </div>
        </div>

        {/* Last Donation */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Last Donations</h3>
            <div className="mt-3">
              List of all the blood donation made my the organization
            </div>
          </div>
        </div>

        {/* Volunteer List */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Volunteer List</h3>
            <div className="mt-3">The list of current volunteers</div>
          </div>
        </div>

        {/* Social Network */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Social Network</h3>
            <div className="mt-3">List of all the social networks</div>
          </div>
        </div>

        {/* Events */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Events</h3>
            <div className="mt-3">
              <ul>
                <li>Total events added by the organization</li>
                <li>Total events participated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default memo(PageRootComponent);
