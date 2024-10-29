import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStation = ({
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
    <path d="M6.922 15.152A6 6 0 0 1 4 10a6 6 0 0 1 3.022-5.21.2.2 0 0 1 .101-.03 1 1 0 0 1 1.325.946 1 1 0 0 1-.577.907A4 4 0 0 0 6 10c0 1.48.804 2.773 2 3.465v.001a1 1 0 0 1-.989 1.735l-.032-.016-.011-.007zm6.245-.055a1 1 0 1 1-1.091-1.668.1.1 0 0 1 .023-.023A4 4 0 0 0 14 10c0-1.48-.804-2.773-2-3.465v-.002a1 1 0 0 1 1.088-1.678A6 6 0 0 1 16 10a6 6 0 0 1-2.833 5.097M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2.759 7.608a1 1 0 0 1-.412-1.958 8.004 8.004 0 0 0-.053-15.316.1.1 0 0 1-.03-.016A1 1 0 1 1 12.941.44C17.03 1.696 20 5.5 20 10c0 4.547-3.034 8.384-7.188 9.6a.2.2 0 0 1-.053.008m-5.613-.021C3.014 18.359 0 14.53 0 10 0 5.479 3 1.658 7.12.421a1 1 0 0 1 .1-.03L7.228.39a1 1 0 0 1 .224-.025 1 1 0 0 1 .27 1.965 8.004 8.004 0 0 0 .013 15.347 1 1 0 1 1-.589 1.91" />
  </svg>
);
export default SvgStation;