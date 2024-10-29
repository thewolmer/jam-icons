import * as React from "react";
const SvgSetBackwardCircle = ({ title, titleId, ...props }) => (
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-2.486-6.164V14a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v2.164l3.93-2.808A1.9 1.9 0 0 1 12.542 5c1.09 0 1.972.941 1.972 2.102v5.796c0 .417-.116.824-.334 1.17-.606.965-1.832 1.222-2.736.576zm5.028-4.734L8.487 10l4.055 2.898z" />
  </svg>
);
export default SvgSetBackwardCircle;
