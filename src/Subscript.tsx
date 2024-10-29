import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSubscript = ({
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
    <path d="m5.954 4.5 2.831 2.806a.986.986 0 0 1 0 1.403 1.007 1.007 0 0 1-1.415 0L4.54 5.903 1.707 8.71a1.007 1.007 0 0 1-1.415 0 .986.986 0 0 1 0-1.403L3.123 4.5.294 1.694a.986.986 0 0 1 0-1.403 1.007 1.007 0 0 1 1.415 0L4.54 3.097 7.37.29a1.007 1.007 0 0 1 1.416 0 .986.986 0 0 1 0 1.403L5.955 4.5ZM14 12.352V14H9.078v-1.014l.101-.246 1.801-1.913c.433-.435.8-.77.93-1.011q.186-.346.184-.587a.42.42 0 0 0-.128-.327.48.48 0 0 0-.355-.127.45.45 0 0 0-.357.158c-.106.117-.167.288-.175.525l-.012.338h-1.84l.017-.366c.034-.735.274-1.33.723-1.77.45-.44 1.03-.66 1.719-.66q.642 0 1.149.275.51.28.814.8.3.516.301 1.063c0 .416-.231.849-.46 1.307-.223.45-.538.876-1.072 1.555l-.118.123-.255.229z" />
  </svg>
);
export default SvgSubscript;
