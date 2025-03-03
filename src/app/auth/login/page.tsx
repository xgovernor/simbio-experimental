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

const PageAuthLogin = () => {
  return (
    <AuthLayout>
      <AuthCard
        title="Signin with"
        footer={
          <p className="caption1 font-medium">
            Don&apos;t have an account? <a href="/register">Sign up</a>
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

export default PageAuthLogin;
