import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlashlightOn = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m13.24 13.12.381.02a1 1 0 0 0 .764-.29l2.121-2.122-3.535-3.536-2.122 2.122a1 1 0 0 0-.291.763l.021.38zm-1.684 1.143-2.121-2.12-7.071 7.07a1 1 0 0 0 0 1.414l.707.708a1 1 0 0 0 1.414 0zM9.435 7.9l2.121-2.12a2 2 0 0 1 2.829 0l3.535 3.535a2 2 0 0 1 0 2.828l-2.12 2.12a3 3 0 0 1-2.288.875L5.9 22.748a3 3 0 0 1-4.242 0l-.707-.706a3 3 0 0 1 0-4.243l7.611-7.611a3 3 0 0 1 .874-2.289zm8.485 0a1 1 0 0 1 0-1.414l2.122-2.121a1 1 0 1 1 1.414 1.414L19.335 7.9a1 1 0 0 1-1.415 0m1.863 1.674a1 1 0 0 1 .707-1.225l1.932-.518a1 1 0 1 1 .517 1.932l-1.931.518a1 1 0 0 1-1.225-.707m-3.984-3.795a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 0 1 1.415 1.414l-2.122 2.121a1 1 0 0 1-1.414 0m-1.673-1.862a1 1 0 0 1-.707-1.225L13.936.76a1 1 0 1 1 1.932.518l-.517 1.932a1 1 0 0 1-1.225.707" />
  </svg>
);
export default SvgFlashlightOn;
