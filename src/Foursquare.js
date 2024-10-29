import * as React from "react";
const SvgFoursquare = ({ title, titleId, ...props }) => (
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
    <path d="M13.467.771A2.13 2.13 0 0 0 11.833 0H2.159C.974 0 .01.987.01 2.2v16.786c0 .418.253.792.635.94a.96.96 0 0 0 1.084-.273l5.189-5.985h3.481c1.064 0 1.957-.78 2.123-1.855l1.435-9.27a2.23 2.23 0 0 0-.489-1.772zm-2.403 4.844H6.465c-.55 0-1.015.461-1.005 1.025.01.547.446.987.983.987h4.16a.5.5 0 0 1 .485.582l-.465 3.024a.496.496 0 0 1-.487.425l-3.662-.002a.97.97 0 0 0-.735.339l-3.763 4.34V2.2c0-.104.082-.188.183-.188h9.272a.5.5 0 0 1 .488.577l-.368 2.594a.496.496 0 0 1-.487.432" />
  </svg>
);
export default SvgFoursquare;
