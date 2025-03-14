"use client";

import MessagesTable from "@/components/support/MessagesTable";
import SupportOrgList, { OrganizationsItemType } from "@/components/support/SupportOrgList";
import CanvasHeader from "@/components/ui/Canvas/CanvasHeader";
import { selectSupport, updateOrganizations } from "@/store/actions/support.action";
import {MessageCircleCodeIcon } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export type TPageConfig = {
  analytics?: boolean;
  settings?: boolean;
  organizations: true;
  messages?: boolean;
};

export type OrganizationsResponseType = {
  data: OrganizationsItemType[];
  offset: number;
  total: number;
  limit: number;
};

const ORGANIZATIONS: OrganizationsItemType[] = [
  {
    id: "SMBSO001",
    avatar: "/image/logo/bss.jpg",
    title: "Blood Donor Club New York",
    location: "Downtown, NY, USA",
  },
  {
    id: "SMBSO002",
    avatar: "/image/logo/bss.jpg",
    title: "Los Angeles Blood Heroes",
    location: "Uptown, LA, USA",
  },
  {
    id: "SMBSO003",
    avatar: "/image/logo/bss.jpg",
    title: "Chicago Lifesavers Club",
    location: "Main Street, Chicago, USA",
  },
  {
    id: "SMBSO004",
    avatar: "/image/logo/bss.jpg",
    title: "San Francisco Blood Angels",
    location: "Broadway, San Francisco, USA",
  },
  {
    id: "SMBSO005",
    avatar: "/image/logo/bss.jpg",
    title: "Seattle Blood Unity",
    location: "High Street, Seattle, USA",
  },
  {
    id: "SMBSO006",
    avatar: "/image/logo/bss.jpg",
    title: "Miami Blood Guardians",
    location: "Oak Avenue, Miami, USA",
  },
  {
    id: "SMBSO007",
    avatar: "/image/logo/bss.jpg",
    title: "Denver Vital Blood Club",
    location: "Pine Street, Denver, USA",
  },
  {
    id: "SMBSO008",
    avatar: "/image/logo/bss.jpg",
    title: "Philadelphia Blood Connect",
    location: "Cedar Avenue, Philadelphia, USA",
  },
  {
    id: "SMBSO009",
    avatar: "/image/logo/bss.jpg",
    title: "Atlanta Lifeline Blood Club",
    location: "Maple Lane, Atlanta, USA",
  },
  {
    id: "SMBSO010",
    avatar: "/image/logo/bss.jpg",
    title: "Dallas Blood Warriors",
    location: "Elm Street, Dallas, USA",
  },
];

const ORGANIZATIONS_DATA: OrganizationsResponseType = {
  data: ORGANIZATIONS,
  offset: 0,
  total: 0,
  limit: 0,
};

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData() {
//     const res = await fetch("/data/contacts.json");
//     const data = await res.json();

//     return data;
// }

const PageSupports = () => {
  const dispatch = useDispatch();
  const supportState = useSelector(selectSupport);

  useEffect(() => {
    dispatch(updateOrganizations(ORGANIZATIONS_DATA));
  }, []);

  // const data = await getData();
  // const config: TPageConfig = {
  //   analytics: true,
  //   settings: true,
  //   organizations: true,
  //   messages: true,
  // };

  return (
    <>
      <CanvasHeader
        title="Support messages"
        icon={<MessageCircleCodeIcon className="h-6 w-6" />}
      />

      <div
        className="relative grid h-[calc(100vh-144px)] gap-3 overflow-hidden p-5"
        style={{
          // maxHeight: "calc(100vh - 136px)",
          gridTemplateColumns: "22rem 1fr",
          // height: "calc(100vh - 184px)",
        }}
      >
        <SupportOrgList organizations={ORGANIZATIONS_DATA.data} />

        <MessagesTable
          title={supportState.data.organization.name}
          address={supportState.data.organization.address}
          logo={supportState.data.organization.avatar}
        />
      </div>
    </>
  );
};

export default PageSupports;
