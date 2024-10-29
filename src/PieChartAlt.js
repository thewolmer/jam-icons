import * as React from "react";
const SvgPieChartAlt = ({ title, titleId, ...props }) => (
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
    <path d="M19.95 11c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10C0 4.815 3.947.551 9 .05v2.012A8.001 8.001 0 0 0 10 18a8 8 0 0 0 7.938-7h2.013zm0-2h-2.012A8.004 8.004 0 0 0 11 2.062V.049A10 10 0 0 1 19.95 9" />
  </svg>
);
export default SvgPieChartAlt;
