import * as React from "react";
const SvgForwardCircleF = ({ title, titleId, ...props }) => (
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
    <path d="M9.027 13.246c.046.293.15.573.307.822.607.965 1.832 1.222 2.737.576l4.055-2.898c.213-.153.397-.348.54-.575.606-.965.365-2.27-.54-2.917L12.07 5.356A1.9 1.9 0 0 0 10.972 5c-.978 0-1.79.759-1.945 1.754L7.07 5.356A1.9 1.9 0 0 0 5.972 5C4.883 5 4 5.941 4 7.102v5.796c0 .417.116.824.334 1.17.607.965 1.832 1.222 2.737.576zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m.972-12.898v5.796L15.027 10zm-5 0v5.796l3.02-2.159.004-1.476z" />
  </svg>
);
export default SvgForwardCircleF;