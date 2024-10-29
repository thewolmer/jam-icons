import * as React from "react";
const SvgArrowSquareDownF = ({ title, titleId, ...props }) => (
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
    <path d="M9.293 14.707a.997.997 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414L11 11.586V6a1 1 0 0 0-2 0v5.586L6.464 9.05a1 1 0 1 0-1.414 1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgArrowSquareDownF;
