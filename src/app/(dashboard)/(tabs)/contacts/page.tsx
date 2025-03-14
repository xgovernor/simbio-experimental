import { memo } from "react";
import data from "@/assets/data/contacts.json";
import ContactsTable, {
  TContactItem,
} from "@/components/contacts/ContactsTable";

export type ContactResponseType = {
  data: TContactItem[];
  offset: number;
  total: number;
  limit: number;
};

export type TPageConfig = {
  analytics?: boolean;
  settings?: boolean;
  table?: boolean;
};

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData(): Promise<ContactResponseType> {
//     const res = await fetch("/data/contacts.json");
//     const data = await res.json();

//     return data;
// }

const PageContacts = async () => {
  // const data = await getData();
  const config: TPageConfig = {
    analytics: true,
    settings: true,
    table: true,
  };

  return (
    <div className="grid grid-cols-1">
      <div className="p-5">
        <ContactsTable
          title="Phone Book"
          description={`Showing ${data?.limit} of ${data?.total} Contacts`}
          data={data?.data}
        />
      </div>
    </div>
  );
};

export default memo(PageContacts);
