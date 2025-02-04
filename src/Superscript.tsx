import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSuperscript = ({
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
    <path d="M1.708 5.29 4.54 8.098 7.37 5.29a1.007 1.007 0 0 1 1.416 0 .986.986 0 0 1 0 1.403L5.955 9.5l2.83 2.806a.986.986 0 0 1 0 1.403 1.007 1.007 0 0 1-1.415 0l-2.83-2.806-2.832 2.806a1.007 1.007 0 0 1-1.415 0 .986.986 0 0 1 0-1.403L3.123 9.5.294 6.694a.986.986 0 0 1 0-1.403 1.007 1.007 0 0 1 1.415 0ZM11.686 0q.642 0 1.149.275.51.28.814.8c.2.343.301.7.301 1.063 0 .416-.231.849-.46 1.307-.223.45-.538.876-1.072 1.555l-.118.123-.255.229H14V7H9.078V5.986l.101-.246 1.801-1.913c.433-.435.8-.77.93-1.011q.186-.346.184-.587a.42.42 0 0 0-.128-.327.48.48 0 0 0-.355-.127.45.45 0 0 0-.357.158c-.106.117-.167.288-.175.525l-.012.338h-1.84l.017-.366c.034-.735.274-1.33.723-1.77.45-.44 1.03-.66 1.719-.66" />
  </svg>
);
export default SvgSuperscript;
