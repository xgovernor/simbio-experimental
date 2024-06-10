import React from "react";

const CheckmarkCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-1.25 9.94 4.47-4.47a.75.75 0 0 1 1.13.98l-.07.08-5 5a.75.75 0 0 1-.98.07l-.08-.07-2.5-2.5a.75.75 0 0 1 .98-1.13l.08.07 1.97 1.97 4.47-4.47-4.47 4.47Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CheckmarkCircleIcon;