"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthCard from "@/components/AuthCard";

const PageAuthRecovery: FC = () => {
  return (
    <AuthCard className="w-full md:w-[440px] max-w-[440px]" title="Recover with">
        <form className="flex flex-col gap-3">
          <Input placeholder="Email" />
          <div className="text-center">Or</div>
          <Input placeholder="Phone" />
          <Button className="w-full bg-black text-white">Recover</Button>
        </form>
    </AuthCard>
  );
};

export default PageAuthRecovery;
