import * as React from "react";
const SvgGooglePlusSquare = ({ title, titleId, ...props }) => (
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
    <path d="M13.75 9.5V8.25h-.625V9.5h-1.25v.625h1.25v1.25h.625v-1.25H15V9.5zm-5.625 0v1.25h1.768A1.88 1.88 0 0 1 8.125 12a1.877 1.877 0 0 1-1.875-1.875c0-1.034.841-1.875 1.875-1.875.448 0 .88.16 1.214.453l.822-.943A3.1 3.1 0 0 0 8.125 7 3.13 3.13 0 0 0 5 10.125a3.13 3.13 0 0 0 3.125 3.125 3.13 3.13 0 0 0 3.125-3.125V9.5z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgGooglePlusSquare;
