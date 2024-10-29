import * as React from "react";
const SvgBatteryCharging = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 2v8h15V2zm17 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2zm-5.212 3.358a1 1 0 0 1-1.281.597l-3.76-1.368a1 1 0 0 1 .685-1.88l3.759 1.369a1 1 0 0 1 .597 1.282M10.03 7.989a1 1 0 0 1-1.282.598L4.989 7.22a1 1 0 0 1 .684-1.88l3.759 1.369a1 1 0 0 1 .598 1.281zm.06-3.342v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0" />
  </svg>
);
export default SvgBatteryCharging;