import * as React from "react";
const SvgSignal = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1 10a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m4-4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1m4-4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m4-2a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgSignal;
