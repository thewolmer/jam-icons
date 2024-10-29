import * as React from "react";
const SvgScrewdriver = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.343 18.071a1 1 0 0 1 0 1.414L3.93 20.9a1 1 0 0 1-1.414 0L1.1 19.485a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 0L9.586 11a2 2 0 0 1 0-2.828l7.07-7.071a2 2 0 0 1 2.83 0l1.413 1.414a2 2 0 0 1 0 2.828l-7.07 7.071a2 2 0 0 1-2.829 0zM12.414 11l7.071-7.071-1.414-1.414L11 9.585z" />
  </svg>
);
export default SvgScrewdriver;
