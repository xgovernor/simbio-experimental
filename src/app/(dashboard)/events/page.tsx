/**
 * Retrieves data from the specified URL.
 *
 * @return {Promise<RequestResponseType>} The retrieved data.
 */
// async function getData(): Promise {
//     const res = await fetch("/data/requests.json");
//     const data = await res.json();

//     return data;
// }

const PageEvents = async () => {
  // const data = await getData();

  return (
    <div className="w-full p-5">
      <h1 className="text-2xl font-bold">Events</h1>
      <p className="mt-1">List of upcoming events</p>
    </div>
  );
};

export default PageEvents;
