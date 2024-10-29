import * as React from "react";
const SvgMoveAlt = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.586 2H11a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3.414L9.414 8 14 12.586V11a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h1.586L8 9.414 3.414 14H5a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v1.586L6.586 8 2 3.414V5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H3.414L8 6.586z" />
  </svg>
);
export default SvgMoveAlt;
