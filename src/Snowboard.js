import * as React from "react";
const SvgSnowboard = ({ title, titleId, ...props }) => (
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
    <path d="M18.51 1.527a4.416 4.416 0 0 1-.305 6.522A77 77 0 0 0 8.061 18.193a4.416 4.416 0 0 1-6.522.305 4.39 4.39 0 0 1 .317-6.499A74 74 0 0 0 12.01 1.844a4.39 4.39 0 0 1 6.499-.317zm-1.415 1.414a2.39 2.39 0 0 0-3.54.173 76 76 0 0 1-10.43 10.43 2.392 2.392 0 0 0-.005 3.691 2.416 2.416 0 0 0 3.401-.318A79 79 0 0 1 16.93 6.51a2.416 2.416 0 0 0 .166-3.568zM11.438 8.57a1 1 0 1 1 1.415-1.414 1 1 0 0 1-1.415 1.414m-4.95 4.95a1 1 0 1 1 1.415-1.415 1 1 0 0 1-1.414 1.415z" />
  </svg>
);
export default SvgSnowboard;
