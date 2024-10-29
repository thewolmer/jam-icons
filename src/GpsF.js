import * as React from "react";
const SvgGpsF = ({ title, titleId, ...props }) => (
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
    <path d="m18.919 2.635-5.953 16.08c-.376 1.016-1.459 1.538-2.418 1.165a1.85 1.85 0 0 1-1.045-1.054l-1.887-4.77a3.7 3.7 0 0 0-1.955-2.052l-4.542-1.981C.174 9.61-.256 8.465.157 7.465a1.97 1.97 0 0 1 1.067-1.079L16.54.136c.967-.395 2.04.101 2.395 1.109.157.446.151.94-.015 1.39z" />
  </svg>
);
export default SvgGpsF;
