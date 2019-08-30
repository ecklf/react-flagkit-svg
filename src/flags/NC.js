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
      <title>{"NC"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_linearGradient-2"
        >
          <stop stopColor="#094CC7" offset="0%" />
          <stop stopColor="#003CAB" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_linearGradient-3"
        >
          <stop stopColor="#2AAD55" offset="0%" />
          <stop stopColor="#219447" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_linearGradient-4"
        >
          <stop stopColor="#F65D55" offset="0%" />
          <stop stopColor="#E9443C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_linearGradient-5"
        >
          <stop stopColor="#FAE749" offset="0%" />
          <stop stopColor="#FBE533" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="NC_svg_linearGradient-6"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="NC_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="NC_svg_NC">
          <rect
            id="NC_svg_FlagBackground"
            fill="url(#NC_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="NC_svg_Rectangle-2"
            fill="url(#NC_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="NC_svg_Rectangle-2"
            fill="url(#NC_svg_linearGradient-3)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <rect
            id="NC_svg_Rectangle-2"
            fill="url(#NC_svg_linearGradient-4)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <circle
            id="NC_svg_Oval-95"
            fill="url(#NC_svg_linearGradient-5)"
            cx={10.5}
            cy={7.5}
            r={3.5}
          />
          <path
            d="M10.0917899,6.21120062 C10.0339787,6.29276685 10,6.39241536 10,6.5 C10,6.77614237 10.2238576,7 10.5,7 C10.7761424,7 11,6.77614237 11,6.5 C11,6.26021849 10.8312137,6.05985912 10.6059713,6.01125212 C10.6538139,5.98687284 10.7019029,5.9607816 10.75,5.9330127 C11.3478658,5.58783473 11.7206029,5.11414631 11.5825318,4.875 C11.4444606,4.63585369 10.8478658,4.72180933 10.25,5.0669873 C9.65213422,5.41216527 9.27939706,5.88585369 9.41746825,6.125 C9.50287427,6.27292757 9.7637219,6.29646371 10.0917899,6.21120062 L10.0917899,6.21120062 Z M10.5,10.5 C9.67157288,10.5 9.5,9.77614237 9.5,9.5 C9.5,9.22385763 9.67157288,9 10.5,9 C11.3284271,9 11.5,9.22385763 11.5,9.5 C11.5,9.77614237 11.3284271,10.5 10.5,10.5 Z M10.5,9 C10.2238576,9 10,8.77614237 10,8.5 C10,8.22385763 10.2238576,8 10.5,8 C10.7761424,8 11,8.22385763 11,8.5 C11,8.77614237 10.7761424,9 10.5,9 Z M10.5,8 C10.2238576,8 10,7.77614237 10,7.5 C10,7.22385763 10.2238576,7 10.5,7 C10.7761424,7 11,7.22385763 11,7.5 C11,7.77614237 10.7761424,8 10.5,8 Z"
            id="NC_svg_Combined-Shape"
            fill="url(#NC_svg_linearGradient-6)"
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
