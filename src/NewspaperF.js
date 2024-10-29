import * as React from "react";
const SvgNewspaperF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
  </svg>
);
export default SvgNewspaperF;
