import * as React from "react";
const SvgFlickr = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -7 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={4.727} cy={4.757} r={4.727} />
    <circle cx={15.255} cy={4.757} r={4.727} />
  </svg>
);
export default SvgFlickr;
