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
          id="RW_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RW_svg_prefix__b"
        >
          <stop stopColor="#2D754D" offset="0%" />
          <stop stopColor="#235F3E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RW_svg_prefix__c"
        >
          <stop stopColor="#25B1EB" offset="0%" />
          <stop stopColor="#1AA3DC" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RW_svg_prefix__d"
        >
          <stop stopColor="#FAD546" offset="0%" />
          <stop stopColor="#FAD12F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RW_svg_prefix__e"
        >
          <stop stopColor="#EDC738" offset="0%" />
          <stop stopColor="#E5BE2A" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#RW_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#RW_svg_prefix__b)" d="M0 11h21v4H0z" />
        <path fill="url(#RW_svg_prefix__c)" d="M0 0h21v7H0z" />
        <path fill="url(#RW_svg_prefix__d)" d="M0 7h21v4H0z" />
        <path
          fill="url(#RW_svg_prefix__e)"
          d="M16 4.5l-.765.848.058-1.14-1.14.057L15 3.5l-.848-.765 1.14.058-.057-1.14L16 2.5l.765-.848-.058 1.14 1.14-.057L17 3.5l.848.765-1.14-.058.057 1.14z"
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
