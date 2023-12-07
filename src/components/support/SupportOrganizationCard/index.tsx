import { Card, CardHeader, mergeClasses } from "@fluentui/react-components";
import Image from "next/image";
import { memo } from "react";

type SupportOrganizationPropsType = {
    key: string;
    avatar: string;
    title: string;
    location: string;
};

const SupportOrganizationCard: React.FC<SupportOrganizationPropsType> = ({ key, avatar, title, location }: SupportOrganizationPropsType) => {
    return (
        <Card
            className="mb-3 max-h-fit w-full max-w-full rounded-md border border-transparent p-4 hover:border-gray-500"
            size="medium"
            key={key}
        >
            <header className="flex flex-row items-center gap-3">
                <Image className="h-8 rounded" src={avatar} alt="Application one logo" width={32} height={32} />
                {/* <Image
                    className="h-8 rounded"
                    src={resolveAsset("logo2.svg")}
                    alt="Application two logo"
                    width={32}
                    height={32}
                /> */}
            </header>

            <CardHeader
                header={<h3 className="body1Strong">{title}</h3>}
                description={
                    <p className="text-xs leading-5" style={{ color: "rgb(97 97 97)" }}>
                        {location}
                    </p>
                }
            />

            <footer className={mergeClasses("flex flex-row items-center justify-between gap-1")}>
                <span>Automated</span>
                <span>3290</span>
            </footer>
        </Card>
    );
};

export default memo(SupportOrganizationCard)
