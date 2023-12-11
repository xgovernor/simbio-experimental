import { OrganizationsItemType } from "@/components/support/SupportOrganizations";
import PageRootComponent, {
  OrganizationsResponseType,
  PageConfig,
} from "./PageRootComponent";
import { memo } from "react";

const ORGANIZATIONS: OrganizationsItemType[] = [
  {
    id: "SMBSO001",
    avatar: "/image/bss.jpg",
    title: "Blood Donor Club New York",
    location: "Downtown, NY, USA",
  },
  {
    id: "SMBSO002",
    avatar: "/image/bss.jpg",
    title: "Los Angeles Blood Heroes",
    location: "Uptown, LA, USA",
  },
  {
    id: "SMBSO003",
    avatar: "/image/bss.jpg",
    title: "Chicago Lifesavers Club",
    location: "Main Street, Chicago, USA",
  },
  {
    id: "SMBSO004",
    avatar: "/image/bss.jpg",
    title: "San Francisco Blood Angels",
    location: "Broadway, San Francisco, USA",
  },
  {
    id: "SMBSO005",
    avatar: "/image/bss.jpg",
    title: "Seattle Blood Unity",
    location: "High Street, Seattle, USA",
  },
  {
    id: "SMBSO006",
    avatar: "/image/bss.jpg",
    title: "Miami Blood Guardians",
    location: "Oak Avenue, Miami, USA",
  },
  {
    id: "SMBSO007",
    avatar: "/image/bss.jpg",
    title: "Denver Vital Blood Club",
    location: "Pine Street, Denver, USA",
  },
  {
    id: "SMBSO008",
    avatar: "/image/bss.jpg",
    title: "Philadelphia Blood Connect",
    location: "Cedar Avenue, Philadelphia, USA",
  },
  {
    id: "SMBSO009",
    avatar: "/image/bss.jpg",
    title: "Atlanta Lifeline Blood Club",
    location: "Maple Lane, Atlanta, USA",
  },
  {
    id: "SMBSO010",
    avatar: "/image/bss.jpg",
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

const PageSupports = async () => {
  // const data = await getData();
  const config: PageConfig = {
    analytics: true,
    settings: true,
    organizations: true,
    messages: true,
  };

  return (
    <PageRootComponent organizations={ORGANIZATIONS_DATA} config={config} />
  );
};

export default memo(PageSupports);
