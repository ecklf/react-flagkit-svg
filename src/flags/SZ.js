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
          id="SZ_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SZ_svg_prefix__b"
        >
          <stop stopColor="#486BCA" offset="0%" />
          <stop stopColor="#3E5FBA" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SZ_svg_prefix__c"
        >
          <stop stopColor="#FFDF20" offset="0%" />
          <stop stopColor="#FFDA00" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SZ_svg_prefix__d"
        >
          <stop stopColor="#CF1615" offset="0%" />
          <stop stopColor="#B20D0C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="SZ_svg_prefix__f"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <ellipse id="SZ_svg_prefix__e" cx={4.5} cy={2.5} rx={4.5} ry={2.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SZ_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#SZ_svg_prefix__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <path fill="url(#SZ_svg_prefix__c)" d="M0 3h21v9H0z" />
        <path fill="url(#SZ_svg_prefix__d)" d="M0 4h21v7H0z" />
        <g transform="translate(6 5)">
          <mask id="SZ_svg_prefix__g" fill="#fff">
            <use xlinkHref="#SZ_svg_prefix__e" />
          </mask>
          <use fill="url(#SZ_svg_prefix__a)" xlinkHref="#SZ_svg_prefix__e" />
          <path
            fill="url(#SZ_svg_prefix__f)"
            mask="url(#SZ_svg_prefix__g)"
            transform="matrix(-1 0 0 1 5 0)"
            d="M0 0h5v5H1z"
          />
          <circle
            fill="#1A1A1A"
            mask="url(#SZ_svg_prefix__g)"
            cx={5.5}
            cy={2.5}
            r={1}
          />
          <circle
            fill="#F6F6F6"
            mask="url(#SZ_svg_prefix__g)"
            cx={3.5}
            cy={2.5}
            r={1}
          />
        </g>
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
