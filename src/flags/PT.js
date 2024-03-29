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
          id="PT_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PT_svg_prefix__b"
        >
          <stop stopColor="#FF2936" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PT_svg_prefix__c"
        >
          <stop stopColor="#128415" offset="0%" />
          <stop stopColor="#0A650C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PT_svg_prefix__d"
        >
          <stop stopColor="#FAF94F" offset="0%" />
          <stop stopColor="#F8F736" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PT_svg_prefix__e"
        >
          <stop stopColor="#1D50B5" offset="0%" />
          <stop stopColor="#15439D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#PT_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#PT_svg_prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#PT_svg_prefix__c)" d="M0 0h8v15H0z" />
        <path
          d="M8 9.5a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 110-6 3 3 0 010 6z"
          fill="url(#PT_svg_prefix__d)"
          fillRule="nonzero"
        />
        <path
          d="M7 6.256A.25.25 0 017.245 6h1.51A.25.25 0 019 6.256V8A.997.997 0 018 9c-.552 0-1-.443-1-.999V6.256z"
          fill="url(#PT_svg_prefix__a)"
        />
        <path
          d="M8 8c.276 0 .5-.724.5-1a.5.5 0 00-1 0c0 .276.224 1 .5 1z"
          fill="url(#PT_svg_prefix__e)"
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
