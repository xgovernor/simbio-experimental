import Link from "next/link";
import { ChevronRight24Regular } from "@fluentui/react-icons";
import { memo } from "react";

export interface BreadcrumbLinkType {
  title: string;
  url?: string;
}

interface CanvasBreadcrumbPropsType {
  className?: string;
  links?: BreadcrumbLinkType[];
  rest?: object;
}

const GenerateLink = ({
  link,
  icon,
}: {
  key: string | any;
  link: BreadcrumbLinkType;
  icon: boolean;
}) => {
  return (
    <>
      {link.url ? (
        <Link
          className="text-[#424242] hover:text-[#0078D4]"
          style={{
            fontSize: "13px",
          }}
          href={link.url}
        >
          {link.title}
        </Link>
      ) : (
        <p
          className="text-[#424242] hover:text-[#0078D4]"
          style={{
            fontSize: "13px",
          }}
        >
          {link.title}
        </p>
      )}
      {icon && (
        <ChevronRight24Regular
          className="h-[13px] w-[13px] text-[#424242]"
          style={{
            fontSize: "13px",
          }}
        />
      )}
    </>
  );
};

const CanvasBreadcrumb: React.FC<CanvasBreadcrumbPropsType> = ({
  className,
  links,
  ...rest
}: CanvasBreadcrumbPropsType) => {
  const linksLength = links?.length || 0;

  return (
    <header
      className="sticky top-0 flex w-full flex-row flex-nowrap items-center justify-start border-t border-t-[#E0E0E0] bg-white "
      style={{
        boxShadow:
          "0px 1.2px 3.6px rgba(0, 0, 0, 0.03), 0px 6.4px 14.4px rgba(0, 0, 0, 0.07)",
        // zIndex: 1
      }}
    >
      <div
        className="flex h-full w-full flex-row flex-nowrap items-center justify-start gap-3 px-5 py-2"
        style={{
          fontSize: "13px",
        }}
      >
        {links &&
          links.map((link, index) => (
            <GenerateLink
              key={index}
              link={link}
              icon={linksLength - 1 !== index ? true : false}
            />
          ))}
      </div>
    </header>
  );
};

export default memo(CanvasBreadcrumb);
