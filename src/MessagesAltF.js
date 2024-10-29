import * as React from "react";
const SvgMessagesAltF = ({ title, titleId, ...props }) => (
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
    <path d="M7.46 2.332C8.74.913 10.746 0 13 0c3.866 0 7 2.686 7 6 0 1.989-1.13 3.752-2.868 4.844a3 3 0 0 1-.132.076v4.05a1 1 0 0 1-1.718.696l-1.14-1.174c1.069-1.264 1.698-2.816 1.698-4.493 0-4.067-3.698-7.395-8.38-7.667" />
    <path d="m8.385 15.886-3.667 3.78A1 1 0 0 1 3 18.97v-4.05a3 3 0 0 1-.132-.076C1.129 13.752 0 11.989 0 10c0-3.314 3.134-6 7-6s7 2.686 7 6c0 2.726-2.121 5.028-5.026 5.758a8 8 0 0 1-.589.128" />
  </svg>
);
export default SvgMessagesAltF;
