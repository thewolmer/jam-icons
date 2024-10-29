import * as React from "react";
const SvgArrowDownRight = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6.5 -6.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.9 7.485V1.9a1 1 0 0 1 2 0v8a.997.997 0 0 1-1 1h-8a1 1 0 1 1 0-2h5.585L.707 2.121A1 1 0 0 1 2.121.707z" />
  </svg>
);
export default SvgArrowDownRight;
