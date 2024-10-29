import * as React from "react";
const SvgArrowSquareRightF = ({ title, titleId, ...props }) => (
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
    <path d="M14.707 10.707a.997.997 0 0 0 0-1.414L10.464 5.05A1 1 0 0 0 9.05 6.464L11.586 9H6a1 1 0 1 0 0 2h5.586L9.05 13.536a1 1 0 0 0 1.414 1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgArrowSquareRightF;
