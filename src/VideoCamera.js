import * as React from "react";
const SvgVideoCamera = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm9.98 1.605L16 1.585A2 2 0 0 1 17.414 1H18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-.586A2 2 0 0 1 16 10.414l-2.02-2.019A4 4 0 0 1 10 12H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h6a4 4 0 0 1 3.98 3.605M17.415 9H18V3h-.586l-3 3zM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </svg>
);
export default SvgVideoCamera;
