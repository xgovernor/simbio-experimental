import { memo } from "react";

const DASHBOARD_STATS = [
  [
    {
      title: "Total Blood",
      value: "500bag",
    },
    {
      title: "Funds Raised",
      value: "$84,000",
    },
  ],
  [
    {
      title: "Donors",
      value: "500",
    },
    {
      title: "Members",
      value: "1000",
    },
  ],
  [
    {
      title: "Collaborations",
      value: "150",
    },
    {
      title: "Volunteers",
      value: "50",
    },
  ],
];

const DashboadHeaderStats = () => {
  return (
    <div className="card grid grid-cols-3 divide-y rounded-sm border bg-[#F4F4F4] sm:divide-x sm:divide-y-0">
      {DASHBOARD_STATS.map((stats, i) => (
        <div className="flex flex-col justify-between gap-2 p-5" key={i}>
          {stats.map((stat, j) => (
            <Stat key={j} {...stat} />
          ))}
        </div>
      ))}
    </div>
  );
};

const Stat = ({
  className,
  title,
  value,
}: {
  className?: any;
  title: string;
  value: string | number;
}) => (
  <div className={className}>
    <p className="mb-1 text-xs font-medium text-gray-800">{title}</p>

    <p className="text- deep-purple-accent-400 text-lg font-bold">{value}</p>
  </div>
);

export default memo(DashboadHeaderStats);
