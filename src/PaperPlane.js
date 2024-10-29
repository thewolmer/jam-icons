import * as React from "react";
const SvgPaperPlane = ({ title, titleId, ...props }) => (
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
    <path d="m16.907 4.44-7.655 7.655q.341.489.575 1.048l1.91 4.599 5.17-13.303zm-9.002 6.308 7.656-7.656-13.303 5.17 4.599 1.911a5.5 5.5 0 0 1 1.048.575m11.618-7.862-6.027 15.506c-.38.98-1.477 1.483-2.449 1.124a1.83 1.83 0 0 1-1.057-1.017L8.08 13.9a3.66 3.66 0 0 0-1.98-1.98l-4.6-1.91C.546 9.613.11 8.51.528 7.544a1.95 1.95 0 0 1 1.08-1.04L17.114.475a1.852 1.852 0 0 1 2.41 2.41z" />
  </svg>
);
export default SvgPaperPlane;
