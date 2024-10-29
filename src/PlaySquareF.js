import * as React from "react";
const SvgPlaySquareF = ({ title, titleId, ...props }) => (
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m10.126 11.746c.213-.153.397-.348.54-.575.606-.965.365-2.27-.54-2.917L10.07 5.356A1.9 1.9 0 0 0 8.972 5C7.883 5 7 5.941 7 7.102v5.796c0 .417.116.824.334 1.17.607.965 1.832 1.222 2.737.576zm-5.2-4.616 4.055 2.898-4.056 2.897V7.13z" />
  </svg>
);
export default SvgPlaySquareF;