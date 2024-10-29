import * as React from "react";
const SvgCharacter = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 14v-2.108c1.984-.504 3.501-2.476 3.501-4.882 0-2.797-2.049-5.007-4.5-5.007s-4.5 2.21-4.5 5.007c0 2.405 1.516 4.376 3.499 4.881V14H1a1 1 0 0 1 0-2.003h1.434C1.241 10.727.501 8.961.501 7.01c0-3.872 2.91-7.01 6.5-7.01s6.5 3.138 6.5 7.01c0 1.951-.74 3.716-1.933 4.987H13A1 1 0 0 1 13 14z" />
  </svg>
);
export default SvgCharacter;
