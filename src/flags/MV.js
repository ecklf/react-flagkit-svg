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
          id="MV_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MV_svg_prefix__b"
        >
          <stop stopColor="#F32249" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MV_svg_prefix__c"
        >
          <stop stopColor="#15A04F" offset="0%" />
          <stop stopColor="#0F7E3D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MV_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#MV_svg_prefix__b)" d="M0 0h21v15H0z" />
        <rect
          fill="url(#MV_svg_prefix__c)"
          x={3}
          y={3}
          width={15}
          height={9}
          rx={0.5}
        />
        <path
          d="M12.25 4.08a3.5 3.5 0 100 6.839 3.501 3.501 0 010-6.838z"
          fill="url(#MV_svg_prefix__a)"
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
