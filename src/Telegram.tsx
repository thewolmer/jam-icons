import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTelegram = ({
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
    <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m4.442 6c-.381.007-.966.207-3.779 1.362a485 485 0 0 0-5.907 2.512q-.72.283-.753.553c-.044.346.46.453 1.094.657.517.166 1.213.36 1.575.368q.492.01 1.098-.4 4.139-2.76 4.273-2.789c.063-.014.15-.032.21.02.059.052.053.15.046.177-.05.211-2.641 2.538-2.79 2.691l-.072.072c-.55.543-1.105.898-.147 1.521.866.563 1.37.922 2.26 1.5.57.368 1.017.805 1.605.752.271-.025.55-.276.693-1.026.335-1.77.995-5.608 1.147-7.19a1.7 1.7 0 0 0-.017-.393.42.42 0 0 0-.144-.27c-.121-.098-.309-.118-.392-.117" />
  </svg>
);
export default SvgTelegram;
