"use client";

import FormBuilder from "@/components/ui/FormBuilder";
import { memo } from "react";
import { formSchema } from "./collection-center-form.schema";
import BuildingTownHouseIcon from "@/assets/icons/BuildingTownHouseIcon";
import CanvasHeader from "@/components/ui/Canvas/CanvasHeader";
import CanvasBreadcrumb from "@/components/ui/Canvas/CanvasBreadcrumb";

const BREADCRUMB_MENU = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Collection centers",
    url: "/collection-centers",
  },
  {
    title: "New",
  },
];

const PageRootComponent = () => {
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
        title="New collection center"
        icon={<BuildingTownHouseIcon className="h-6 w-6" />}
      />
      <CanvasBreadcrumb links={BREADCRUMB_MENU} />

      <section className="flex h-full w-full flex-row flex-nowrap items-start justify-start p-5 max-md:flex-wrap">
        <div className="h-full w-full">
          <div className="h-full w-full max-w-full md:pe-5">
            {/* Alerts Area */}
            <div className="h-full w-full">
              {/* <Alert title="New member added" /> */}
            </div>

            <FormBuilder formSchema={formSchema} onSubmit={onSubmitHandler} />
          </div>
        </div>
        <div className="flex h-full w-full max-w-[289px] flex-col flex-nowrap items-start justify-start"></div>
      </section>
    </>
  );
};

export default memo(PageRootComponent);
