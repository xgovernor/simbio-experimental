import { signIn } from "@/lib/auth";
import { Button, ButtonProps } from "./ui/button";

export default function SignIn({
  className,
  medium = "google",
  title = "Signin with Google",
  ...rest
}: { medium: "google"; title: string } & ButtonProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(medium);
      }}
    >
      <Button className={className} type="submit" {...rest}>
        {title}
      </Button>
    </form>
  );
}
