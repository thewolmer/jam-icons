import * as React from "react";
const SvgPinterest = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.17 13.097c-.506 2.726-1.122 5.34-2.95 6.705-.563-4.12.829-7.215 1.475-10.5-1.102-1.91.133-5.755 2.457-4.808 2.86 1.166-2.477 7.102 1.106 7.844 3.741.774 5.269-6.683 2.949-9.109C7.855-.272 1.45 3.15 2.238 8.163c.192 1.226 1.421 1.598.491 3.29C.584 10.962-.056 9.22.027 6.897.159 3.097 3.344.435 6.538.067c4.04-.466 7.831 1.527 8.354 5.44.59 4.416-1.823 9.2-6.142 8.855-1.171-.093-1.663-.69-2.58-1.265" />
  </svg>
);
export default SvgPinterest;
