import * as React from "react";
const SvgCalendarAltF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3v2a2 2 0 1 0 4 0V2h1v2a2 2 0 1 0 4 0V2h1v2a2 2 0 1 0 4 0zM3 8v2h2V8zm0 4v2h2v-2zm12 0v2h2v-2zm0-4v2h2V8zM7 8v2h2V8zm4 0v2h2V8zm0 4v2h2v-2zm-4 0v2h2v-2zM5 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m-5 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgCalendarAltF;
