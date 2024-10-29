import * as React from "react";
const SvgPatreonSquare = ({ title, titleId, ...props }) => (
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
    <path d="M11.464 5.206c-1.976 0-3.583 1.598-3.583 3.563 0 1.958 1.607 3.551 3.583 3.551 1.969 0 3.57-1.593 3.57-3.551a3.57 3.57 0 0 0-3.57-3.563m-6.38 9.49v-9.49h1.752v9.49z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgPatreonSquare;
