import * as React from "react";
const SvgSetBackwardSquare = ({ title, titleId, ...props }) => (
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3.514 9.836V14a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v2.164l3.93-2.808A1.9 1.9 0 0 1 12.542 5c1.09 0 1.972.941 1.972 2.102v5.796c0 .417-.116.824-.334 1.17-.606.965-1.832 1.222-2.736.576zm5.028-4.734L8.487 10l4.055 2.898z" />
  </svg>
);
export default SvgSetBackwardSquare;