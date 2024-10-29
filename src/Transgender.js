import * as React from "react";
const SvgTransgender = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 14A5 5 0 1 0 7 4a5 5 0 0 0 0 10m6.013-8.586A7.002 7.002 0 0 1 7.998 15.93L8 16v1h1a1 1 0 0 1 0 2H8v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1v-1q0-.036.002-.07A7.002 7.002 0 0 1 7 2a6.98 6.98 0 0 1 4.745 1.853l1.85-1.85H12.01a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3.417z" />
  </svg>
);
export default SvgTransgender;
