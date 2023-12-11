import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

const MENU: { id: string; title: string; url: string }[] = [
  {
    id: "1",
    title: "Privacy",
    url: "https://dot9.dev/projects/simbio",
  },
  {
    id: "2",
    title: "Terms",
    url: "https://dot9.dev/projects/simbio",
  },
  {
    id: "3",
    title: "Donation",
    url: "/donation",
  },
];

const Footer = ({ className }: { className: string }) => {
  return (
    <footer className={className}>
      <div className="mx-auto my-0 flex w-full items-center justify-between gap-4 px-5 py-2">
        <div className="flex w-1/3 items-center justify-start text-sm">
          <p className="text-xs font-medium leading-4 text-neutral-900">
            © Symbio 2023. Powered by{" "}
            <Link
              className="hover:text-primary hover:underline"
              href="https://dot9.dev"
            >
              Dot9
            </Link>
          </p>
        </div>

        <div className="flex w-1/3 items-center justify-center">
          <Image src={"/favicon.svg"} alt="Symbio" width={18} height={18} />
        </div>

        <div className="flex w-1/3 items-center justify-end">
          <ul className="flex items-center justify-center gap-4">
            {MENU?.map(({ id, title, url }) => (
              <li key={id}>
                <Link
                  className="text-xs leading-4 hover:text-primary hover:underline"
                  href={url}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
