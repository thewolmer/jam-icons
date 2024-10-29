import * as React from "react";
const SvgDices = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11 0a3 3 0 0 1 3 3v3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm6 8H9a1 1 0 0 0-.993.883L8 9v8a1 1 0 0 0 .883.993L9 18h8a1 1 0 0 0 .993-.883L18 17V9a1 1 0 0 0-.883-.993zm-7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-3-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-1.883-9.993L11 2H3a1 1 0 0 0-.993.883L2 3v8a1 1 0 0 0 .883.993L3 12h3V9a3 3 0 0 1 3-3h3V3a1 1 0 0 0-.883-.993M10 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M4.513 8.993a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
  </svg>
);
export default SvgDices;
