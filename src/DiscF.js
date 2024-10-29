import * as React from "react";
const SvgDiscF = ({ title, titleId, ...props }) => (
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m7-10a6.99 6.99 0 0 0-2.8-5.6L13 6a4.99 4.99 0 0 1 2 4 5 5 0 0 1-2 4l.58.87.53.796A6.99 6.99 0 0 0 17 10m-7 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </svg>
);
export default SvgDiscF;
