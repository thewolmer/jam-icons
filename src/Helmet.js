import * as React from "react";
const SvgHelmet = ({ title, titleId, ...props }) => (
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
    <path d="M15 18h2a1 1 0 0 0 1-1v-2h-3zm-2-8a3 3 0 0 0-3 3h3zm2 0v3h5v4a3 3 0 0 1-3 3h-4v-5h-3v5q-.67-.017-1-.05c-5.053-.5-9-4.764-9-9.95C0 4.477 4.477 0 10 0c5.178 0 9.437 3.936 9.949 8.98q.034.335.051 1.02zm-7 3a5 5 0 0 1 5-5h4.749A8.006 8.006 0 0 0 10 2a8 8 0 0 0-8 8 8.006 8.006 0 0 0 6 7.749zm-2-3a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgHelmet;
