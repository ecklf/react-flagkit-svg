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
          id="SX_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SX_svg_prefix__b"
        >
          <stop stopColor="#0740AA" offset="0%" />
          <stop stopColor="#012F85" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SX_svg_prefix__c"
        >
          <stop stopColor="#F02C33" offset="0%" />
          <stop stopColor="#D82027" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SX_svg_prefix__d"
        >
          <stop stopColor="#E72C33" offset="0%" />
          <stop stopColor="#D82027" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SX_svg_prefix__e"
        >
          <stop stopColor="#78C1F0" offset="0%" />
          <stop stopColor="#67B1E0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SX_svg_prefix__f"
        >
          <stop stopColor="#F7E14B" offset="0%" />
          <stop stopColor="#F7DF3E" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SX_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#SX_svg_prefix__b)" d="M0 7h21v8H0z" />
        <path fill="url(#SX_svg_prefix__c)" d="M0 0h21v7H0z" />
        <path fill="url(#SX_svg_prefix__a)" d="M0 0l10 7.5L0 15z" />
        <path
          d="M1.5 7V5.506A.997.997 0 012.495 4.5h2.01c.55 0 .995.457.995 1.006V7c0 .845-.384 1.447-1.003 1.798a2.304 2.304 0 01-1.03.3 2.312 2.312 0 01-.964-.3C1.884 8.447 1.5 7.845 1.5 7z"
          fill="url(#SX_svg_prefix__d)"
          fillRule="nonzero"
        />
        <path
          d="M2 7V5.506c0-.28.216-.506.495-.506h2.01c.273 0 .495.232.495.506V7c0 1.5-1.5 1.6-1.5 1.6S2 8.5 2 7z"
          fill="url(#SX_svg_prefix__e)"
        />
        <path fill="#FFF" d="M3 6.5l.5-.5.5.5v1H3z" />
        <path
          d="M1.001 9.368A3.389 3.389 0 003.5 10.5c.948 0 1.915-.448 2.521-1.162a.5.5 0 00-.762-.647A2.395 2.395 0 013.5 9.5a2.39 2.39 0 01-1.743-.787.5.5 0 10-.756.655z"
          fill="#F9D835"
          fillRule="nonzero"
        />
        <circle fill="url(#SX_svg_prefix__f)" cx={3.5} cy={4.5} r={1} />
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
