import * as React from "react";
const SvgTumblrSquare = ({ title, titleId, ...props }) => (
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
    <path d="M12.441 12.953s-.307.34-.89.34c-.584 0-.845-.34-.845-.845V9.59h1.887V7.857h-1.887V5H9.285C9.062 6.282 8.187 7.35 7 7.874V9.59h1.386v3.291c0 .457.446 2.119 2.72 2.119 1.335 0 1.888-.83 1.888-.83z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgTumblrSquare;