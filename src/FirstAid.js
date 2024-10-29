import * as React from "react";
const SvgFirstAid = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm2-2V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm2 0h6V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1zm2 4h2v6H9zm-2 2h6v2H7z" />
  </svg>
);
export default SvgFirstAid;
