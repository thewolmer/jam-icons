import * as React from "react";
const SvgMap = ({ title, titleId, ...props }) => (
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
    <path d="m2 17.613 3.419-1.14A5 5 0 0 1 6 16.317V2.387L2 3.721zm-.662 2.328A1 1 0 0 1 0 19V3a1 1 0 0 1 .706-.956L5.419.473a5 5 0 0 1 3.162 0l3.47 1.157a3 3 0 0 0 1.898 0L18.662.059A1 1 0 0 1 20 1v16a1 1 0 0 1-.706.956l-4.713 1.571a5 5 0 0 1-3.162 0l-3.47-1.157a3 3 0 0 0-1.898 0zM18 16.28V2.387l-3.419 1.14a5 5 0 0 1-.581.156v13.93l4-1.334zm-6 1.334V3.683a5 5 0 0 1-.581-.156L8 2.387v13.93a5 5 0 0 1 .581.156L12 17.613z" />
  </svg>
);
export default SvgMap;