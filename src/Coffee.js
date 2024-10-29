import * as React from "react";
const SvgCoffee = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.232 4.976A1.5 1.5 0 0 1 1.5 2H2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h.5a1.5 1.5 0 0 1 .268 2.976l-.448 3.805a2 2 0 0 1 .399 1.467l-.5 4a2 2 0 0 1-.693 1.279l-.422 3.59a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883l-.422-3.59a2 2 0 0 1-.693-1.279l-.5-4a2 2 0 0 1 .4-1.467zM3.25 5l.353 3h6.796l.353-3zm.517 9h6.468l.5-4H3.266zm.777 2 .235 2h4.444l.235-2z" />
  </svg>
);
export default SvgCoffee;
