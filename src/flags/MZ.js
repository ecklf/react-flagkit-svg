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
          id="MZ_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_prefix__b"
        >
          <stop stopColor="#FFE547" offset="0%" />
          <stop stopColor="#FCE032" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_prefix__c"
        >
          <stop stopColor="#118C81" offset="0%" />
          <stop stopColor="#0D7168" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_prefix__d"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_prefix__e"
        >
          <stop stopColor="#EF2147" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MZ_svg_prefix__f"
        >
          <stop stopColor="#FDE444" offset="0%" />
          <stop stopColor="#FCE032" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MZ_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#MZ_svg_prefix__b)" d="M0 11h21v4H0z" />
        <path fill="url(#MZ_svg_prefix__c)" d="M0 0h21v4H0z" />
        <path fill="url(#MZ_svg_prefix__a)" d="M0 4h21v7H0z" />
        <path fill="url(#MZ_svg_prefix__d)" d="M0 5h21v5H0z" />
        <path fill="url(#MZ_svg_prefix__e)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#MZ_svg_prefix__f)"
          d="M3.5 8.456L2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z"
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
