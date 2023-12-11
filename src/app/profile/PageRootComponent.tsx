"use client";
import { FC, memo } from "react";
import { Menu, MenuItemLink } from "@fluentui/react-components";
import DashboardLayout from "@/components/ui/dashboard/DashboardLayout";
import DeviceList from "@/components/settings/DeviceList";

const PageRootComponent: FC = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-4 gap-22px p-[22px] 2xl:grid-cols-6">
        {/* Profile Stats */}
        <div className="col-span-4 col-start-1 col-end-5 rounded bg-white p-5 shadow">
          <div className="grid grid-cols-4 gap-5">
            <div className="border-e">
              <p>Profile stats</p>
            </div>
            <div className="border-e">
              <p>Profile stats</p>
            </div>
            <div className="border-e">
              <p>Profile stats</p>
            </div>
            <div className="">
              <p>Profile stats</p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Personal Information</h3>
            <div className="mt-3">
              This will display organization information
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

        {/* Blood Group */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Blood groups</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <div className="rounded-full border px-2.5 py-0.5 text-xs">
                A+
              </div>
              <div className="rounded-full border px-2.5 py-0.5 text-xs">
                A-
              </div>
              <div className="rounded-full border px-2.5 py-0.5 text-xs">
                B+
              </div>
              <div className="rounded-full border px-2.5 py-0.5 text-xs">
                B-
              </div>
              <div className="rounded-full border px-2.5 py-0.5 text-xs">
                AB+
              </div>
              <div className="rounded-full border px-2.5 py-0.5 text-xs">
                AB-
              </div>
              <div className="rounded-full border px-2.5 py-0.5 text-xs">
                O+
              </div>
              <div className="rounded-full border px-2.5 py-0.5 text-xs">
                O-
              </div>
            </div>
          </div>
        </div>

        {/* Login Activity */}
        <div className="col-span-2 rounded bg-white py-5 shadow">
          <div className="w-full">
            <div className="px-5">
              <h3 className="font-bold">Login Activity</h3>
              <p className="mt-3">
                This will show last 10 login information with device, browser
                and location
              </p>
            </div>
            <DeviceList />
          </div>
        </div>

        {/* Member */}
        <div className="rounded bg-white p-5 shadow">
          <div className="w-full">
            <h3 className="font-bold">Member</h3>
            <div className="mt-3">
              <p>Chart</p>
              <ul>
                <li>Total members: 45</li>
                <li>Canceled membership: 45</li>
                <li>Pending membership: 45</li>
                <li>Offline member: 45</li>
                <li>Membership request: 45</li>
                <li>Total members: 45</li>
              </ul>
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
