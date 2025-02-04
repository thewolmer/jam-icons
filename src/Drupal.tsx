import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDrupal = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.134 3.711c-1.022-.635-1.989-.884-2.953-1.52C9.583 1.788 8.754.827 8.058 0c-.134 1.327-.54 1.866-1.003 2.251-.982.768-1.6.998-2.45 1.46-.714.366-4.592 2.673-4.592 7.634S4.201 19.96 8.85 19.96c4.65 0 8.683-3.365 8.683-8.46s-3.782-7.403-4.4-7.788zm.078 14.308c-.097.096-.984.711-2.026.808-1.042.096-2.45.153-3.299-.616-.135-.135-.097-.326 0-.402.096-.079.173-.136.29-.136s.095 0 .154.038c.386.308.964.557 2.198.557 1.236 0 2.105-.344 2.49-.634.174-.134.25-.019.27.058s.058.193-.077.327m-3.344-1.618c.213-.193.56-.501.89-.635.327-.135.499-.116.809-.116.308 0 .637.02.868.174s.367.5.442.69c.078.194 0 .309-.153.386-.134.076-.154.038-.289-.211-.134-.25-.25-.5-.926-.5-.675 0-.887.23-1.215.5-.328.269-.444.365-.56.211-.116-.153-.077-.308.134-.5zm6.964-3.666c0 .596-.192 1.672-.656 2.345-.462.674-.75.925-1.293.886-.695-.059-2.084-2.212-2.971-2.252-1.118-.037-3.55 2.33-5.46 2.33-1.159 0-1.505-.174-1.89-.425-.58-.404-.87-1.019-.85-1.865.02-1.5 1.427-2.903 3.203-2.922 2.256-.02 3.821 2.229 4.958 2.21.965-.017 2.818-1.903 3.725-1.903.964 0 1.234.998 1.234 1.596" />
  </svg>
);
export default SvgDrupal;
