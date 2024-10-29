import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSnapchat = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.899 7.75q.499-.112.501-.164l.1-.045a1 1 0 0 1 .406-.082c.152 0 .304.028.435.082.391.139.636.424.642.744.003.131-.037.334-.242.545-.173.176-.433.332-.798.476a5 5 0 0 1-.292.099c-.37.117-.93.295-1.076.637-.075.174-.043.403.105.703.048.116 1.253 2.855 3.927 3.295a.465.465 0 0 1 .391.485.6.6 0 0 1-.05.206c-.096.223-.317.411-.676.578-.44.203-1.097.373-1.956.508-.043.083-.09.295-.119.428a7 7 0 0 1-.115.465c-.071.244-.259.384-.536.384-.116 0-.266-.02-.46-.057a5.3 5.3 0 0 0-1.049-.11q-.367 0-.75.063c-.49.081-.912.379-1.402.724-.715.503-1.525 1.075-2.763 1.075a2 2 0 0 1-.144-.004l-.101.004c-1.237 0-2.047-.572-2.762-1.077-.49-.345-.912-.642-1.402-.723a4.6 4.6 0 0 0-.75-.064c-.438 0-.791.069-1.048.119-.177.033-.328.063-.46.063-.35 0-.484-.212-.537-.39a6 6 0 0 1-.115-.468c-.031-.142-.076-.348-.12-.43-.858-.134-1.516-.305-1.956-.51-.36-.165-.581-.354-.677-.58a.6.6 0 0 1-.05-.203.467.467 0 0 1 .392-.487 4.5 4.5 0 0 0 1.706-.664 5.6 5.6 0 0 0 1.215-1.073 6.6 6.6 0 0 0 1.018-1.58q.205-.417.095-.68c-.146-.342-.708-.52-1.078-.637-.106-.034-.207-.065-.292-.099q-.487-.192-.745-.426C2 8.597 2 8.319 2.026 8.179c.041-.214.191-.405.424-.542a1.2 1.2 0 0 1 .598-.167.8.8 0 0 1 .339.07q.108.051.212.09.003.047.414.123.14.026.265.026a.8.8 0 0 0 .328-.062l-.028-.446c-.085-1.352-.191-3.036.257-4.035A5.5 5.5 0 0 1 6.053 1.49c.423-.4.913-.724 1.459-.964A5.8 5.8 0 0 1 9.798.042l.394-.003c.445 0 1.333.062 2.284.482a5.1 5.1 0 0 1 1.464.965 5.4 5.4 0 0 1 1.223 1.751c.448 1 .342 2.684.255 4.038l-.003.057q-.014.2-.024.387a.8.8 0 0 0 .276.06q.11-.006.232-.03z" />
  </svg>
);
export default SvgSnapchat;