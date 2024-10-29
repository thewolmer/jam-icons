import * as React from "react";
const SvgCodepen = ({ title, titleId, ...props }) => (
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
    <path d="M10.549.26a1.56 1.56 0 0 0-1.756.02L.928 5.76c-.42.292-.67.77-.67 1.282v5.903c0 .525.264 1.014.702 1.303l7.994 5.285a1.56 1.56 0 0 0 1.723 0l8.153-5.386c.438-.29.701-.78.701-1.304v-5.8c0-.524-.263-1.013-.7-1.303zm6.09 6.393-3.014 2.023-2.826-2.055-.018-4.042 5.857 4.074zm-7.902-4.07V6.54L5.84 8.564 2.953 6.627zM2.16 8.576l1.87 1.253-1.87 1.308zm6.625 8.433L2.954 13.1l2.913-2.037 2.92 1.958v3.99zM7.68 9.796l1.888-1.32 2.2 1.445-1.95 1.31zm3.167 7.213v-3.99l2.79-1.87 3.003 1.975zm6.625-5.805-1.98-1.3 1.98-1.329z" />
  </svg>
);
export default SvgCodepen;
