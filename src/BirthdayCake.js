import * as React from "react";
const SvgBirthdayCake = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 18.262V20h16v-1.728l-3.106.753-4.86-1.004-4.977 1.004zM2 16.2l3.104.775 4.936-.996 4.819.996L18 16.214V15a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zM13 12h4a3 3 0 0 1 3 3v7H0v-7a3 3 0 0 1 3-3h4V9h6zm-2 0v-1H9v1zm-1-3.6a3 3 0 0 1-3-3Q7 3.742 10 0q3 3.742 3 5.4a3 3 0 0 1-3 3m-.002-1.981c.552 0 1-.48 1-1.072q0-.591-1-1.928-1 1.337-1 1.928c0 .592.448 1.072 1 1.072" />
  </svg>
);
export default SvgBirthdayCake;
