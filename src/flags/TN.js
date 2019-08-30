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
      <title>{"TN"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TN_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TN_svg_linearGradient-2"
        >
          <stop stopColor="#E92434" offset="0%" />
          <stop stopColor="#E11324" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="TN_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="TN_svg_TN">
          <rect
            id="TN_svg_FlagBackground"
            fill="url(#TN_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="TN_svg_Mask-Copy"
            fill="url(#TN_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M11.858354,4.27335677 C11.4406897,4.09731458 10.9817094,4 10.5,4 C8.56700338,4 7,5.56700338 7,7.5 C7,9.43299662 8.56700338,11 10.5,11 C10.9817094,11 11.4406897,10.9026854 11.858354,10.7266432 C10.248101,10.5332377 9,9.16237367 9,7.5 C9,5.83762633 10.248101,4.46676227 11.858354,4.27335677 L11.858354,4.27335677 Z M10.5,12 C8.01471863,12 6,9.98528137 6,7.5 C6,5.01471863 8.01471863,3 10.5,3 C12.9852814,3 15,5.01471863 15,7.5 C15,9.98528137 12.9852814,12 10.5,12 Z M12.2656441,8.37757672 L13.6180572,8.88279532 L12.8426963,7.66497659 L13.7411064,6.53487647 L12.3432923,6.89596178 L11.5461272,5.69230289 L11.4575914,7.13328462 L10.0665062,7.51948263 L11.4096022,8.048973 L11.3470294,9.49131539 L12.2656441,8.37757672 Z"
            id="TN_svg_Oval-41"
            fill="url(#TN_svg_linearGradient-1)"
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
