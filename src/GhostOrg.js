import * as React from "react";
const SvgGhostOrg = ({ title, titleId, ...props }) => (
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
    <path d="M.049 15.31H7.89v3.774H.049zm11.76 0h7.836v3.774h-7.836zM.043 7.762h19.604v3.774H.043zM.049.214h11.762v3.774H.049zm15.681 0h3.92v3.774h-3.92z" />
  </svg>
);
export default SvgGhostOrg;
