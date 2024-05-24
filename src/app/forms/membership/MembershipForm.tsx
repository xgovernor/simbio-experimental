"use client";
import { memo } from "react";
import { formSchema } from "./membership-form.schema";
import FormBuilder from "@/components/ui/FormBuilder";

const MembershipForm = ({
  className,
}: {
  className?: string;
  children?: React.ReactNode;
  rest?: object;
}) => {
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

  return (
    <div className={className}>
      <FormBuilder formSchema={formSchema} onSubmit={onSubmitHandler} />
    </div>
  );
};

export default memo(MembershipForm);
