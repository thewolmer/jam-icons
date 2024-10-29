import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOpera = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2.5 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14.918 1.57C13.423.56 11.572 0 9.485 0c-1.91 0-3.62.466-5.043 1.32C1.702 2.944.014 5.987.014 9.886c0 5.274 3.787 10.078 9.469 10.078s9.468-4.803 9.468-10.078c0-3.707-1.526-6.64-4.033-8.316m-5.434.293c3.048 0 3.785 4.182 3.785 7.982 0 3.52-.462 8.23-3.748 8.23s-3.829-4.756-3.829-8.276c0-3.8.744-7.936 3.792-7.936" />
  </svg>
);
export default SvgOpera;
