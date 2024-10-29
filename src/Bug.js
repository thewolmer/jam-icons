import * as React from "react";
const SvgBug = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 9a1 1 0 0 0-1 1v4a4 4 0 1 0 8 0v-4a1 1 0 0 0-1-1zm8.236-1h1.647V5a1 1 0 1 1 2 0v3a2 2 0 0 1-2 2H16v1h3a1 1 0 0 1 0 2h-3v1h.883a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0v-3h-1.224A6.002 6.002 0 0 1 4.34 16H3v3a1 1 0 0 1-2 0v-3a2 2 0 0 1 2-2h1v-1H1a1 1 0 0 1 0-2h3v-1H3a2 2 0 0 1-2-2V5a1 1 0 1 1 2 0v3h1.764A3 3 0 0 1 6 7.17V5a2 2 0 0 1 2-2h.737c-.343-.598-.988-1-1.726-1H5a1 1 0 1 1 0-2h2.01A3.98 3.98 0 0 1 10 1.348 3.98 3.98 0 0 1 12.99 0H15a1 1 0 0 1 0 2h-2.01c-.74 0-1.384.402-1.727 1H12a2 2 0 0 1 2 2v2.17a3 3 0 0 1 1.236.83M8 7h4V5H8z" />
  </svg>
);
export default SvgBug;
