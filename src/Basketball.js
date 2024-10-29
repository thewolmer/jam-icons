import * as React from "react";
const SvgBasketball = ({ title, titleId, ...props }) => (
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
    <path d="M11 17.938a7.97 7.97 0 0 0 4.115-1.787A9.95 9.95 0 0 1 13.05 11H11zm-2 0V11H6.95a9.95 9.95 0 0 1-2.065 5.151A7.97 7.97 0 0 0 9 17.938M6.95 9H9V2.062a7.97 7.97 0 0 0-4.115 1.787A9.95 9.95 0 0 1 6.95 9M11 2.062V9h2.05a9.95 9.95 0 0 1 2.065-5.151A7.97 7.97 0 0 0 11 2.062M4.938 11H2.062A7.96 7.96 0 0 0 3.5 14.666 7.96 7.96 0 0 0 4.938 11M2.062 9h2.876A7.96 7.96 0 0 0 3.5 5.334 7.96 7.96 0 0 0 2.062 9m13 0h2.876A7.96 7.96 0 0 0 16.5 5.334 7.96 7.96 0 0 0 15.062 9m2.876 2h-2.876a7.96 7.96 0 0 0 1.438 3.666A7.96 7.96 0 0 0 17.938 11M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgBasketball;