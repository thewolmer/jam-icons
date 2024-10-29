import * as React from "react";
const SvgArrowSquareDown = ({ title, titleId, ...props }) => (
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
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
    <path d="M9 11.586V6a1 1 0 1 1 2 0v5.586l2.536-2.536a1 1 0 0 1 1.414 1.414l-4.243 4.243a.997.997 0 0 1-1.414 0L5.05 10.464A1 1 0 1 1 6.464 9.05z" />
  </svg>
);
export default SvgArrowSquareDown;
