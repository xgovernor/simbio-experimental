import Date from "@/components/ui/Date";
import { SupportMessagePriorityType, SupportMessageStatusType } from "@/types";
import { getColorWithKey } from "@/utils/color-factory";
import { Card, CardPreview } from "@fluentui/react-components";
import { memo } from "react";


const COLUMNS = [
    {
        id: "SMB0",
        className: "",
        title: "ID",
    },
    {
        id: "SMB1",
        className: "w-full min-w-xs",
        title: "Title",
    },
    {
        id: "SMB2",
        className: "w-40",
        title: "Priority",
    },
    {
        id: "SMB3",
        className: "w-40",
        title: "From",
    },
    {
        id: "SMB4",
        className: "",
        title: "Date",
    },
];


export type SupportMessageItemType = {
    id: string;
    incident_id: string;
    title: string;
    priority: SupportMessagePriorityType;
    timestamp: string;
    from: {
        id: string;
        title: string;
    };
    message: string[];
    status: SupportMessageStatusType;
    isViewed: boolean;
};

const MESSAGES: SupportMessageItemType[] = [
    {
        id: "SMB-SM00",
        incident_id: "12534",
        title: "Quo laudantium error corporis accusamus unde, labore quidem non officiis.",
        priority: "high",
        timestamp: "",
        from: {
            id: "SU000",
            title: "John Doe",
        },
        message: [
            "Hi Team",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit commodi doloremque.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit? ...",
        ],
        status: "open",
        isViewed: false,
    },
    {
        id: "SMB-SM01",
        incident_id: "12537",
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        priority: "none",
        timestamp: "",
        from: {
            id: "SU001",
            title: "Muhammad Sunny",
        },
        message: [
            "Hi",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit commodi doloremque.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur natus aut reiciendis nisi sed! Temporibus, quibusdam voluptates? ...",
        ],
        status: "open",
        isViewed: false,
    },
    {
        id: "SMB-SM02",
        incident_id: "12545",
        title: "Excepturi at labore vel accusamus exercitationem quam, amet provident!",
        priority: "low",
        timestamp: "",
        from: {
            id: "SU001",
            title: "Muhammad Sunny",
        },
        message: [
            "Hi Team",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur natus aut reiciendis nisi sed! Temporibus, quibusdam voluptates?",
        ],
        status: "delete",
        isViewed: true,
    },
    {
        id: "SMB-SM03",
        incident_id: "12934",
        title: "impedit possimus praesentium voluptatum omnis assumenda rem autem magni consequatur nostrum distinctio unde.",
        priority: "medium",
        timestamp: "",
        from: {
            id: "SU001",
            title: "Muhammad Sunny",
        },
        message: [
            "Hi Team",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit commodi doloremque.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit? ...",
        ],
        status: "close",
        isViewed: true,
    },
    {
        id: "SMB-SM04",
        incident_id: "13534",
        title: "Excepturi at labore vel accusamus exercitationem assumenda ex incidunt eum quam, amet provident!",
        priority: "high",
        timestamp: "",
        from: {
            id: "SU001",
            title: "Muhammad Sunny",
        },
        message: [
            "Hi Team",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit commodi doloremque.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur natus aut reiciendis nisi sed! Temporibus, quibusdam voluptates? ...",
        ],
        status: "close",
        isViewed: false,
    },
    {
        id: "SMB-SM05",
        incident_id: "11534",
        title: "Odit consequatur natus aut reiciendis nisi sed!",
        priority: "high",
        timestamp: "",
        from: {
            id: "SU001",
            title: "Muhammad Sunny",
        },
        message: [
            "Hi Team",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit commodi doloremque.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, quibusdam voluptates? ...",
        ],
        status: "open",
        isViewed: true,
    },
];

