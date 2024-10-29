import * as React from "react";
const SvgPictureEdit = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 13V9a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0V3a1 1 0 1 1-2 0 3 3 0 0 1 3-3 1 1 0 1 1 0 2h4a1 1 0 1 1 0-2h3a1 1 0 0 1 0 2h4a1 1 0 0 1 0-2h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3 1 1 0 0 1 2 0m16-4.497V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.504l4.39-7.322a3 3 0 0 1 4.69-.582zm0 2.823-3.828-3.814a1 1 0 0 0-1.563.195L8.836 14H17a1 1 0 0 0 1-1zM6 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgPictureEdit;
