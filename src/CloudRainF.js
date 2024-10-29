import * as React from "react";
const SvgCloudRainF = ({ title, titleId, ...props }) => (
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
    <path d="M13 0a7 7 0 0 1 0 14H5a5 5 0 1 1 1.561-9.751A7 7 0 0 1 13 0" />
    <rect width={2} height={4} x={5} y={15} rx={1} />
    <rect width={2} height={5} x={9} y={15} rx={1} />
    <rect width={2} height={3} x={13} y={15} rx={1} />
  </svg>
);
export default SvgCloudRainF;