const MessagesTable = () => {
    return (
        <Card
            className="w-full p-0"
            style={{
                height: "calc(100vh - 187px)",
            }}
        >
            <CardPreview className="m-0 min-w-full p-0">
                <SupportHeader />

                {/* content overflow section remove table and thead but keep tbody and change tbody to section, in order to have scrollable overflow section */}
                <table className="max-h-content grid h-fit w-full grid-cols-1">
                    {/* Table Header Row */}
                    <thead className="min-h-0 w-full">
                        <tr
                            className="grid w-full border-b border-b-[#e5e7eb]"
                            style={{
                                gridTemplateColumns: "100px auto 160px 160px 160px",
                            }}
                        >
                            {COLUMNS?.map((column) => (
                                <th key={column.id} className={`body1Strong px-4 py-3 text-left ${column.className}`}>
                                    {column.title}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="min-h-max max-w-full overflow-x-auto overflow-y-auto ">
                        {/* low  */}
                        <tr className="sticky top-0 flex border-b bg-[#f5f5f5]">
                            <th className="flex-1  px-3 py-2 text-left" colSpan={6}>
                                <h2 className="text-sm">
                                    <span className="mr-1 font-normal">Priority</span>
                                    <span>Low</span>
                                </h2>
                            </th>
                        </tr>

                        {MESSAGES?.map((message, i) => <TableRow key={i} {...message} />)}
                    </tbody>
                </table>
            </CardPreview>
        </Card>
    );
};

const TableRow: React.FC<SupportMessageItemType> = ({
    id,
    incident_id,
    title,
    priority,
    timestamp,
    from,
    message,
    status,
    isViewed,
}: SupportMessageItemType) => {
    return (
        <tr
            role="row"
            className="grid w-full cursor-pointer border-b border-b-[#f0f0f0] hover:bg-[#f5f5f5]"
            style={{
                gridTemplateColumns: "100px auto 160px 160px 160px",
            }}
        >
            <td className=" px-4 py-3">#{incident_id}</td>

            <td className="min-w-xs w-full px-4 py-3">
                <div className="group relative w-full">
                    {/* Title */}
                    <h3>
                        <span className={`${!isViewed && "body1Strong"}  truncate`}>{title}</span>

                        <span
                            className={`relative ms-2 rounded-full text-xs ${getColorWithKey(
                                status,
                                "bg",
                            )} px-1.5 pb-0.5 text-white opacity-80`}
                            style={{
                                textTransform: "capitalize",
                            }}
                        >
                            {status}
                        </span>
                    </h3>

                    {/* dropdown */}
                    <span className="absolute top-0 z-50 ml-4 mt-10 hidden w-screen max-w-lg rounded-md border bg-white p-6 text-gray-900 shadow-lg group-hover:block">
                        <article>
                            <header>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-start gap-3">
                                        <span
                                            className={`rounded-sm bg-blue-600 px-3 py-1 text-xs uppercase leading-none text-white ${getColorWithKey(
                                                status,
                                                "bg",
                                            )}`}
                                        >
                                            {status}
                                        </span>
                                        <p className="ml-auto text-sm text-gray-700">Yesterday 10:33</p>
                                    </div>
                                    <PriorityBadge priority={priority} />
                                </div>
                                <p className="mt-2 text-gray-700">Incident: #{incident_id}</p>
                                <p className="mt-1 font-medium">Nico Braun</p>
                                <p className="text-xs">Blood Donor Club New York</p>
                            </header>

                            <section className="mt-5">
                                <h1 className="mt-6 text-base font-semibold">{title}</h1>
                                <div className="mt-2">
                                    {message?.map((line, i) => (
                                        <p key={i} className="mb-1">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        </article>
                    </span>
                    {/* end dropdown */}
                </div>
            </td>

            <td className="truncate px-4 py-3 ">
                <div>
                    <PriorityBadge priority={priority} />
                </div>
            </td>
            <td className="truncate px-4 py-3 ">{from?.title}</td>
            <td className="truncate px-4 py-3 ">
                <Date dateString={timestamp as string} />
            </td>
        </tr>
    );
};


const PriorityBadge = ({ priority, className }: { priority: string; className?: string }) => {
    return (
        <span
            className={`${
                className && className
            } relative me-2 flex max-w-fit items-center justify-center gap-1 rounded-full border border-gray-500 ${getColorWithKey(
                priority,
                "border",
            )} px-2 font-mono leading-none text-gray-800`}
            style={{
                padding: "2px 5px",
            }}
        >
            <span className={`min-w-1.5 min-h-1.5 h-1.5 w-1.5 rounded-full ${getColorWithKey(priority, "bg")}`}></span>
            <span className={`text-xs text-gray-600 ${getColorWithKey(priority, "text")}`}>{priority}</span>
        </span>
    );
};

const SupportHeader = () => {
    return (
        <>
            <header className="h-fit max-h-fit">
                <div className="px-5 py-5">
                    <h1 className="text-xl font-bold">Blood Donor Club New York</h1>
                    <p className="text-sm">Downtown, NY, USA</p>
                </div>

                {/* <div className="flex gap-3 bg-gray-100 px-5 py-3"> */}
                {/* <form> */}
                {/* <Field> */}
                {/* <Select className="body1Strong" appearance="filled-lighter"> */}
                {/* <option disabled>Priority</option> */}
                {/* <option>High</option> */}
                {/* <option>Medium</option> */}
                {/* <option>Low</option> */}
                {/* </Select> */}
                {/* </Field> */}
                {/*  */}
                {/* <Field> */}
                {/* <Select appearance="filled-lighter"> */}
                {/* <option disabled>Status</option> */}
                {/* <option>Open</option> */}
                {/* <option>Close</option> */}
                {/* <option>Delete</option> */}
                {/* </Select> */}
                {/* </Field> */}
                {/* </form> */}
                {/* </div> */}
            </header>
        </>
    );
};

export default memo(MessagesTable);
