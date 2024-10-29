import * as React from "react";
const SvgEjectSquareF = ({ title, titleId, ...props }) => (
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m7.746 5.413a2 2 0 0 0-.575-.54c-.965-.606-2.27-.365-2.917.54L5.356 9.468A1.9 1.9 0 0 0 5 10.567c0 1.089.941 1.972 2.102 1.972h5.796c.417 0 .824-.116 1.17-.334.965-.607 1.222-1.832.576-2.737zM6 13.54a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm1.102-2.972L10 6.512l2.898 4.055z" />
  </svg>
);
export default SvgEjectSquareF;
