import * as React from "react";
const SvgOperaSquare = ({ title, titleId, ...props }) => (
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
    <path d="M12.713 5.787c-.749-.506-1.676-.786-2.721-.786-.956 0-1.813.233-2.526.66C6.093 6.476 5.248 8 5.248 9.953 5.248 12.594 7.145 15 9.991 15s4.742-2.406 4.742-5.048c0-1.857-.764-3.326-2.02-4.166zm-2.721.147c1.526 0 1.896 2.095 1.896 3.997 0 1.764-.232 4.123-1.878 4.123S8.092 11.672 8.092 9.91c0-1.903.373-3.975 1.9-3.975z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgOperaSquare;
