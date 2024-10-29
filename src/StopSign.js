import * as React from "react";
const SvgStopSign = ({ title, titleId, ...props }) => (
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
    <path d="M5.094 16.32A8 8 0 0 0 16.32 5.094zM3.68 14.906 14.906 3.68A8 8 0 0 0 3.68 14.906M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgStopSign;
