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
      <title>{"IM"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IM_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IM_svg_linearGradient-2"
        >
          <stop stopColor="#E52D42" offset="0%" />
          <stop stopColor="#CB1D31" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="IM_svg_linearGradient-3"
        >
          <stop stopColor="#F8DD4E" offset="0%" />
          <stop stopColor="#F9DA38" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="IM_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="IM_svg_IM">
          <rect
            id="IM_svg_FlagBackground"
            fill="url(#IM_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="IM_svg_Mask-Copy"
            fill="url(#IM_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <g id="IM_svg_Group" transform="translate(4.000000, 1.500000)">
            <path
              d="M12.5,1.5 L10.5,1.5 L9,5 L7.5,4 C7.5,4 6.41105352,1.41105352 6,1 C5.58894648,0.588946476 5.17216615,0.9691953 3.8704834,1.34875489 C2.56880065,1.72831448 2.51831055,2.1636963 2.00915527,2.1636963 C1.80314029,2.1636963 1.14767711,1.40422935 0.782226563,1.17736817 C0.244485172,0.843553794 0.0506591787,1.00000001 0.180297852,1.50000001 C0.236332323,1.71611789 0.663304982,1.98283825 0.933837912,2.37072755 C1.28919703,2.88024038 1.5,3.5 1.5,3.5 C1.5,3.5 1.98753808,3.0443146 2.24987793,2.96936036 C2.64797849,2.85561734 3.09636695,3.05077741 3.62158203,2.96936036 C4.28944761,2.86583011 5,2.5 5,2.5 L5.17382813,4.40698243 C5.17382813,4.40698243 2.79516602,6.61738015 3,7.5 C3.20483398,8.38261985 5.46891117,9.46643071 6,10.2397461 C6.53108883,11.0130616 5.68432617,11.3013297 5.68432617,11.6727295 C5.68432617,12.0441293 5.59606207,12.5390118 6,12.3903809 C6.40393793,12.2417499 6.45284365,11.5978585 6.82336426,11.0130615 C7.07825443,10.6107654 7.28346625,10.3987488 7.31872559,10.2397461 C7.40523958,9.84960937 6.29106073,8.82547963 5.68432617,8.0994873 C5.39530878,7.75366159 4.81274414,7.2845459 4.81274414,7.2845459 L6.53108883,6 C6.53108883,6 9.49719238,7.22513437 10.1662598,6.81689453 C10.8353271,6.40865469 11,2.5 11,2.5 L13.0621778,2 L12.5,1.5 L12.5,1.5 Z"
              id="IM_svg_Star-121"
              fill="url(#IM_svg_linearGradient-1)"
            />
            <path
              d="M7.5,10 C7.22385763,10 7,9.77614237 7,9.5 C7,9.22385763 7.22385763,9 7.5,9 C7.77614237,9 8,9.22385763 8,9.5 C8,9.77614237 7.77614237,10 7.5,10 Z M9.5,2 C9.22385763,2 9,1.77614237 9,1.5 C9,1.22385763 9.22385763,1 9.5,1 C9.77614237,1 10,1.22385763 10,1.5 C10,1.77614237 9.77614237,2 9.5,2 Z M9.5,6 C9.22385763,6 9,5.77614237 9,5.5 C9,5.22385763 9.22385763,5 9.5,5 C9.77614237,5 10,5.22385763 10,5.5 C10,5.77614237 9.77614237,6 9.5,6 Z M3.5,8 C3.22385763,8 3,7.77614237 3,7.5 C3,7.22385763 3.22385763,7 3.5,7 C3.77614237,7 4,7.22385763 4,7.5 C4,7.77614237 3.77614237,8 3.5,8 Z M5.5,2 C5.22385763,2 5,1.77614237 5,1.5 C5,1.22385763 5.22385763,1 5.5,1 C5.77614237,1 6,1.22385763 6,1.5 C6,1.77614237 5.77614237,2 5.5,2 Z M6.5,6 C6.22385763,6 6,5.55228475 6,5 C6,4.44771525 6.22385763,4 6.5,4 C6.77614237,4 7,4.44771525 7,5 C7,5.55228475 6.77614237,6 6.5,6 Z M1.5,4 C1.22385763,4 1,3.77614237 1,3.5 C1,3.22385763 1.22385763,3 1.5,3 C1.77614237,3 2,3.22385763 2,3.5 C2,3.77614237 1.77614237,4 1.5,4 Z"
              id="IM_svg_Combined-Shape"
              fill="url(#IM_svg_linearGradient-3)"
            />
          </g>
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
