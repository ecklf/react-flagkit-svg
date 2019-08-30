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
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AF_svg_prefix__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AF_svg_prefix__b">
          <stop stopColor="#1AB11F" offset="0%" />
          <stop stopColor="#149818" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AF_svg_prefix__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AF_svg_prefix__d">
          <stop stopColor="#DC0D18" offset="0%" />
          <stop stopColor="#BE0711" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#AF_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#AF_svg_prefix__b)" d="M10 0h11v15H10z" />
        <path fill="url(#AF_svg_prefix__c)" d="M0 0h7v15H0z" />
        <path fill="url(#AF_svg_prefix__d)" d="M7 0h7v15H7z" />
        <path
          d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 00.502-.865A1.499 1.499 0 019 7a.5.5 0 00-1 0zm3.846 2.107A2.498 2.498 0 0013 7a.5.5 0 10-1 0c0 .518-.264.99-.693 1.265a.5.5 0 10.539.842z"
          fill="#FFF"
          fillRule="nonzero"
          opacity={0.75}
        />
        <ellipse
          fillOpacity={0.5}
          fill="#FFF"
          cx={10.5}
          cy={6.5}
          rx={1}
          ry={1.5}
        />
      </g>
    </svg>
  );
};

SvgComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SvgComponent.defaultProps = {
  size: "15",
  width: "21",
  height: "15"
};
export default SvgComponent;
