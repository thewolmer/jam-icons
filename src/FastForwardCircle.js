import * as React from "react";
const SvgFastForwardCircle = ({ title, titleId, ...props }) => (
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m4.043-6.4L11.5 14.364a1.9 1.9 0 0 1-2.829.011 2.2 2.2 0 0 1-.465-.778l-.706.767a1.9 1.9 0 0 1-2.829.011 2.24 2.24 0 0 1-.59-1.53V7.156c0-1.19.895-2.156 2-2.156.546 0 1.068.241 1.446.667l.67.758C8.477 5.595 9.214 5 10.08 5c.547 0 1.07.241 1.447.667l2.516 2.842V6a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0zM6.08 12.845l2.141-2.326-.004-.948L6.08 7.156v5.688zm4 0 2.567-2.788-2.567-2.9z" />
  </svg>
);
export default SvgFastForwardCircle;
