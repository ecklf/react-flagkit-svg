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
      <title>{"IQ"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IQ_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IQ_svg_linearGradient-2"
        >
          <stop stopColor="#DF1E35" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IQ_svg_linearGradient-3"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="IQ_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="IQ_svg_IQ">
          <rect
            id="IQ_svg_FlagBackground"
            fill="url(#IQ_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="IQ_svg_Rectangle-2"
            fill="url(#IQ_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="IQ_svg_Rectangle-2"
            fill="url(#IQ_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="IQ_svg_Rectangle-2"
            fill="url(#IQ_svg_linearGradient-1)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <path
            d="M14,6.25577831 C14,6.11451585 14.0922852,6.04614258 14.2319336,6.1159668 L14.7680664,6.3840332 C14.8961598,6.4480799 15,6.60742188 15,6.74884939 L15,8.75115061 C15,8.88858633 14.8929825,9 14.7476578,9 L14.2523422,9 C14.1129775,9 14,8.88605976 14,8.74422169 L14,6.25577831 Z"
            id="IQ_svg_Rectangle-213"
            fill="#0F7A40"
          />
          <path
            d="M8,6.25577831 C8,6.11451585 8.09228516,6.04614258 8.23193359,6.1159668 L8.76806641,6.3840332 C8.89615979,6.4480799 9,6.60742188 9,6.74884939 L9,8.75115061 C9,8.88858633 8.89298248,9 8.74765778,9 L8.25234222,9 C8.11297746,9 8,8.88605976 8,8.74422169 L8,6.25577831 Z"
            id="IQ_svg_Rectangle-213"
            fill="#0F7A40"
          />
          <path
            d="M12,6.74884939 C12,6.61141367 12.0922852,6.45385742 12.2319336,6.3840332 L12.7680664,6.1159668 C12.8961598,6.0519201 13,6.11394024 13,6.25577831 L13,8.74422169 C13,8.88548415 12.8929825,9 12.7476578,9 L12.2523422,9 C12.1129775,9 12,8.89257812 12,8.75115061 L12,6.74884939 Z"
            id="IQ_svg_Rectangle-213"
            fill="#0F7A40"
          />
          <path
            d="M10,7.74769449 C10,7.6108966 10.0922852,7.45385742 10.2319336,7.3840332 L10.7680664,7.1159668 C10.8961598,7.0519201 11,7.11181023 11,7.2423206 L11,8.04478441 L12.5,8.0447844 L12.5,8.99999997 L11.2476945,9 C11.1108966,9 10.8929825,9 10.7476578,9 L10.2523422,9 C10.1129775,9 10,8.88229752 10,8.75230551 L10,7.74769449 Z"
            id="IQ_svg_Rectangle-213"
            fill="#0F7A40"
          />
          <path
            d="M6,7.74769449 C6,7.6108966 6.09228516,7.45385742 6.23193359,7.3840332 L6.76806641,7.1159668 C6.89615979,7.0519201 7,7.11181023 7,7.2423206 L7,8.04478441 L8.5,8.0447844 L8.5,8.99999997 L7.24769449,9 C7.1108966,9 6.89298248,9 6.74765778,9 L6.25234222,9 C6.11297746,9 6,8.88229752 6,8.75230551 L6,7.74769449 Z"
            id="IQ_svg_Rectangle-213"
            fill="#0F7A40"
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
