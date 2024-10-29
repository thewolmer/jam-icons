import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPizzaSlice = ({
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
    <path d="M4.258 6.884 9.97 16.977l5.618-9.83c-1.33-.105-2.712-.453-4.242-.992-.395-.14-.598-.171-.78-.148-.154.02-1.723.569-2.643.802q-1.743.44-3.665.075m-1.41-2.49c1.702.67 3.224.82 4.584.476.738-.187 2.478-.796 2.883-.847.529-.067 1.03.01 1.696.245 1.774.626 3.296.956 4.703.909l.887-1.552A18.6 18.6 0 0 0 9.966 2a18.6 18.6 0 0 0-7.569 1.596l.451.797zM.542 2.268A20.5 20.5 0 0 1 9.966 0c3.362 0 6.606.8 9.496 2.306a1 1 0 0 1 .406 1.383l-9.034 15.807a1 1 0 0 1-1.738-.004L.13 3.65a1 1 0 0 1 .412-1.38zM8 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </svg>
);
export default SvgPizzaSlice;
