import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViberSquare = ({
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
    <path d="M13.644 9.404c.012-1.492-1.219-2.86-2.744-3.049l-.1-.015a1.4 1.4 0 0 0-.232-.026c-.313 0-.396.226-.418.361a.43.43 0 0 0 .06.329c.104.145.286.17.432.192q.066.008.117.02c1.371.315 1.833.812 2.058 2.215q.008.053.01.122c.01.167.031.516.395.516q.045 0 .096-.008c.339-.053.328-.372.323-.525a1 1 0 0 1 0-.111l.002-.02z" />
    <path d="M10.48 5.807c.04.003.08.006.111.011 2.25.358 3.286 1.458 3.573 3.8q.006.061.006.14c.003.183.009.563.405.571h.012a.38.38 0 0 0 .294-.115c.123-.133.115-.33.108-.49q-.004-.058-.003-.107c.028-2.395-1.98-4.567-4.298-4.647l-.028.001-.027.002q-.036 0-.082-.004a2 2 0 0 0-.12-.006c-.369 0-.439.27-.448.432-.02.373.329.4.497.412m3.575 6.837-.143-.115c-.246-.204-.508-.392-.76-.574l-.158-.114c-.324-.234-.615-.349-.89-.349-.37 0-.693.212-.96.629q-.175.275-.438.274a.85.85 0 0 1-.353-.091c-1.045-.49-1.792-1.24-2.219-2.23-.206-.48-.14-.792.224-1.047.206-.144.59-.413.563-.928-.03-.585-1.281-2.345-1.808-2.545a1 1 0 0 0-.698-.002c-.605.21-1.04.58-1.257 1.067-.21.472-.2 1.025.028 1.601.657 1.666 1.58 3.118 2.746 4.316 1.14 1.173 2.542 2.133 4.166 2.855.146.065.3.1.412.126l.095.024a.2.2 0 0 0 .04.006h.013c.764 0 1.681-.72 1.963-1.542.247-.72-.204-1.075-.566-1.36zM10.818 7.71c-.13.003-.403.01-.499.296q-.066.202.016.345c.081.14.237.183.378.206.512.085.776.378.828.92.025.254.19.43.402.43l.048-.002q.383-.049.367-.575c.004-.366-.181-.78-.496-1.11-.316-.332-.697-.519-1.044-.51" />
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgViberSquare;