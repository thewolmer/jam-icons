import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBeatportCircle = ({
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
    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
    <path d="M13.462 10.58c0-2.103-1.588-3.814-3.541-3.814s-3.542 1.711-3.542 3.815c0 .973.34 1.9.96 2.61.083.095.222.1.31.01l.382-.387a.25.25 0 0 0 .01-.333 2.9 2.9 0 0 1-.698-1.9c0-1.531 1.156-2.777 2.578-2.777s2.577 1.246 2.577 2.777c0 .708-.248 1.383-.698 1.9a.25.25 0 0 0 .011.333l.382.387c.088.09.227.085.31-.01.619-.71.96-1.637.96-2.61m1.666.009c0-.51-.079-1.012-.235-1.495v-.003a.24.24 0 0 0-.3-.15l-.546.165a.23.23 0 0 0-.158.29 3.88 3.88 0 0 1-.395 3.233v.001a.23.23 0 0 0 .084.317l.49.285c.114.065.26.03.33-.08.477-.773.73-1.66.73-2.563" />
    <path d="M6.763 12.632a3.88 3.88 0 0 1-.394-3.234.23.23 0 0 0-.157-.29l-.547-.165a.24.24 0 0 0-.3.15 4.86 4.86 0 0 0 .495 4.062.244.244 0 0 0 .329.078l.49-.285a.23.23 0 0 0 .084-.316" />
  </svg>
);
export default SvgBeatportCircle;
