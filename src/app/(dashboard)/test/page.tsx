import Link from "next/link";
import { memo } from "react";
import Layout from "@/components/ui/Layout";

const PageAbout: React.FC = () => {
  return (
    <Layout>
      <div
        className="mx-auto flex h-full w-1/3 flex-col flex-nowrap items-center justify-center p-5"
        style={{
          minHeight: "calc(100vh - 92px)",
        }}
      >
        <h2 className="text-xl font-medium">Server Error</h2>

        <p className="mt-2 text-center text-xs">
          Something went wrong. Please try again later.
        </p>

        <p className="relative mt-6 text-xs">
          <Link
            className="font-medium hover:underline"
            href="https://at-mah.vercel.app"
          >
            Retun to Dashboard
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default memo(PageAbout);
