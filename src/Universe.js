import * as React from "react";
const SvgUniverse = ({ title, titleId, ...props }) => (
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
    <path d="M.694 17.306c-1.91-1.912.258-7.18 4.845-11.767S15.394-1.217 17.306.694c1.91 1.912-.258 7.18-4.845 11.767S2.606 19.217.694 17.306M2.08 15.92c.815.816 5.102-.95 8.997-4.845s5.66-8.182 4.845-8.997c-.815-.816-5.102.95-8.997 4.845s-5.66 8.182-4.845 8.997m3.46-3.46C.952 7.874-1.217 2.606.694.694c1.912-1.91 7.18.258 11.767 4.845s6.756 9.855 4.845 11.767c-1.912 1.91-7.18-.258-11.767-4.845zm1.385-1.385c3.895 3.895 8.182 5.66 8.997 4.845.816-.815-.95-5.102-4.845-8.997S2.895 1.263 2.08 2.078c-.816.815.95 5.102 4.845 8.997M9 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgUniverse;