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
          id="GY_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_prefix__b"
        >
          <stop stopColor="#08C55F" offset="0%" />
          <stop stopColor="#009F49" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_prefix__c"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_prefix__d"
        >
          <stop stopColor="#FFD831" offset="0%" />
          <stop stopColor="#FDD117" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_prefix__e"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GY_svg_prefix__f"
        >
          <stop stopColor="#E92034" offset="0%" />
          <stop stopColor="#CE1225" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GY_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#GY_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#GY_svg_prefix__c)"
          fillRule="nonzero"
          d="M-1 15V0h1l21 7v1L0 15z"
        />
        <path
          fill="url(#GY_svg_prefix__d)"
          fillRule="nonzero"
          d="M0 1.054v12.892L19.338 7.5z"
        />
        <path
          fill="url(#GY_svg_prefix__e)"
          fillRule="nonzero"
          d="M-1 15V0h1l11.5 7.5L0 15z"
        />
        <path
          fill="url(#GY_svg_prefix__f)"
          fillRule="nonzero"
          d="M0 13.806L9.67 7.5 0 1.194z"
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
