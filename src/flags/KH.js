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
      <title>{"KH"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KH_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KH_svg_linearGradient-2"
        >
          <stop stopColor="#0F3EB6" offset="0%" />
          <stop stopColor="#09339F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KH_svg_linearGradient-3"
        >
          <stop stopColor="#ED1A3C" offset="0%" />
          <stop stopColor="#DE0B2D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="KH_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="KH_svg_KH">
          <rect
            id="KH_svg_FlagBackground"
            fill="url(#KH_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="KH_svg_Rectangle-2"
            fill="url(#KH_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={4}
          />
          <rect
            id="KH_svg_Rectangle-2"
            fill="url(#KH_svg_linearGradient-2)"
            x={0}
            y={11}
            width={21}
            height={4}
          />
          <rect
            id="KH_svg_Rectangle-2"
            fill="url(#KH_svg_linearGradient-3)"
            x={0}
            y={4}
            width={21}
            height={7}
          />
          <path
            d="M7.5,8 L8.5,8 L8.5,10 L6.5,10 L7.5,8 Z M9,8 L12,8 L12,10 L9,10 L9,8 Z M12.5,8 L13.5,8 L14.5,10 L12.5,10 L12.5,8 Z M12.5,6.50783157 C12.5,6.22736394 12.7319336,6 13,6 C13.2761424,6 13.5,6.22133017 13.5,6.50783157 L13.5,7.5 L12.5,7.5 L12.5,6.50783157 Z M9,6.54541016 L10,6.54541016 L10,5.99821125 C10,5.72305678 10.2319336,5.5 10.5,5.5 C10.7761424,5.5 11,5.72170461 11,5.99821125 L11,6.54541016 L12,6.54541016 L12,7.5 L9,7.5 L9,6.54541016 Z M7.5,6.50783157 C7.5,6.22736394 7.73193359,6 8,6 C8.27614237,6 8.5,6.22133017 8.5,6.50783157 L8.5,7.5 L7.5,7.5 L7.5,6.50783157 Z"
            id="KH_svg_Rectangle-621"
            fill="url(#KH_svg_linearGradient-1)"
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
