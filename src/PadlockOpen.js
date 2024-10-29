import * as React from "react";
const SvgPadlockOpen = ({ title, titleId, ...props }) => (
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
    <path d="M2 12v6h10v-6zm8-7a3 3 0 1 0-6 0v5h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2V5a5 5 0 1 1 10 0 1 1 0 0 1-2 0M7 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgPadlockOpen;
