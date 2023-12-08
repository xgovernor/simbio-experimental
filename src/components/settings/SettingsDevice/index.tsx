import { Label, Table, TableBody, TableCell, TableHeader, TableRow } from "@fluentui/react-components";
import { FC, memo } from "react";
import SettingsTemplate from "../SettingsTemplate";

interface SettingsDevicePropsType {
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

const SettingsDevice: FC<SettingsDevicePropsType> = ({ className }: SettingsDevicePropsType) => {
    return (
        <SettingsTemplate title="Device">
            <>
                <Label>
                    These are the mobile devices that are synchronizing with your mailbox. You can remove a mobile
                    device, access your device recovery password, initiate a remote device wipe, or block your phone if
                    you lose it. When you add a new device and set it up to synchronize with your account, it will
                    appear in the list below.
                </Label>

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

                <div className="mt-10">
                    <p className="body1Strong mb-1">Disclaimer:</p>
                    <p className="body1">
                        You can not clear the history or remove any line of it. For security reasons we do not build
                        anything to achieve such facility.
                    </p>
                </div>
            </>
        </SettingsTemplate>
    );
};

export default memo(SettingsDevice);
