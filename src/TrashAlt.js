import * as React from "react";
const SvgTrashAlt = ({ title, titleId, ...props }) => (
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
    <path d="m14.833 5-.728 13.11A2 2 0 0 1 12.108 20H3.892a2 2 0 0 1-1.997-1.89L1.167 5H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1zM12.83 5H3.17l.722 13h8.216zM2 2v1h12V2zm4 5a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgTrashAlt;
