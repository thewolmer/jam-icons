import * as React from "react";
const SvgHeader6 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4.5 -7 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm11.949 2.057c.43.44.651.999.651 1.64 0 .629-.228 1.18-.67 1.62-.442.437-.99.663-1.613.663a2.21 2.21 0 0 1-1.649-.693c-.43-.45-.652-.985-.652-1.58q0-.337.1-.672c.063-.211.664-1.627.837-1.966q.377-.737 1.197-2.137l1.78.652-.917 1.88c.249.113.733.386.936.593m-1.63.765a.85.85 0 0 0-.858.863.85.85 0 0 0 .252.613.865.865 0 0 0 1.48-.614.84.84 0 0 0-.25-.611.87.87 0 0 0-.623-.251z" />
  </svg>
);
export default SvgHeader6;
