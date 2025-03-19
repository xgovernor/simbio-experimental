"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthCard from "@/components/AuthCard";

const PageAuthVerification: FC = () => {
  return (
    <AuthCard
      className="w-full max-w-[440px] md:w-[440px]"
      title="Verification key"
    >
      <div className="flex flex-col gap-7">
        <form className="flex flex-col gap-3">
          <Input placeholder="Security content" />
          <Button className="w-full bg-black text-white">Recover</Button>
        </form>
      </div>
    </AuthCard>
  );
};

export default PageAuthVerification;
