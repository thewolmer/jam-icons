import * as React from "react";
const SvgFootball = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.835 14h6.33A10.3 10.3 0 0 0 10 10c0-1.37-.302-2.741-.835-4h-6.33A10.3 10.3 0 0 0 2 10c0 1.37.302 2.741.835 4m1.106 2c.484.688 1.01 1.254 1.499 1.63.343.265.58.37.56.37s.217-.105.56-.37c.489-.376 1.015-.942 1.499-1.63H3.94zM7 11h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V9H4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2H7zM3.941 4H8.06c-.484-.688-1.01-1.254-1.499-1.63C6.217 2.105 5.98 2 6 2s-.217.105-.56.37c-.489.376-1.015.942-1.499 1.63M6 20c-2 0-6-4.477-6-10S4 0 6 0s6 4.477 6 10-4 10-6 10" />
  </svg>
);
export default SvgFootball;