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
      <title>{"AO"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AO_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AO_svg_linearGradient-2"
        >
          <stop stopColor="#FF323E" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AO_svg_linearGradient-3"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AO_svg_linearGradient-4"
        >
          <stop stopColor="#DD2137" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AO_svg_linearGradient-5"
        >
          <stop stopColor="#F8D84B" offset="0%" />
          <stop stopColor="#F9D536" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="AO_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="AO_svg_AO">
          <rect
            id="AO_svg_FlagBackground"
            fill="url(#AO_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="AO_svg_Mask-Copy"
            fill="url(#AO_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="AO_svg_Rectangle-2"
            fill="url(#AO_svg_linearGradient-3)"
            x={0}
            y={8}
            width={21}
            height={7}
          />
          <rect
            id="AO_svg_Rectangle-2"
            fill="url(#AO_svg_linearGradient-4)"
            x={0}
            y={0}
            width={21}
            height={8}
          />
          <path
            d="M10.6306023,8.85466006 L9.2226499,7.91602515 C8.99288556,7.76284892 8.93079862,7.45241425 9.08397485,7.2226499 C9.23715108,6.99288556 9.54758575,6.93079862 9.7773501,7.08397485 L11.3130296,8.10776118 C11.3806662,7.9788916 11.4351961,7.84059073 11.4744444,7.69411428 C11.760328,6.62718208 11.127163,5.53050816 10.0602308,5.24462454 C9.79349776,5.17315364 9.63520651,4.89898516 9.70667742,4.63225211 C9.77814832,4.36551905 10.0523168,4.20722781 10.3190499,4.27869871 C11.9194482,4.70752415 12.8691956,6.35253502 12.4403702,7.95293333 C12.3721274,8.20761904 12.2730844,8.44582688 12.1483226,8.66462317 L12.7773501,9.08397485 C13.0071144,9.23715108 13.0692014,9.54758575 12.9160251,9.7773501 C12.7628489,10.0071144 12.4524142,10.0692014 12.2226499,9.91602515 L11.5104877,9.44125038 C10.7832553,10.0719943 9.76598896,10.3421636 8.76613558,10.0742537 C8.49940253,10.0027828 8.34111129,9.72861429 8.41258219,9.46188124 C8.4840531,9.19514819 8.75822158,9.03685694 9.02495463,9.10832785 C9.59426997,9.26087543 10.1720537,9.15174297 10.6306023,8.85466006 Z M9.5,6.5 C9.22385763,6.5 9,6.27614237 9,6 C9,5.72385763 9.22385763,5.5 9.5,5.5 C9.77614237,5.5 10,5.72385763 10,6 C10,6.27614237 9.77614237,6.5 9.5,6.5 Z"
            id="AO_svg_Shape"
            fill="url(#AO_svg_linearGradient-5)"
            fillRule="nonzero"
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
