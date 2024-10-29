import * as React from "react";
const SvgAlienF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9 20.858c-4.5 0-9-6.03-9-11a9 9 0 1 1 18 0c0 4.97-4.5 11-9 11m-1.974-6.181c.529-.192 1.42-1.946.853-3.503-.566-1.557-2.399-2.32-2.905-2.135-.506.184-1.42 1.946-.853 3.503.566 1.557 2.376 2.327 2.905 2.135m3.948 0c.529.192 2.339-.578 2.905-2.135.567-1.557-.347-3.319-.853-3.503s-2.339.578-2.905 2.135c-.567 1.557.324 3.31.853 3.503" />
  </svg>
);
export default SvgAlienF;
