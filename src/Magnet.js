import * as React from "react";
const SvgMagnet = ({ title, titleId, ...props }) => (
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
    <path d="M13 12c0-2.878-1.516-5-3-5s-3 2.122-3 5v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6C0 5.373 4.477 0 10 0s10 5.373 10 12v6a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm2 0h3c0-5.595-3.67-10-8-10S2 6.405 2 12h3c0-3.866 2.239-7 5-7s5 3.134 5 7M2 18h3v-4H2zm13 0h3v-4h-3z" />
  </svg>
);
export default SvgMagnet;