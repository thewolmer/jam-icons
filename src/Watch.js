import * as React from "react";
const SvgWatch = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9 10h2a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0zM4 4.07V3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1.07A8 8 0 0 1 16 11a8 8 0 0 1-4 6.93V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.07A8 8 0 0 1 0 11a8 8 0 0 1 4-6.93m2-.818A8 8 0 0 1 8 3c.69 0 1.36.088 2 .252V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 15.496V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.252a8.05 8.05 0 0 1-4 0M8 17A6 6 0 1 0 8 5a6 6 0 0 0 0 12" />
  </svg>
);
export default SvgWatch;