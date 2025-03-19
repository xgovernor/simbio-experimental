import Image from "next/image";
import { ReactNode } from "react";
import LOGO from "@/assets/images/simbio-color.svg";
import clsx from "clsx";

const AuthCard = ({
  className,
  children,
  title,
  footer,
}: {
    className?: string;
  children: ReactNode;
  title: string;
  footer?: ReactNode;
}) => {
  return (
    <div className={clsx("w-full max-w-[440px] h-fit flex-col space-y-8 pt-11 pb-8 px-8 md:px-11 bg-white rounded-md shadow-sm", className)}>
      <div>
        {/* Logo */}
        <Image className="brandLogo" src={LOGO} alt="Simbio logo" priority />
      </div>

      <div className="">
        <div>
          {/* Title */}
          <h1 className="mb-4 text-xl leading-7 font-semibold">{title}</h1>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">{children}</div>

          {footer && <div className="">{footer}</div>}

          <div className="flex items-start justify-between">
            <p className="caption1 font-medium">All right reserved.</p>
            <p className="caption1 font-medium">&copy; SIMBIO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
