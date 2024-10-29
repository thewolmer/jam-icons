import * as React from "react";
const SvgArrowUpLeft = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -6.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.757 3.828v5.586a1 1 0 0 1-2 0v-8a.997.997 0 0 1 1-1h8a1 1 0 1 1 0 2H4.172l6.778 6.778a1 1 0 1 1-1.414 1.415z" />
  </svg>
);
export default SvgArrowUpLeft;
