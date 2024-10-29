import * as React from "react";
const SvgSetForwardCircleF = ({ title, titleId, ...props }) => (
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
    <path d="M12.514 11.836V14a1 1 0 0 0 2 0V6a1 1 0 1 0-2 0v2.164L8.585 5.356A1.9 1.9 0 0 0 7.487 5c-1.09 0-1.973.941-1.973 2.102v5.796c0 .417.117.824.335 1.17.606.965 1.831 1.222 2.736.576l3.93-2.808zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10M7.355 7.08l4.055 2.898-4.055 2.898z" />
  </svg>
);
export default SvgSetForwardCircleF;