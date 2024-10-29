import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrain = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 15h8a2 2 0 0 0 2-2v-2H2v2a2 2 0 0 0 2 2m8.813 1.917A2 2 0 0 1 11.131 20H4.87a2 2 0 0 1-1.682-3.083A4 4 0 0 1 0 13V4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9a4 4 0 0 1-3.187 3.917M14 9V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5zm-2-6a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M4 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-7.131 4h6.262l-.666-1h-4.93z" />
  </svg>
);
export default SvgTrain;
