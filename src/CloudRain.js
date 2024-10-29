import * as React from "react";
const SvgCloudRain = ({ title, titleId, ...props }) => (
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
    <path d="M5 14a5 5 0 1 1 1.561-9.751A7.002 7.002 0 0 1 20 7a7 7 0 0 1-7 7zm0-2h8a5 5 0 1 0-4.6-6.965l-.72 1.686-1.742-.572A3 3 0 1 0 5 12m1 3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgCloudRain;
