import * as React from "react";
const SvgPen = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m5.648 12.276-1.65 1.1-.415 1.68 1.665-.42 1.104-1.656zM7.1 10.899l.627.627.091-.032c.937-.334 1.88-1.019 2.824-2.089 1.139-1.29 3.061-3.587 5.757-6.879a.211.211 0 0 0-.297-.297c-3.286 2.693-5.583 4.616-6.881 5.758-1.076.946-1.76 1.888-2.088 2.819zm-.615 5.486L.843 17.814l1.4-5.671 3.004-2.004Q5.926 8.225 7.9 6.486 9.88 4.743 14.836.682a2.21 2.21 0 0 1 3.111 3.112q-4.065 4.963-5.804 6.934-1.734 1.965-3.652 2.65z" />
  </svg>
);
export default SvgPen;
