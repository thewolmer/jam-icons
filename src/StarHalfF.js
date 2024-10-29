import * as React from "react";
const SvgStarHalfF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.989 0 10 .024V15.76l-.011-.006L3.815 19l1.179-6.874L0 7.257l6.902-1.003z" />
  </svg>
);
export default SvgStarHalfF;
