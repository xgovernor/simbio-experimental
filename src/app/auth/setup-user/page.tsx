import MembershipForm from "./MembershipForm";
import AuthCard from "@/components/AuthCard";

const PageAuthVerification = () => {
  return (
    <AuthCard className="max-w-[850px]" title="New membership form">
        <MembershipForm />
    </AuthCard>
  );
};

export default PageAuthVerification;
