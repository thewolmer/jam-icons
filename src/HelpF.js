import * as React from "react";
const SvgHelpF = ({ title, titleId, ...props }) => (
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
    <path d="M10 20.393c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.478 10 10-4.477 10-10 10m1.276-8.218.394-.308a3.5 3.5 0 1 0-4.31-5.516l-.394.308a1 1 0 1 0 1.231 1.576l.394-.308a1.5 1.5 0 0 1 1.847 2.364l-.394.308a1 1 0 1 0 1.232 1.576M10 15.393a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgHelpF;
