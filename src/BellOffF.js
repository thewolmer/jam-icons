import * as React from "react";
const SvgBellOffF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.295 15.705A9 9 0 0 1 4 11.292V7a6 6 0 0 1 10.243-4.243zm14.696-9.039Q16 6.832 16 7v4.292A8.98 8.98 0 0 1 19 18H4.657zM12.829 19a3.001 3.001 0 0 1-5.658 0zM19.092.707a1 1 0 0 1 0 1.414l-16.97 16.97a1 1 0 1 1-1.415-1.413L17.677.708a1 1 0 0 1 1.415 0z" />
  </svg>
);
export default SvgBellOffF;
