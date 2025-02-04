import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAppleCircle = ({
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
    <path d="M12.8 10.313c-.012-1.266 1.034-1.873 1.08-1.904-.587-.86-1.502-.977-1.828-.99-.779-.08-1.52.458-1.915.458-.394 0-1.004-.447-1.65-.435-.849.013-1.631.493-2.068 1.254-.882 1.53-.226 3.797.633 5.038.42.607.921 1.29 1.579 1.265.633-.025.872-.41 1.638-.41s.98.41 1.65.398c.682-.013 1.114-.62 1.531-1.229.482-.704.681-1.387.693-1.422-.015-.007-1.33-.51-1.342-2.023zm-1.258-3.716c.349-.424.584-1.011.52-1.597-.503.02-1.112.335-1.473.757-.323.375-.607.973-.53 1.548.56.043 1.133-.286 1.483-.708" />
    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgAppleCircle;
