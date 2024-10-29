import * as React from "react";
const SvgHeader4 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4.5 -7 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm10.636 4.74H10V7.302l.06-.198 2.714-4.11h1.687v3.952h.538V8.74h-.538V10h-1.825zm.154-1.283V5.774l-1.1 1.683z" />
  </svg>
);
export default SvgHeader4;
