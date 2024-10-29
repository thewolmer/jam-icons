import * as React from "react";
const SvgPeriscope = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.986 0C3.58 0 .01 3.516.01 7.852c0 5.155 6.485 12.12 7.976 12.12s7.975-6.77 7.975-12.12C15.96 3.516 12.39 0 7.986 0M7.95 13.73c-3.136 0-5.677-2.503-5.677-5.59S4.814 2.551 7.95 2.551s5.676 2.503 5.676 5.59-2.541 5.589-5.676 5.589" />
    <path d="M7.95 3.631q-.211 0-.418.02c.338.384.543.885.543 1.433 0 1.211-.997 2.193-2.227 2.193A2.23 2.23 0 0 1 3.87 6.09c-.32.615-.5 1.311-.5 2.05 0 2.49 2.05 4.509 4.58 4.509 2.529 0 4.58-2.019 4.58-4.51S10.479 3.63 7.95 3.63z" />
  </svg>
);
export default SvgPeriscope;
