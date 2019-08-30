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
          id="TZ_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TZ_svg_prefix__b"
        >
          <stop stopColor="#33CC4D" offset="0%" />
          <stop stopColor="#2AB441" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TZ_svg_prefix__c"
        >
          <stop stopColor="#2DAFE4" offset="0%" />
          <stop stopColor="#1BA4DC" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TZ_svg_prefix__d"
        >
          <stop stopColor="#FFD84F" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TZ_svg_prefix__e"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#TZ_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#TZ_svg_prefix__b)" d="M.001 10.004l21-10h-21z" />
        <path fill="url(#TZ_svg_prefix__c)" d="M.001 15.004h21v-10z" />
        <path
          fill="url(#TZ_svg_prefix__d)"
          d="M2.313 17.004L22.63 4.309l-3.94-6.305-20.317 12.695z"
        />
        <path
          fill="url(#TZ_svg_prefix__e)"
          d="M-.47 17.308L24.123 1.94l-2.65-4.24L-3.12 13.068z"
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
