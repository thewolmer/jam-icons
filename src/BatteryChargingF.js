import * as React from "react";
const SvgBatteryChargingF = ({ title, titleId, ...props }) => (
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
    <path d="M19 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2zm-8.775 5.11q.365-.245.408-.738V5.72l2.432.898a1 1 0 0 0 1.285-.591c.191-.518-.121-1.066-.639-1.258A381 381 0 0 1 9.946 3.41c-.441-.163-.755-.005-1.03.204q-.273.21-.326.806l.043 1.49-2.428-.877a1 1 0 1 0-.68 1.881q2.484.909 3.77 1.377c.34.124.566.06.93-.183z" />
  </svg>
);
export default SvgBatteryChargingF;
