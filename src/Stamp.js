import * as React from "react";
const SvgStamp = ({ title, titleId, ...props }) => (
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
    <path d="M18 18v-2H2v2zM7 14V9a5 5 0 1 1 6 0v5h5a2 2 0 0 1 2 2v4H0v-4a2 2 0 0 1 2-2zm4 0V8.001l.799-.6a3 3 0 1 0-3.598 0l.799.6V14z" />
  </svg>
);
export default SvgStamp;
