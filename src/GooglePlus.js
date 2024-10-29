import * as React from "react";
const SvgGooglePlus = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -5.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.5 5V2.5h-1.25V5h-2.5v1.25h2.5v2.5h1.25v-2.5H20V5zM6.25 5v2.5h3.536A3.76 3.76 0 0 1 6.25 10 3.755 3.755 0 0 1 2.5 6.25 3.755 3.755 0 0 1 6.25 2.5c.896 0 1.759.321 2.429.905L10.32 1.52A6.2 6.2 0 0 0 6.25 0 6.257 6.257 0 0 0 0 6.25a6.257 6.257 0 0 0 6.25 6.25 6.257 6.257 0 0 0 6.25-6.25V5z" />
  </svg>
);
export default SvgGooglePlus;