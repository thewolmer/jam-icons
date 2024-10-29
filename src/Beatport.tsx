import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBeatport = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -5.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.667 7.63c0-4.207-3.178-7.63-7.084-7.63S2.5 3.423 2.5 7.63c0 1.947.682 3.801 1.92 5.222.167.19.444.199.62.02l.764-.774a.5.5 0 0 0 .02-.667 5.77 5.77 0 0 1-1.396-3.8c0-3.063 2.312-5.554 5.155-5.554s5.156 2.491 5.156 5.554a5.77 5.77 0 0 1-1.397 3.8l.001.001a.5.5 0 0 0 .021.666l.764.773c.176.18.454.17.62-.02 1.237-1.42 1.919-3.274 1.919-5.22M20 7.65c0-1.02-.158-2.026-.47-2.99v-.003l-.002-.003a.483.483 0 0 0-.597-.3l-1.094.329a.46.46 0 0 0-.315.58h-.001a7.75 7.75 0 0 1-.789 6.467h.001a.455.455 0 0 0 .167.634l.981.57c.227.132.52.06.657-.159A9.74 9.74 0 0 0 20 7.649" />
    <path d="M3.268 11.732a7.76 7.76 0 0 1-.788-6.468.46.46 0 0 0-.315-.58l-1.093-.33a.48.48 0 0 0-.598.301H.472a9.72 9.72 0 0 0 .99 8.123h.002a.49.49 0 0 0 .655.156l.982-.57a.455.455 0 0 0 .167-.631z" />
  </svg>
);
export default SvgBeatport;