import * as React from "react";
const SvgPencilF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m16.318 6.11-3.536-3.535 1.415-1.414c.63-.63 2.073-.755 2.828 0l.707.707c.755.755.631 2.198 0 2.829zm-1.414 1.415-9.9 9.9-4.596 1.06 1.06-4.596 9.9-9.9z" />
  </svg>
);
export default SvgPencilF;
