import SignIn from "@/components/sign-in";
import AuthLayout from "@/components/AuthLayout";
import AuthCard from "@/components/AuthCard";
import Link from "next/link";
import GoogleIcon from "@/assets/icons/GoogleIcon";

const AuthMedium: { name: "google"; label: string; icon: string }[] = [
  {
    name: "google",
    label: "Continue with Google",
    icon: "google",
  },
];

const PageAuthLogin = () => {
  return (
    <AuthLayout>
      <AuthCard
        title="Signin with"
        footer={
          <p className="caption1 font-medium">
            By continuing, you agree to SIMBIO&apos;s{" "}
            <Link
              className="font-medium text-blue-600 hover:underline"
              href="/tos"
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              className="font-medium text-blue-600 hover:underline"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            .
          </p>
        }
      >
        {AuthMedium.map((medium) => (
          <SignIn
            key={medium.name}
            className="w-full"
            medium={medium.name}
            title={medium.label}
            icon={<GoogleIcon className="fill-white w-4 h-4"/>}
          />
        ))}
      </AuthCard>
    </AuthLayout>
  );
};

export default PageAuthLogin;
