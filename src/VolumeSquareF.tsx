import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeSquareF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m3.336 13.241H8.34l1.823 1.71a2 2 0 0 0 1.368.54h.205a1.6 1.6 0 0 0 1.6-1.6v-7.8a1.6 1.6 0 0 0-1.6-1.6h-.205a2 2 0 0 0-1.368.541L8.34 6.742H7.336a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2zm1.795-4.5 2.205-2.067v6.634L9.13 11.241H7.336v-2.5z" />
  </svg>
);
export default SvgVolumeSquareF;
