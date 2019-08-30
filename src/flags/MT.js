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
          id="MT_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MT_svg_prefix__b"
        >
          <stop stopColor="#DE233C" offset="0%" />
          <stop stopColor="#CD1931" offset="100%" />
        </linearGradient>
        <path d="M4 3V2H3v1H2v1h1v1h1V4h1V3H4z" id="MT_svg_prefix__c" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MT_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#MT_svg_prefix__b)" d="M11 0h10v15H11z" />
        <path fill="url(#MT_svg_prefix__a)" d="M0 0h11v15H0z" />
        <use fill="#CCCCCD" xlinkHref="#MT_svg_prefix__c" />
        <path
          strokeOpacity={0.66}
          stroke="#7B716A"
          strokeWidth={0.5}
          d="M4.25 2.75h1v1.5h-1v1h-1.5v-1h-1v-1.5h1v-1h1.5v1z"
        />
        <circle fill="#7B716A" cx={3.5} cy={3.5} r={1} />
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
