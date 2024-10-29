import * as React from "react";
const SvgCoinF = ({ title, titleId, ...props }) => (
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
    <path d="M9 13.858h-.051A.95.95 0 0 1 8 12.909a1 1 0 1 0-2 0 2.95 2.95 0 0 0 2.949 2.949H9v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 0-6v-2h.022c.54 0 .978.438.978.978a1 1 0 0 0 2 0 2.98 2.98 0 0 0-2.978-2.978H11v-1a1 1 0 0 0-2 0v1a3 3 0 1 0 0 6zm2 0v-2a1 1 0 0 1 0 2m-2-6v2a1 1 0 1 1 0-2m1 13c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgCoinF;
