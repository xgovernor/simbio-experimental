import { signIn } from "@/lib/auth";
import { Button, ButtonProps } from "./ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function SignIn({
  className,
  medium = "google",
  title = "Signin with Google",
  icon,
  ...rest
}: { medium: "google"; title: string, icon?: ReactNode } & ButtonProps) {

  return (
    <form
      action={async () => {
        "use server";
        await signIn(medium);
      }}
    >
      <Button className={cn("bg-black/90 hover:bg-black/86", className)} type="submit" {...rest}>
        {icon}
        {title}
      </Button>
    </form>
  );
}
