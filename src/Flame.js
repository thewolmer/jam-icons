import * as React from "react";
const SvgFlame = ({ title, titleId, ...props }) => (
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
    <path d="M5.652 5.594q-.242.291-.424.522-.37.473-.7.922C2.813 9.383 2 11.204 2 12.381 2 15.461 4.665 18 8 18s6-2.538 6-5.619c0-1.888-1.97-5.13-5.972-9.453-1.192 1.307-1.988 2.2-2.376 2.666M8 20c-4.418 0-8-3.411-8-7.619q0-2.54 2.914-6.523a28 28 0 0 1 1.202-1.545Q4.952 3.311 8 0q8 8.174 8 12.381C16 16.589 12.418 20 8 20m0-3c-2.21 0-4-1.706-4-3.81Q4 11.087 8 7q4 4.087 4 6.19C12 15.294 10.21 17 8 17m-2-3.81c0 .977.874 1.81 2 1.81s2-.833 2-1.81c0-.537-.654-1.675-2-3.24-1.346 1.565-2 2.703-2 3.24" />
  </svg>
);
export default SvgFlame;
