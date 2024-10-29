import * as React from "react";
const SvgFolderOpenF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 5V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2H17a3 3 0 0 1 3 3zm0 2h20v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3z" />
  </svg>
);
export default SvgFolderOpenF;
