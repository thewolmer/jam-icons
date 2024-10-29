import * as React from "react";
const SvgBingSquare = ({ title, titleId, ...props }) => (
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
    <path d="M13.99 9.297a.24.24 0 0 0-.159-.218L9.127 7.623c-.088-.027-.128.02-.09.103l.876 1.922a.52.52 0 0 0 .221.222l1.2.55c.084.037.086.104.005.147l-5.122 2.724c-.08.043-.091.028-.023-.034l1.968-1.772a.43.43 0 0 0 .124-.28l.001-5.37a.24.24 0 0 0-.159-.219L6.16 5.007c-.088-.027-.16.027-.16.12v8.148c0 .092.061.211.136.264l2.001 1.418c.075.053.2.058.28.01l5.43-3.27a.33.33 0 0 0 .144-.255z" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgBingSquare;
