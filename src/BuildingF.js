import * as React from "react";
const SvgBuildingF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9 20v-3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3H0V3a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v17zM4 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm4-9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgBuildingF;
