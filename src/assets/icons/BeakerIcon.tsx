import React from "react";

const BeakerIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 4.5h1v6.24c0 .37-.1.74-.27 1.07l-3.59 6.6A1.75 1.75 0 0 0 6.68 21h10.64a1.75 1.75 0 0 0 1.54-2.59l-3.59-6.6c-.18-.33-.27-.7-.27-1.07V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5Zm2.5 6.24V4.5h3v6.24c0 .62.16 1.24.45 1.79l.8 1.47h-5.5l.8-1.47c.3-.55.45-1.17.45-1.8ZM8.43 15.5h7.14l1.97 3.63a.25.25 0 0 1-.22.37H6.68a.25.25 0 0 1-.22-.37l1.97-3.63Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BeakerIcon;