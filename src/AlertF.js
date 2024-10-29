import * as React from "react";
const SvgAlertF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 20.393c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.478 10 10-4.477 10-10 10m0-15a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgAlertF;