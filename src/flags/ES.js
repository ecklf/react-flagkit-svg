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
          id="ES_svg_prefix__a"
        >
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ES_svg_prefix__b"
        >
          <stop stopColor="#DD172C" offset="0%" />
          <stop stopColor="#C60B1F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ES_svg_prefix__c"
        >
          <stop stopColor="#FFD133" offset="0%" />
          <stop stopColor="#FFC500" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ES_svg_prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#ES_svg_prefix__b)" d="M0 0h21v4H0zM0 11h21v4H0z" />
        <path fill="url(#ES_svg_prefix__c)" d="M0 4h21v7H0z" />
        <path fill="#FFEDB1" d="M5.5 7h1v.5h-1z" />
        <path
          d="M4.915 8.46c.025.295.291.54.585.54s.56-.246.585-.54L6.207 7H4.793l.122 1.46zm-.624-1.465a.456.456 0 01.465-.495h1.488a.45.45 0 01.465.495l-.126 1.506A1.104 1.104 0 015.5 9.5a1.104 1.104 0 01-1.083-.999L4.29 6.995z"
          fill="#A41517"
          fillRule="nonzero"
        />
        <path
          fill="#A41517"
          d="M4.5 7.5h2V8H6l-.5 1L5 8h-.5zM3 6h1v3.5H3zM7 6h1v3.5H7zM4.5 5.5c0-.276.214-.5.505-.5h.99c.279 0 .505.232.505.5v.248c0 .139-.108.252-.245.252h-1.51a.245.245 0 01-.245-.252V5.5z"
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
