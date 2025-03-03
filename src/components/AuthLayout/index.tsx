import BG from "@/assets/images/bg.svg";
import clsx from "clsx";
import { ReactNode } from "react";

const AuthLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className="relative block h-screen w-full">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 z-0 h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG.src})`,
        }}
      />
      {/* Main content */}
      <div
        className={clsx(
          "relative mx-auto block h-full w-full max-w-[440px] overflow-y-auto max-md:px-5 max-md:py-10 md:py-14 lg:py-20",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
