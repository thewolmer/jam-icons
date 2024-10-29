import * as React from "react";
const SvgWatchF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 10V7a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2zm3-5.93A7.96 7.96 0 0 0 6 3c-1.457 0-2.823.39-4 1.07V3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3zm0 13.86V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1.07A7.96 7.96 0 0 0 6 19c1.457 0 2.823-.39 4-1.07M6 17A6 6 0 1 1 6 5a6 6 0 0 1 0 12" />
  </svg>
);
export default SvgWatchF;
