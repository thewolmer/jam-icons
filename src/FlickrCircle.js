import * as React from "react";
const SvgFlickrCircle = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={7.364} cy={10.379} r={2.364} />
    <circle cx={12.628} cy={10.379} r={2.364} />
    <path d="M10 18.494a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c-5.523 0-10-4.478-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgFlickrCircle;
