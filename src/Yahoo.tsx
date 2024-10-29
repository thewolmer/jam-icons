import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYahoo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -6 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.077 2.96c-.489.132-4.957 3.597-5.252 4.448-.064.293.007 3.141.072 3.568.294.066 2.42.009 2.81.074l-.047.88c-.382-.03-3.083-.023-4.624-.023-.783 0-3.3.087-4.074.065l.146-.838c.424-.032 2.18.078 2.565-.332.191-.204.131-2.91.066-3.368-.162-.49-4.078-5.397-5.102-6.2H0V0h8.895v.085c.008 0 .022.001.03.003l-.03.208v.937H6.213c1.195 1.749 2.91 3.86 3.64 4.873l3.583-3.246h-2.13l-.3-1.232h7.801l-.058.087.028.002-.557.808-.018.003-.225.332h-1.439c-.186.04-.35.077-.461.1m2.545 7.726-.688-.034-.769-.094.007 1.317.606.052.653.048.191-1.29zm1.337-6.297c-.232-.008-2.345-.208-2.62-.262l.032 5.564 1.196.097z" />
  </svg>
);
export default SvgYahoo;
