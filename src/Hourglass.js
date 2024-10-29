import * as React from "react";
const SvgHourglass = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 2v4a3 3 0 1 0 6 0V2zm8 16a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2v-4a4.99 4.99 0 0 1 2-4 5 5 0 0 1-2-4V2a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2v4a5 5 0 0 1-2 4 4.99 4.99 0 0 1 2 4zm-2 0v-4a3 3 0 0 0-6 0v4z" />
  </svg>
);
export default SvgHourglass;
