import * as React from "react";
const SvgSkullF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16 17.858a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-.865a7.5 7.5 0 0 1-4-6.635v-2a7.5 7.5 0 0 1 7.5-7.5h5a7.5 7.5 0 0 1 7.5 7.5v2a7.5 7.5 0 0 1-4 6.635zm-10-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-4 4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1" />
  </svg>
);
export default SvgSkullF;
