import * as React from "react";
const SvgCactus = ({ title, titleId, ...props }) => (
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
    <path d="M20 6.5V14h-6v6H6v-4H0V8.5a2.5 2.5 0 0 1 5 0V11h1V4a4 4 0 0 1 7.988-.314V9H15V6.5a2.5 2.5 0 1 1 5 0M8 18h4v-6h6V6.5a.5.5 0 1 0-1 0V11h-5V4a2 2 0 1 0-4 0v9H3V8.5a.5.5 0 0 0-1 0V14h6zm2-9a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1m0-5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgCactus;
