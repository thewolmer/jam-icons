import * as React from "react";
const SvgLightbulb = ({ title, titleId, ...props }) => (
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
    <path d="M9 14v-2.298l.856-.597a5 5 0 1 0-5.712 0l.856.597V14h1V6a1 1 0 1 1 2 0v8zm0 2H5v2h4zM0 7a7 7 0 1 1 11 5.745V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5.255A6.99 6.99 0 0 1 0 7" />
  </svg>
);
export default SvgLightbulb;
