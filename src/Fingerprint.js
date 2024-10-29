import * as React from "react";
const SvgFingerprint = ({ title, titleId, ...props }) => (
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
    <path d="M2 7a1 1 0 1 1-2 0 7 7 0 1 1 14 0v2a1 1 0 0 1-2 0V7A5 5 0 1 0 2 7m3 3a1 1 0 0 1-2 0V7a4 4 0 1 1 8 0 1 1 0 0 1-2 0 2 2 0 1 0-4 0zm-2 3a1 1 0 0 1 2 0 2 2 0 1 0 4 0v-3a1 1 0 1 1 2 0v3a4 4 0 1 1-8 0m3-5a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0zm-6 3a1 1 0 0 1 2 0v2a5 5 0 0 0 10 0 1 1 0 0 1 2 0 7 7 0 0 1-14 0z" />
  </svg>
);
export default SvgFingerprint;
