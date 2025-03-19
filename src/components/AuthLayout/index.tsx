import BG from "@/assets/images/bg.svg";
import { ReactNode } from "react";

const AuthLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <section className="relative flex h-auto min-h-screen w-full items-center justify-center max-md:px-5 py-10 md:py-14 lg:py-20">
      {/* Background image */}
      <div
        className="fixed top-0 left-0 z-0 h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG.src})`,
        }}
      />

      {/* Main content */}
      <div className="h-full z-[1] overflow-auto" >
      {children}
      </div>
    </section>
  );
};

export default AuthLayout;
