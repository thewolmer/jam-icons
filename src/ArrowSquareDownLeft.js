import * as React from "react";
const SvgArrowSquareDownLeft = ({ title, titleId, ...props }) => (
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
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
    <path d="m8.172 10.414 3.95-3.95a1 1 0 1 1 1.414 1.415l-3.95 3.95h3.586a1 1 0 0 1 0 2h-6a.997.997 0 0 1-1-1v-6a1 1 0 1 1 2 0z" />
  </svg>
);
export default SvgArrowSquareDownLeft;
