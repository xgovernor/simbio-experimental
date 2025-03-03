import { FC } from "react";
import SignIn from "@/components/sign-in";
import AuthLayout from "@/components/AuthLayout";
import AuthCard from "@/components/AuthCard";

const AuthMedium: { name: "google"; label: string; icon: string }[] = [
  {
    name: "google",
    label: "Continue with Google",
    icon: "google",
  },
];

const PageAuthRegistered: FC = () => {
  return (
    <AuthLayout>
      <AuthCard
        title="Register with"
        footer={
          <p className="caption1 font-medium">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        }
      >
        {AuthMedium.map((medium) => (
          <SignIn
            key={medium.name}
            className="w-full bg-black"
            medium={medium.name}
            title={medium.label}
          />
        ))}
      </AuthCard>
    </AuthLayout>
  );
};

export default PageAuthRegistered;
