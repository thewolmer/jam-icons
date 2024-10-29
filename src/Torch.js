import * as React from "react";
const SvgTorch = ({ title, titleId, ...props }) => (
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
    <path d="M2 10v1l1.25.43.602 8.433a.148.148 0 0 0 .296 0l.602-8.433L6 11v-1zM.535 8A4 4 0 0 1 0 6q0-2.21 4-6 4 3.79 4 6c0 .729-.195 1.412-.535 2H8v3a2 2 0 0 1-1.35 1.892l-.508 7.113a2.148 2.148 0 0 1-4.284 0l-.509-7.113A2 2 0 0 1 0 11V8zm2.13-3.495C2.196 5.205 2 5.719 2 6a2 2 0 1 0 4 0c0-.281-.197-.795-.664-1.495Q4.836 3.754 4 2.842a14 14 0 0 0-1.336 1.663z" />
  </svg>
);
export default SvgTorch;