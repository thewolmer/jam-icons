import * as React from "react";
const SvgHeader5 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -6.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm8.003 4.317h2.68c.386 0 .699-.287.699-.642s-.313-.642-.698-.642H10.01l.002-.244L10 3h5.086v1.888h-3.144l.014.617h1.114c1.355 0 2.469.984 2.523 2.23.052 1.21-.972 2.231-2.288 2.28l-.095.001-3.21-.02V8.73z" />
  </svg>
);
export default SvgHeader5;
