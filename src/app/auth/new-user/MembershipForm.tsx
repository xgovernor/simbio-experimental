"use client"
import { memo } from "react";
import FormBuilder from "@/components/ui/FormBuilder";
import { formSchema } from "./member-form.schema";

interface TMembershipFormProps {
  className?: string;
  children?: React.ReactNode;
  rest?: object;
}

const MembershipForm: React.FC<TMembershipFormProps> = ({
  className,
  children,
}: TMembershipFormProps) => {
  /**
   * Form handler
   */
  function onSubmitHandler(values: Record<string, unknown>): void {
    // setSubmitting(true);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      // setSubmitting(false);
    }, 1000);
  }

  return <FormBuilder formSchema={formSchema} onSubmit={onSubmitHandler} />;
};

export default memo(MembershipForm);
