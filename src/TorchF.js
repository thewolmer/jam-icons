import * as React from "react";
const SvgTorchF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-8 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 10h8v1a2 2 0 0 1-1.35 1.892l-.508 7.113a2.148 2.148 0 0 1-4.284 0l-.509-7.113A2 2 0 0 1 0 11zm7.465-2H8 0h.535A4 4 0 0 1 0 6q0-2.21 4-6 4 3.79 4 6c0 .729-.195 1.412-.535 2" />
  </svg>
);
export default SvgTorchF;
