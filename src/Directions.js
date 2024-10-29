import * as React from "react";
const SvgDirections = ({ title, titleId, ...props }) => (
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
    <path d="M2 3v4h12.98l2.853-1.714a.333.333 0 0 0 0-.572L14.98 3zm6-2a1 1 0 1 1 2 0h4.98a2 2 0 0 1 1.03.286L18.863 3a2.333 2.333 0 0 1 0 4L16.01 8.714A2 2 0 0 1 14.98 9H10v1h7.995a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H10v1a1 1 0 0 1-2 0v-1H5.015a2 2 0 0 1-1.03-.286L1.132 16a2.333 2.333 0 0 1 0-4l2.853-1.714A2 2 0 0 1 5.015 10H8V9H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm9.995 11H5.015l-2.853 1.714a.333.333 0 0 0 0 .572L5.015 16h12.98z" />
  </svg>
);
export default SvgDirections;
