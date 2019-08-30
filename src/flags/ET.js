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
          id="ET_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_prefix__b"
        >
          <stop stopColor="#20AA46" offset="0%" />
          <stop stopColor="#168835" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_prefix__c"
        >
          <stop stopColor="#E92F3B" offset="0%" />
          <stop stopColor="#D81824" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_prefix__d"
        >
          <stop stopColor="#FADF50" offset="0%" />
          <stop stopColor="#FCDC34" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_prefix__e"
        >
          <stop stopColor="#205CCA" offset="0%" />
          <stop stopColor="#154BAD" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ET_svg_prefix__f"
        >
          <stop stopColor="#FFDB3D" offset="0%" />
          <stop stopColor="#FDD420" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ET_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#ET_svg_prefix__b)" d="M0 0h21v5H0z" />
        <path fill="url(#ET_svg_prefix__c)" d="M0 10h21v5H0z" />
        <path fill="url(#ET_svg_prefix__d)" d="M0 5h21v5H0z" />
        <circle fill="url(#ET_svg_prefix__e)" cx={10.5} cy={7.5} r={3.5} />
        <path
          d="M10.5 8.475L9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722L10.5 8.475zm0-.614l.544.388-.2-.637.536-.398-.668-.006-.212-.634-.212.634-.668.006.537.398-.201.637.544-.388z"
          fill="url(#ET_svg_prefix__f)"
          fillRule="nonzero"
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
