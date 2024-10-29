import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMountain = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m14.846 9.334-3.985-6.762a1 1 0 0 0-1.723 0L7.11 6.015c.202 1.979.943 2.783 2.387 2.783 2.005 0 3.816.176 5.35.536zm1.555 2.637c-1.547-.767-3.977-1.173-6.905-1.173-1.819 0-3.11-.832-3.813-2.364l-3.57 6.058A1 1 0 0 0 2.975 16h14.05a1 1 0 0 0 .861-1.508l-1.485-2.52zM12.584 1.556l7.025 11.92A3 3 0 0 1 17.025 18H2.975A3 3 0 0 1 .39 13.477l7.025-11.92a3 3 0 0 1 5.17 0z" />
  </svg>
);
export default SvgMountain;
