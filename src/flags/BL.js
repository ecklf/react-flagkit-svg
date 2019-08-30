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
      <title>{"BL"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BL_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BL_svg_linearGradient-2"
        >
          <stop stopColor="#216CD3" offset="0%" />
          <stop stopColor="#1557B2" offset="100%" />
        </linearGradient>
        <path
          d="M0.5,0 L7.49999992,0 L7.49999998,4.49121523 C7.49999999,5.04835167 7.16440529,5.78765261 6.74055213,6.15095532 L5.1460309,7.5176878 C4.51309551,8.06020385 3.48356295,8.05733967 2.8539691,7.5176878 L1.25944787,6.15095532 C0.840016394,5.79144262 0.5,5.04991192 0.5,4.49121523 L0.5,0 Z"
          id="BL_svg_path-3"
        />
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BL_svg_linearGradient-5"
        >
          <stop stopColor="#F7E14B" offset="0%" />
          <stop stopColor="#F7DF3E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BL_svg_linearGradient-6"
        >
          <stop stopColor="#E12539" offset="0%" />
          <stop stopColor="#CA192C" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="BL_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="BL_svg_BL">
          <rect
            id="BL_svg_FlagBackground"
            fill="url(#BL_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <g
            id="BL_svg_Rectangle-1693"
            transform="translate(6.500000, 5.000000)"
          >
            <mask id="BL_svg_mask-4" fill="white">
              <use xlinkHref="#path-3" />
            </mask>
            <use
              id="BL_svg_Combined-Shape"
              fill="url(#BL_svg_linearGradient-2)"
              xlinkHref="#path-3"
            />
            <path
              d="M2,2 C1.72385763,2 1.5,1.77614237 1.5,1.5 C1.5,1.22385763 1.72385763,1 2,1 C2.27614237,1 2.5,1.22385763 2.5,1.5 C2.5,1.77614237 2.27614237,2 2,2 Z M4,2 C3.72385763,2 3.5,1.77614237 3.5,1.5 C3.5,1.22385763 3.72385763,1 4,1 C4.27614237,1 4.5,1.22385763 4.5,1.5 C4.5,1.77614237 4.27614237,2 4,2 Z M6,2 C5.72385763,2 5.5,1.77614237 5.5,1.5 C5.5,1.22385763 5.72385763,1 6,1 C6.27614237,1 6.5,1.22385763 6.5,1.5 C6.5,1.77614237 6.27614237,2 6,2 Z"
              id="BL_svg_Combined-Shape"
              fill="url(#BL_svg_linearGradient-5)"
              mask="url(#BL_svg_mask-4)"
            />
            <path
              d="M2.5,6.5 C2.22385763,6.5 2,6.27614237 2,6 C2,5.72385763 2.22385763,5.5 2.5,5.5 C2.77614237,5.5 3,5.72385763 3,6 C3,6.27614237 2.77614237,6.5 2.5,6.5 Z M4,7 C3.72385763,7 3.5,6.77614237 3.5,6.5 C3.5,6.22385763 3.72385763,6 4,6 C4.27614237,6 4.5,6.22385763 4.5,6.5 C4.5,6.77614237 4.27614237,7 4,7 Z M5.5,6.5 C5.22385763,6.5 5,6.27614237 5,6 C5,5.72385763 5.22385763,5.5 5.5,5.5 C5.77614237,5.5 6,5.72385763 6,6 C6,6.27614237 5.77614237,6.5 5.5,6.5 Z"
              id="BL_svg_Combined-Shape-Copy"
              fill="url(#BL_svg_linearGradient-5)"
              mask="url(#BL_svg_mask-4)"
            />
            <rect
              id="BL_svg_Rectangle-1425-Copy"
              fill="url(#BL_svg_linearGradient-6)"
              mask="url(#BL_svg_mask-4)"
              x={0.5}
              y={3}
              width={7}
              height={2}
            />
            <circle
              id="BL_svg_Oval-292"
              fill="#FFFFFF"
              mask="url(#BL_svg_mask-4)"
              cx={4}
              cy={4}
              r={1}
            />
          </g>
          <path
            d="M6.5,3.5 C6.5,3.5 8.5,3 10.5,3 C12.5,3 14.5,3.5 14.5,3.5 L14,5.5 C14,5.5 12.25,5 10.5,5 C8.75,5 7,5.5 7,5.5 L6.5,3.5 Z"
            id="BL_svg_Rectangle-1426"
            fill="url(#BL_svg_linearGradient-5)"
          />
          <path
            d="M10.5,4.5 C10.2238576,4.5 10,4.27614237 10,4 C10,3.72385763 10.2238576,3.5 10.5,3.5 C10.7761424,3.5 11,3.72385763 11,4 C11,4.27614237 10.7761424,4.5 10.5,4.5 Z M12.5,4.5 C12.2238576,4.5 12,4.27614237 12,4 C12,3.72385763 12.2238576,3.5 12.5,3.5 C12.7761424,3.5 13,3.72385763 13,4 C13,4.27614237 12.7761424,4.5 12.5,4.5 Z M8.5,4.5 C8.22385763,4.5 8,4.27614237 8,4 C8,3.72385763 8.22385763,3.5 8.5,3.5 C8.77614237,3.5 9,3.72385763 9,4 C9,4.27614237 8.77614237,4.5 8.5,4.5 Z"
            id="BL_svg_Combined-Shape"
            fill="#5E5216"
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
