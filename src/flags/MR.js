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
      <title>{"MR"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MR_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MR_svg_linearGradient-2"
        >
          <stop stopColor="#108B4D" offset="0%" />
          <stop stopColor="#0A6135" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MR_svg_linearGradient-3"
        >
          <stop stopColor="#FFC941" offset="0%" />
          <stop stopColor="#FFC42E" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="MR_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="MR_svg_MR">
          <rect
            id="MR_svg_FlagBackground"
            fill="url(#MR_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="MR_svg_Mask-Copy"
            fill="url(#MR_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M14.8602372,5.80000019 C14.896665,6.03057572 14.9155813,6.26697421 14.9155813,6.50779084 C14.9155813,8.99307222 12.9008627,11.0077908 10.4155813,11.0077908 C7.93029993,11.0077908 5.9155813,8.99307222 5.9155813,6.50779084 C5.9155813,6.26697421 5.9344976,6.03057572 5.97092538,5.80000019 C6.31044035,7.94901552 8.17111656,9.59220954 10.4155813,9.59220954 C12.660046,9.59220954 14.5207223,7.94901552 14.8602372,5.80000019 L14.8602372,5.80000019 Z M10.5,6.42306502 L9.26393202,7.30422607 L9.71999997,5.85636182 L8.5,4.95308506 L10.0179335,4.93941679 L10.5,3.5 L10.9820665,4.93941679 L12.5,4.95308506 L11.28,5.85636182 L11.736068,7.30422607 L10.5,6.42306502 L10.5,6.42306502 Z"
            id="MR_svg_Star-8"
            fill="url(#MR_svg_linearGradient-3)"
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
