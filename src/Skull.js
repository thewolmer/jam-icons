import * as React from "react";
const SvgSkull = ({ title, titleId, ...props }) => (
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
    <path d="M11 18h2a1 1 0 0 0 1-1v-2.07l1.065-.563A5.5 5.5 0 0 0 18 9.5v-2A5.5 5.5 0 0 0 12.5 2h-5A5.5 5.5 0 0 0 2 7.5v2a5.5 5.5 0 0 0 2.935 4.867L6 14.93V17a1 1 0 0 0 1 1h2v-2a1 1 0 0 1 2 0zm5-1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-.865A7.5 7.5 0 0 1 0 9.5v-2A7.5 7.5 0 0 1 7.5 0h5A7.5 7.5 0 0 1 20 7.5v2a7.5 7.5 0 0 1-4 6.635zM6 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4m8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgSkull;
