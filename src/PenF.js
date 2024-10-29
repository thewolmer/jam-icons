import * as React from "react";
const SvgPenF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.406 12.732 5.367 9.693q.815-1.435 2.375-2.838 2.012-1.812 7.1-6.126a1.795 1.795 0 0 1 2.53 2.53q-4.32 5.097-6.125 7.1-1.402 1.555-2.841 2.373M3.99 11.146l2.965 2.964-1.366 1.906-5.276 1.795 1.771-5.3z" />
  </svg>
);
export default SvgPenF;
