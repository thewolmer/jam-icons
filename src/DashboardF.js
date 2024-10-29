import * as React from "react";
const SvgDashboardF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.832 14.565a10 10 0 0 1-.832-4c0-5.523 4.477-10 10-10s10 4.477 10 10a10 10 0 0 1-.832 4zm9.168-9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5-3a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1" />
  </svg>
);
export default SvgDashboardF;
