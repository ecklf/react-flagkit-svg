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
      <title>{"MK"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MK_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MK_svg_linearGradient-2"
        >
          <stop stopColor="#E81B26" offset="0%" />
          <stop stopColor="#D00914" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MK_svg_linearGradient-3"
        >
          <stop stopColor="#FFE94F" offset="0%" />
          <stop stopColor="#FFE633" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="MK_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="MK_svg_MK">
          <rect
            id="MK_svg_FlagBackground"
            fill="url(#MK_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="MK_svg_Mask-Copy"
            fill="url(#MK_svg_linearGradient-2)"
            x={-0.00384896797}
            y={-0.00201967131}
            width={21}
            height={15}
          />
          <circle
            id="MK_svg_Oval-12"
            fill="url(#MK_svg_linearGradient-3)"
            cx={10.496151}
            cy={7.49798033}
            r={2.5}
          />
          <path
            d="M13.9614128,7.99301773 L20.996151,8.99798033 L20.996151,5.99798033 L13.9614128,7.00294293 C13.9843086,7.16466342 13.996151,7.3299389 13.996151,7.49798033 C13.996151,7.66602176 13.9843086,7.83129724 13.9614128,7.99301773 Z M7.03088925,7.00294293 L-0.00384896797,5.99798033 L-0.00384896797,8.99798033 L7.03088925,7.99301773 C7.00799345,7.83129724 6.99615103,7.66602176 6.99615103,7.49798033 C6.99615103,7.3299389 7.00799345,7.16466342 7.03088925,7.00294293 Z M11.1826895,4.06528809 L11.996151,-0.00201967131 L8.99615103,-0.00201967131 L9.80961258,4.06528809 C10.0316124,4.02113535 10.2611776,3.99798033 10.496151,3.99798033 C10.7311244,3.99798033 10.9606897,4.02113535 11.1826895,4.06528809 Z M9.80961258,10.9306726 L8.99615103,14.9979803 L11.996151,14.9979803 L11.1826895,10.9306726 C10.9606897,10.9748253 10.7311244,10.9979803 10.496151,10.9979803 C10.2611776,10.9979803 10.0316124,10.9748253 9.80961258,10.9306726 Z"
            id="MK_svg_Combined-Shape"
            fill="url(#MK_svg_linearGradient-3)"
          />
          <path
            d="M7.65221193,9.53853436 L-0.540000021,15.4165263 L1.4673918,17.6459608 L8.1696541,10.112874 C7.97687032,9.94122955 7.80319319,9.7485866 7.65221193,9.53853436 Z M13.3400901,5.4574263 L21.5323021,-0.420565619 L19.5249103,-2.6500001 L12.822648,4.88308666 C13.0154317,5.0547311 13.1891089,5.24737406 13.3400901,5.4574263 Z M12.822648,10.112874 L19.5249103,17.6459608 L21.5323021,15.4165263 L13.3400901,9.53853436 C13.1891089,9.7485866 13.0154317,9.94122955 12.822648,10.112874 Z M8.1696541,4.88308666 L1.4673918,-2.6500001 L-0.540000021,-0.420565619 L7.65221193,5.4574263 C7.80319319,5.24737406 7.97687032,5.0547311 8.1696541,4.88308666 Z"
            id="MK_svg_Combined-Shape"
            fill="url(#MK_svg_linearGradient-3)"
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
