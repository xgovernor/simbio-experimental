"use client";

import FormBuilder from "@/components/ui/FormBuilder";
import { formSchema } from "./blood-requests-form.schema";
import CommunicationIcon from "@/assets/icons/CommunicationIcon";
import CanvasHeader from "@/components/ui/Canvas/CanvasHeader";
import CanvasBreadcrumb from "@/components/ui/Canvas/CanvasBreadcrumb";

const BREADCRUMB_MENU = [
  {
    title: "Home",
    url: "/analytics",
  },
  {
    title: "Requests",
    url: "/requests",
  },
  {
    title: "New",
  },
];

const PageNewBloodRequest = () => {
  function onSubmitHandler(values: Record<string, unknown>): void {
    // setSubmitting(true);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      // setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <CanvasHeader
        title="New blood request"
        icon={<CommunicationIcon className="h-6 w-6" />}
      />
      <CanvasBreadcrumb links={BREADCRUMB_MENU} />

      <section className="flex h-full w-full flex-row flex-nowrap items-start justify-start p-5 max-md:flex-wrap">
        <FormBuilder formSchema={formSchema} onSubmit={onSubmitHandler} />

        <div className="flex h-full w-full max-w-[289px] flex-col flex-nowrap items-start justify-start"></div>
      </section>
    </>
  );
};

export default PageNewBloodRequest;
