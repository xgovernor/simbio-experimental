"use client";
import FormBuilder from "@/components/ui/FormBuilder";
import Layout from "@/components/ui/Layout";
// import Alert from "@/components/ui/Alert";
import { memo } from "react";
import { formSchema } from "./fund-form.schema";
import MoneyHandIcon from "@/assets/icons/MoneyHandIcon";

const BREADCRUMB_MENU = [
  {
    title: "Home",
    url: "/analytics",
  },
  {
    title: "Donations",
    url: "funds",
  },
  {
    title: "New",
  },
];

const PageNewMember: React.FC = () => {
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
    <Layout
      breadcrumb={BREADCRUMB_MENU}
      title="New fund"
      icon={<MoneyHandIcon className="h-6 w-6" />}
    >
      <section className="flex h-full w-full flex-row flex-nowrap items-start justify-start p-[22px] max-md:flex-wrap">
        <div className="h-full w-full">
          <div className="h-full w-full max-w-full md:pe-[22px]">
            {/* Alerts Area */}
            <div className="h-full w-full">
              {/* <Alert title="New member added" /> */}
            </div>

            <FormBuilder formSchema={formSchema} onSubmit={onSubmitHandler} />
          </div>
        </div>
        <div className="flex h-full w-full max-w-[289px] flex-col flex-nowrap items-start justify-start"></div>
      </section>
    </Layout>
  );
};

export default memo(PageNewMember);
