import * as React from "react";
const SvgEggsF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6 17a6 6 0 0 1-6-6c0-3.314 3-9 6-9s6 5.686 6 9a6 6 0 0 1-6 6m6.612-2.161A5.98 5.98 0 0 0 14 11c0-2.518-1.732-6.405-3.88-8.127C11.213 1.227 12.607 0 14 0c3 0 6 5.686 6 9a6 6 0 0 1-7.388 5.839" />
  </svg>
);
export default SvgEggsF;
