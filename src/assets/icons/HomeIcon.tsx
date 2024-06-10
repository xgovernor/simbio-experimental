import React from "react";

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.55 2.53c.84-.7 2.06-.7 2.9 0l6.75 5.7c.5.42.8 1.05.8 1.71v9.31c0 .97-.78 1.75-1.75 1.75h-3.5c-.97 0-1.75-.78-1.75-1.75v-5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5c0 .97-.78 1.75-1.75 1.75h-3.5C3.78 21 3 20.22 3 19.25v-9.3c0-.67.3-1.3.8-1.73l6.75-5.69Zm1.93 1.15a.75.75 0 0 0-.96 0l-6.75 5.7a.75.75 0 0 0-.27.56v9.31c0 .14.11.25.25.25h3.5c.14 0 .25-.1.25-.25v-5c0-.97.78-1.75 1.75-1.75h3.5c.97 0 1.75.78 1.75 1.75v5c0 .14.11.25.25.25h3.5c.14 0 .25-.1.25-.25v-9.3c0-.23-.1-.44-.27-.58l-6.75-5.7Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default HomeIcon;