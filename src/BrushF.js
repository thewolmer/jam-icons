import * as React from "react";
const SvgBrushF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -3.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m5.36 11.116 2.68 2.681q-.75.974-1.864 1.832-2.238 1.725-5.318.885a83 83 0 0 1 2.603-3.6q.733-.955 1.898-1.798zm1.489-1.338q.826-1.184 2.154-2.406 1.9-1.748 6.602-5.877c.834-.733 1.86-.9 2.375-.385.514.514.348 1.542-.384 2.376q-4.135 4.71-5.878 6.601-1.22 1.324-2.407 2.153z" />
  </svg>
);
export default SvgBrushF;