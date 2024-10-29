import * as React from "react";
const SvgGlassFilledF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6 18v-6.07A7.002 7.002 0 0 1 2.101 0h9.798A7.002 7.002 0 0 1 8 11.93V18h2a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zM2 5h10q-.357-2.145-1-3H3q-.643.855-1 3" />
  </svg>
);
export default SvgGlassFilledF;
