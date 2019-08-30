import React from "react";
import PropTypes from "prop-types";

const SvgComponent = ({ size, width, height, ...otherProps }) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg
      width={width}
      height={height}
      size={size}
      viewBox="0 0 21 15"
      {...otherProps}
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ME_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ME_svg_prefix__b"
        >
          <stop stopColor="#E6BE53" offset="0%" />
          <stop stopColor="#D3AD46" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ME_svg_prefix__c"
        >
          <stop stopColor="#E01826" offset="0%" />
          <stop stopColor="#C30A17" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ME_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#ME_svg_prefix__b)" d="M0 0h21v15H0z" />
        <rect
          fill="url(#ME_svg_prefix__c)"
          x={1}
          y={1}
          width={19}
          height={13}
          rx={0.75}
        />
        <path
          d="M10.147 5.147c.195.195.511.195.706 0l-.206.206L11.65 4.35a.729.729 0 01.803-.123l.094.046c.25.126.295.385.1.58l.206-.206L11.85 5.65a.729.729 0 00-.123.803l.046.094c.126.25.227.68.227.953V7c0 .276.193.404.453.273l.094-.046c.25-.126.295-.385.1-.58l.206.206a.499.499 0 010-.706l-.206.206c.195-.195.45-.546.58-.806l.046-.094c.126-.25.28-.667.348-.937l.258-1.032c.067-.267.26-.3.425-.08l.892 1.191c.168.224.304.619.304.91v.99c0 .279-.096.698-.227.958l-.046.094a3.69 3.69 0 01-.577.803l-.3.3a3.62 3.62 0 01-.803.577l-.094.046c-.25.126-.685.227-.953.227-.276 0-.307.096-.047.227l.094.046c.25.126.611.385.806.58l-.206-.206c.195.195.511.195.706 0l-.206.206a.499.499 0 01.706 0l-.206-.206a.732.732 0 01.126.806l-.046.094c-.126.25-.459.453-.727.453a2.48 2.48 0 01-.953-.227l-.094-.046a1.74 1.74 0 01-.68-.68l-.046-.094c-.126-.25-.385-.295-.58-.1l.206-.206a.63.63 0 00-.08.763l.454.68c.15.226.09.533-.137.683l-.68.454a.8.8 0 01-.82 0l-.68-.454a.493.493 0 01-.137-.683l.454-.68a.63.63 0 00-.08-.763l.206.206c-.195-.195-.45-.16-.58.1l-.046.094c-.126.25-.42.55-.68.68l-.094.046c-.25.126-.685.227-.953.227a.876.876 0 01-.727-.453l-.046-.094a.744.744 0 01.126-.806l-.206.206a.499.499 0 01.706 0l-.206-.206c.195.195.511.195.706 0l-.206.206c.195-.195.546-.45.806-.58l.094-.046c.25-.126.221-.227-.047-.227a2.48 2.48 0 01-.953-.227l-.094-.046a3.69 3.69 0 01-.803-.577l-.3-.3a3.62 3.62 0 01-.577-.803l-.046-.094a2.488 2.488 0 01-.227-.958v-.99c0-.279.138-.69.304-.91l.892-1.19c.168-.224.358-.191.425.08l.258 1.03a5.4 5.4 0 00.348.938l.046.094c.126.25.385.611.58.806l-.206-.206a.499.499 0 010 .706l.206-.206c-.195.195-.16.45.1.58l.094.046C8.797 7.4 9 7.273 9 7v.5c0-.276.096-.693.227-.953l.046-.094a.74.74 0 00-.123-.803L8.147 4.647l.206.206c-.195-.195-.16-.45.1-.58l.094-.046a.74.74 0 01.803.123l1.003 1.003-.206-.206zM9.35 3.35c-.193-.193-.141-.42.125-.508l.55-.184c.263-.087.684-.088.95 0l.55.184c.263.087.319.314.125.508l-.3.3c-.193.193-.582.35-.85.35-.276 0-.656-.156-.85-.35l-.3-.3z"
          fill="url(#ME_svg_prefix__b)"
        />
        <path
          d="M9.5 9.006c0 .273.076.285.185.02C9.685 9.025 10 8 10.5 8c.5 0 .823 1.042.823 1.042.098.253.177.236.177-.047V8.5c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5v.506z"
          fill="#215F90"
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15",
};
export default SvgComponent;
