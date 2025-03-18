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
    <section className="relative min-h-screen h-full w-full flex justify-center items-center">
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
          "relative min-w-[inherit] w-[inherit] max-w-[inherit] flex justify-center items-center  !overflow-y-auto",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
