import * as React from "react";
const SvgWrench = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-1 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.464 6.748c.06.942.45 1.865 1.164 2.578a4 4 0 0 0 3.866 1.036l1.114-.298 9.162 9.161a1 1 0 0 0 1.414-1.414L10.022 8.65l.298-1.115A4 4 0 0 0 9.284 3.67a4 4 0 0 0-2.578-1.164L7.93 3.728A3 3 0 1 1 3.686 7.97zm-.9-3.727L5.1 6.556a1 1 0 0 0 1.415-1.414L2.979 1.606a6.002 6.002 0 0 1 9.273 6.445l8.346 8.346a3 3 0 0 1-4.243 4.243L8.01 12.294A6.002 6.002 0 0 1 1.565 3.02zm15.5 15.496 1.42-1.41-1.42-1.414-1.419 1.414 1.418 1.41z" />
  </svg>
);
export default SvgWrench;