import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgToolsF = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.131 5.668a1.5 1.5 0 0 1 .294-1.708l1.414-1.414a1.5 1.5 0 0 1 1.707-.293L7.021.778a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-1.415 1.414-.05-.05-3.535 3.536.05.05-1.414 1.414a2 2 0 0 1-2.829 0L.657 9.971a2 2 0 0 1 0-2.829zm6.96 7.08 3.536-3.535 3.586 3.586-3.535 3.536-3.586-3.586zm5 5 3.536-3.535 1.768 1.768a2.5 2.5 0 0 1-3.535 3.536l-1.768-1.768zm2.83-15.556 4.242 4.243-3.839 3.839c-.613.613-1.744.478-2.525-.303l-1.414-1.415c-.781-.78-.917-1.911-.303-2.525zM18.334.778l.303-.303c.613-.614 1.744-.478 2.525.303l1.414 1.414c.781.781.917 1.912.303 2.526l-.303.303L18.335.778zM5.607 16.335l2.12-2.122a1 1 0 1 1 1.415 1.414L7.021 17.75a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.415 0l-1.414-1.414a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.415 0z" />
  </svg>
);
export default SvgToolsF;