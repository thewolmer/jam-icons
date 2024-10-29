import * as React from "react";
const SvgBackwardSquareF = ({ title, titleId, ...props }) => (
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
    <path d="M10.973 6.754a2.2 2.2 0 0 0-.307-.822c-.607-.965-1.832-1.222-2.737-.576L3.874 8.254a2 2 0 0 0-.54.575c-.606.965-.365 2.27.54 2.917l4.055 2.898A1.9 1.9 0 0 0 9.028 15c.978 0 1.79-.759 1.945-1.754l1.956 1.398a1.9 1.9 0 0 0 1.099.356C15.117 15 16 14.059 16 12.898V7.102c0-.417-.116-.824-.334-1.17-.607-.965-1.832-1.222-2.737-.576zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m10.052 7.114v5.795l-3.02-2.158-.004-1.476zm-4.97 0v5.795l-4.054-2.897z" />
  </svg>
);
export default SvgBackwardSquareF;
