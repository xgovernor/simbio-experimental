import { Card, CardHeader, mergeClasses } from "@fluentui/react-components";
import Image from "next/image";
import { memo } from "react";

type TSupportOrganizationProps = {
  key: string;
  avatar: string;
  title: string;
  location: string;
};

const SupportOrganizationCard: React.FC<TSupportOrganizationProps> = ({
  key,
  avatar,
  title,
  location,
}: TSupportOrganizationProps) => {
  return (
    <Card
      className="max-h-fit w-full max-w-full rounded-md border border-transparent p-4 hover:border-gray-500"
      size="medium"
      key={key}
    >
      <header className="flex flex-row items-center gap-3">
        <Image
          className="h-8 rounded"
          src={avatar}
          alt="Application one logo"
          width={32}
          height={32}
          loading="lazy"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjExOSIgdmlld0JveD0iMCAwIDEyMCAxMTkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ny44NTA4IDc0LjIzNTFDOTYuMDE5NiA3MC42MjE2IDk0LjA1NyA2Ny4xNDMzIDkxLjk3MTcgNjMuODExQzgyLjAzMjQgNzkuMjM4IDY1LjM5MiA5My4wNDE0IDQ0LjMwODUgMTAxLjYyNUw1MS4zNjE4IDExOC45NUM3My4xNjgxIDExMC4wNzMgODkuMzgyOCA5My41NzE1IDk3Ljg1MDggNzQuMjM1MVoiIGZpbGw9IiNGQkJDMDUiLz4KPHBhdGggZD0iTTU0LjcwNzUgOTUuMzYwNEM1Ny41OTE5IDkzLjc1NzIgNjAuMzgxMiA5Mi4wNjc5IDYzLjA2OTIgOTAuMjk5NEM0NC41MjA1IDgxLjQwODggMjcuMzU0OCA2Mi44NDEgMTcuMzIzMyAzOC4yMDE1TDAgNDUuMjU0NEMxMC4zNjk3IDcwLjczMTYgMzEuMTQ5NCA4OC41OTY4IDU0LjcwNzUgOTUuMzYwNFoiIGZpbGw9IiMzNEE4NTMiLz4KPHBhdGggZD0iTTgyLjUwMzggMTcuMzI0NUw3NS40NTA0IDBDNTAuNjM2MiAxMC4xMDI3IDMzLjA1MzIgMzAuMDgxOCAyNS45MDU1IDUyLjg3OTdDMjcuNjM5NiA1NS43MzY3IDI5LjQ2OTcgNTguNDc3MiAzMS4zNzExIDYxLjExODNDNDAuNjAxNCA0My4zMTkyIDU4LjczMTggMjcuMDAyOSA4Mi41MDM4IDE3LjMyNDVaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMTkuNDQxIDczLjI2NjdDMTA5LjgwOSA0OS42MDc5IDkxLjIwNTMgMzIuNTE3OCA2OS43MzYgMjQuNzc4OUM2Ni42MzY1IDI2LjU5NzQgNjMuNjU0MSAyOC41MTMxIDYwLjc5NzUgMzAuNTE5NUM3Ny42MjM0IDQwLjEwNzIgOTIuODg2OCA1Ny42NDkzIDEwMi4xMTcgODAuMzIwMUwxMTkuNDQxIDczLjI2NjdaIiBmaWxsPSIjRUE0MzM1Ii8+CjxwYXRoIGQ9Ik02Mi4yNTgzIDcxLjg3NTlDNjguMjA5NiA3MS44NzU5IDczLjAzNDEgNjcuMDUxNCA3My4wMzQxIDYxLjEwMDFDNzMuMDM0MSA1NS4xNDg3IDY4LjIwOTYgNTAuMzI0MiA2Mi4yNTgzIDUwLjMyNDJDNTYuMzA2OSA1MC4zMjQyIDUxLjQ4MjQgNTUuMTQ4NyA1MS40ODI0IDYxLjEwMDFDNTEuNDgyNCA2Ny4wNTE0IDU2LjMwNjkgNzEuODc1OSA2Mi4yNTgzIDcxLjg3NTlaIiBmaWxsPSIjMTk0QjY3Ii8+Cjwvc3ZnPgo="
        />
        {/* <Image
                    className="h-8 rounded"
                    src={resolveAsset("logo2.svg")}
                    alt="Application two logo"
                    width={32}
                    height={32}
                /> */}
      </header>

      <CardHeader
        header={<h3 className="body1Strong">{title}</h3>}
        description={
          <p className="text-xs leading-5" style={{ color: "rgb(97 97 97)" }}>
            {location}
          </p>
        }
      />

      <footer
        className={mergeClasses(
          "flex flex-row items-center justify-between gap-1",
        )}
      >
        <span>Automated</span>
        <span>3290</span>
      </footer>
    </Card>
  );
};

export default memo(SupportOrganizationCard);
