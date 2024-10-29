import * as React from "react";
const SvgRulerF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m16.757 9.243-1.414 1.414-2.828-2.829A1 1 0 1 0 11.1 9.243l2.828 2.828-1.414 1.414-2.122-2.121a1 1 0 1 0-1.414 1.414l2.122 2.121-1.415 1.415-2.828-2.829A1 1 0 0 0 5.444 14.9l2.828 2.829-1.414 1.414a2 2 0 0 1-2.829 0l-2.828-2.828a2 2 0 0 1 0-2.829L13.929.757a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-1.414 1.414-2.122-2.12a1 1 0 1 0-1.414 1.413z" />
  </svg>
);
export default SvgRulerF;
