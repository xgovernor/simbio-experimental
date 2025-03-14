import data from "@/assets/data/requests.json";
import BloodRequestTable, {
  TRequestItem,
} from "@/components/blood-request/BloodRequestTable";

export type RequestResponseType = {
  data: TRequestItem[];
  offset: number;
  total: number;
  limit: number;
};

/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData() {
//     const res = await fetch("/data/requests.json");
//     const data = await res.json();

//     return data;
// }

const PageBloodRequest = async () => {
  // const data = await getData();

  return (
    <div className="mt-5 grid grid-cols-1">
      <div className="px-5 pb-5">
        <BloodRequestTable
          title="Special Blood Request list"
          description={`Showing ${data?.limit} of ${data?.total} donations`}
          data={data?.data}
        />
      </div>
    </div>
  );
};

export default PageBloodRequest;
