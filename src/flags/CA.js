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
      viewBox="0 0 21 15"
      size={size}
      {...otherProps}
    >
      <title>{"CA"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CA_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="CA_svg_linearGradient-2"
        >
          <stop stopColor="#FF3131" offset="0%" />
          <stop stopColor="#FF0000" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="CA_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="CA_svg_CA">
          <rect
            id="CA_svg_FlagBackground"
            fill="url(#CA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="CA_svg_Mask"
            fill="url(#CA_svg_linearGradient-2)"
            x={10}
            y={0}
            width={11}
            height={15}
          />
          <rect
            id="CA_svg_Rectangle-2"
            fill="url(#CA_svg_linearGradient-2)"
            x={0}
            y={0}
            width={7}
            height={15}
          />
          <rect
            id="CA_svg_Rectangle-2-Copy"
            fill="url(#CA_svg_linearGradient-1)"
            x={6}
            y={0}
            width={9}
            height={15}
          />
          <path
            d="M11.6741867,7.32581329 L12.3258133,6.67418671 C12.4215317,6.57846832 12.5808177,6.58081774 12.6805115,6.68051147 L13,7 L14,6.5 L13.5,7.5 L13.8194885,7.81948853 C13.921875,7.921875 13.9229621,8.07703795 13.8279309,8.17206907 L12.5,9.5 L11,9.5 L10.75,11 L10.25,11 L10,9.5 L8.5,9.5 L7.17206907,8.17206907 C7.08064651,8.08064651 7.08081774,7.91918226 7.18051147,7.81948853 L7.5,7.5 L7,6.5 L8,7 L8.31948853,6.68051147 C8.421875,6.578125 8.57798604,6.57798604 8.67418671,6.67418671 L9.32581329,7.32581329 C9.42153168,7.42153168 9.47771727,7.38858633 9.45023012,7.25115061 L9,5 L10,5.5 L10.5,4 L11,5.5 L12,5 L11.5497699,7.25115061 C11.5214844,7.39257812 11.577986,7.42201396 11.6741867,7.32581329 Z"
            id="CA_svg_Combined-Shape"
            fill="url(#CA_svg_linearGradient-2)"
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
  size: "25",
  width: "37",
  height: "25",
};
export default SvgComponent;
