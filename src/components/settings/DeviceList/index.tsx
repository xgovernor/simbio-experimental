import { Table, TableBody, TableCell, TableHeader, TableRow } from "@fluentui/react-components";
import { FC, memo } from "react";

interface DeviceListPropsType {
    className?: string;
}

const DEVICES = [
    {
        id: "SDA001",
        device: "SAMSUNG Galaxy S7",
        mac: "95:97:E5:D7:EA:F1",
        ip: "134.123.222.100",
        date: "29 Jun, 2023",
    },
    {
        id: "SDA002",
        device: "Apple iPhone 12",
        mac: "95:97:E5:AE:EA:F1",
        ip: "234.123.202.100",
        date: "28 Jun, 2023",
    },
    {
        id: "SDA003",
        device: "Google Pixel 4",
        mac: "95:97:E5:AE:EA:F1",
        ip: "222.121.222.123",
        date: "27 Jun, 2023",
    },
    {
        id: "SDA004",
        device: "SAMSUNG Galaxy S7",
        mac: "95:97:E5:D7:EA:F1",
        ip: "189.156.234.233",
        date: "29 Jun, 2023",
    },
];

const COLUMNS = [
    {
        key: "date",
        title: "Date",
    },
    {
        key: "device",
        title: "Device",
    },
    {
        key: "mac",
        title: "MAC",
    },
    {
        key: "ip",
        title: "IP",
    },
];

const DeviceList: FC<DeviceListPropsType> = ({ className }: DeviceListPropsType) => {
    return (

        <Table className="mt-5 w-full">
            <TableHeader>
                <TableRow
                    className="border-b"
                    style={{
                        borderBottomColor: "rgb(240, 240, 240)",
                    }}
                >
                    {COLUMNS?.map(({ key, title }) => (
                        <TableCell
                            key={key}
                            className="body1Strong"
                            style={{
                                color: "#808080",
                            }}
                        >
                            {title}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHeader>

            <TableBody>
                {DEVICES.map((activity) => (
                    <TableRow
                        key={activity.id}
                        className="border-b"
                        style={{
                            borderBottomColor: "rgb(240, 240, 240)",
                        }}
                    >
                        <TableCell className="text-sm" style={{ color: "#424242" }}>
                            {activity.date}
                        </TableCell>
                        <TableCell className="text-sm font-medium" style={{ color: "#424242" }}>
                            {activity.device}
                        </TableCell>
                        <TableCell className="text-sm" style={{ color: "#424242" }}>
                            {activity.mac}
                        </TableCell>
                        <TableCell className="text-sm" style={{ color: "#424242" }}>
                            {activity.ip}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default memo(DeviceList);
