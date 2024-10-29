import * as React from "react";
const SvgMedium = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.372 3.264a.78.78 0 0 0-.252-.658L.252.339V0H6.05l4.482 9.905L14.472 0H20v.339L18.403 1.88a.47.47 0 0 0-.177.452v11.334a.47.47 0 0 0 .177.452l1.56 1.542V16H12.12v-.339l1.615-1.58c.159-.16.159-.207.159-.451V4.468L9.402 15.962h-.606L3.566 4.468v7.704c-.043.324.064.65.29.884l2.101 2.568v.338H0v-.338l2.1-2.568a1.03 1.03 0 0 0 .272-.884z" />
  </svg>
);
export default SvgMedium;
