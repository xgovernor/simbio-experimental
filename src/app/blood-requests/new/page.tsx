"use client";
import BloodRequestForm from "@/components/blood-request/BloodRequestForm";
import Layout from "@/components/ui/Layout";
// import Alert from "@/components/ui/Alert";
import { PeopleAdd24Regular } from "@fluentui/react-icons";
import { memo } from "react";

const BREADCRUMB_MENU = [
  {
    title: "Home",
    url: "/dashboard",
  },
  {
    title: "Requests",
    url: "/requests",
  },
  {
    title: "New",
  },
];

const PageNewBloodRequest: React.FC = () => {
  return (
    <Layout
      breadcrumb={BREADCRUMB_MENU}
      title="Add new request"
      icon={<PeopleAdd24Regular />}
    >
      <section
        style={{
          width: "100%",
          height: "100%",
          padding: "22px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "100%",
              paddingRight: "22px",
            }}
          >
            {/* Alerts Area */}
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {/* <Alert title="New member added" /> */}
            </div>

            <BloodRequestForm />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "289px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "start",
            justifyContent: "start",
          }}
        ></div>
      </section>
    </Layout>
  );
};

export default memo(PageNewBloodRequest);
