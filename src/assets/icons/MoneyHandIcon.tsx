import React from "react";

const MoneyHandIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 2C5.01 2 4 3 4 4.25v15.5C4 20.99 5 22 6.25 22h7.5c1.24 0 2.24-1 2.25-2.23v-1.52a.75.75 0 0 0-.75-.75c-.45 0-.74-.12-.94-.28-.2-.17-.38-.43-.5-.79a8.4 8.4 0 0 1-.3-2.68.75.75 0 0 0-.21-.51l-.17-.18-.17-.17-1.18-1.17a3 3 0 0 1-.81-1.17.62.62 0 0 1-.02-.32c.02-.09.08-.2.2-.33a.7.7 0 0 1 .33-.2.61.61 0 0 1 .32.02c.3.08.7.34 1.17.81l1.51 1.5c.76.75 1.38 1.36 1.72 1.73a.75.75 0 0 0 1.1-1.02L16 11.42V8.06l2.84 2.84c.42.42.66 1 .66 1.6v8.75a.75.75 0 0 0 1.5 0v-8.76c0-1-.4-1.95-1.1-2.65L16 5.94V4.25C16 3.01 15 2 13.75 2h-7.5Zm6.14 14.94c.1.27.22.53.39.78a2.25 2.25 0 0 0-1.28 2.03v.75h-3v-.75c0-1.24-1-2.25-2.25-2.25H5.5v-11h.75c1.24 0 2.25-1 2.25-2.25V3.5h3v.75c0 1.24 1 2.25 2.25 2.25h.75v3.44l-.47-.47c-.53-.53-1.15-1-1.82-1.2a2.1 2.1 0 0 0-1.74.26 3.5 3.5 0 1 0 1.55 6.32c.04.69.13 1.43.37 2.09ZM8 12a2 2 0 0 1 1.46-1.93c-.05.3-.02.6.06.89.2.67.67 1.29 1.2 1.82l.67.66A2 2 0 0 1 8 12ZM5.5 4.25c0-.41.34-.75.75-.75H7v.75c0 .41-.34.75-.75.75H5.5v-.75ZM13 3.5h.75c.41 0 .75.34.75.75V5h-.75a.75.75 0 0 1-.75-.75V3.5ZM14.5 19v.75c0 .41-.34.75-.75.75H13v-.75c0-.41.34-.75.75-.75h.75ZM7 20.5h-.75a.75.75 0 0 1-.75-.75V19h.75c.41 0 .75.34.75.75v.75Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default MoneyHandIcon;