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
      <title>{"TM"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TM_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TM_svg_linearGradient-2"
        >
          <stop stopColor="#30C375" offset="0%" />
          <stop stopColor="#28AE67" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="TM_svg_linearGradient-3"
        >
          <stop stopColor="#DE414F" offset="0%" />
          <stop stopColor="#CA3745" offset="100%" />
        </linearGradient>
        <ellipse id="TM_svg_path-4" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="TM_svg_path-6" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="TM_svg_path-8" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="TM_svg_path-10" cx={1.5} cy={0.5} rx={1.5} ry={1} />
        <ellipse id="TM_svg_path-12" cx={1.5} cy={1} rx={1.5} ry={1} />
      </defs>
      <g
        id="TM_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="TM_svg_TM">
          <rect
            id="TM_svg_FlagBackground"
            fill="url(#TM_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="TM_svg_Rectangle-2"
            fill="url(#TM_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="TM_svg_Rectangle-1092"
            fill="url(#TM_svg_linearGradient-3)"
            x={3}
            y={0}
            width={3}
            height={15}
          />
          <g id="TM_svg_Oval-161" transform="translate(3.000000, 1.000000)">
            <mask id="TM_svg_mask-5" fill="white">
              <use xlinkHref="#path-4" />
            </mask>
            <use id="TM_svg_Mask" fill="#FFFFFF" xlinkHref="#path-4" />
            <circle
              id="TM_svg_Oval-166"
              fill="#DD404F"
              mask="url(#TM_svg_mask-5)"
              cx={1.5}
              cy={1}
              r={1}
            />
            <rect
              id="TM_svg_Rectangle-1093"
              fill="#FBAF29"
              mask="url(#TM_svg_mask-5)"
              x={0}
              y={0}
              width={1.5}
              height={1}
            />
            <rect
              id="TM_svg_Rectangle-1093-Copy"
              fill="#FBAF29"
              mask="url(#TM_svg_mask-5)"
              x={1.5}
              y={1}
              width={1.5}
              height={1}
            />
          </g>
          <g
            id="TM_svg_Oval-161-Copy-2"
            transform="translate(3.000000, 12.000000)"
          >
            <mask id="TM_svg_mask-7" fill="white">
              <use xlinkHref="#path-6" />
            </mask>
            <use id="TM_svg_Mask" fill="#FFFFFF" xlinkHref="#path-6" />
            <circle
              id="TM_svg_Oval-166"
              fill="#DD404F"
              mask="url(#TM_svg_mask-7)"
              cx={1.5}
              cy={1}
              r={1}
            />
            <rect
              id="TM_svg_Rectangle-1093"
              fill="#FBAF29"
              mask="url(#TM_svg_mask-7)"
              x={0}
              y={0}
              width={1.5}
              height={1}
            />
            <rect
              id="TM_svg_Rectangle-1093-Copy"
              fill="#FBAF29"
              mask="url(#TM_svg_mask-7)"
              x={1.5}
              y={1}
              width={1.5}
              height={1}
            />
          </g>
          <g
            id="TM_svg_Oval-161-Copy-3"
            transform="translate(3.000000, 7.000000)"
          >
            <mask id="TM_svg_mask-9" fill="white">
              <use xlinkHref="#path-8" />
            </mask>
            <use id="TM_svg_Mask" fill="#28AE67" xlinkHref="#path-8" />
            <ellipse
              id="TM_svg_Oval-166"
              fill="#DD404F"
              mask="url(#TM_svg_mask-9)"
              cx={1.5}
              cy={1}
              rx={1}
              ry={1}
            />
          </g>
          <g
            id="TM_svg_Oval-161-Copy-4"
            transform="translate(3.000000, 10.000000)"
          >
            <mask id="TM_svg_mask-11" fill="white">
              <use xlinkHref="#path-10" />
            </mask>
            <use id="TM_svg_Mask" fill="#28AE67" xlinkHref="#path-10" />
          </g>
          <g
            id="TM_svg_Oval-161-Copy"
            transform="translate(3.000000, 4.000000)"
          >
            <mask id="TM_svg_mask-13" fill="white">
              <use xlinkHref="#path-12" />
            </mask>
            <use id="TM_svg_Mask" fill="#FBAF29" xlinkHref="#path-12" />
            <circle
              id="TM_svg_Oval-166"
              fill="#DD404F"
              mask="url(#TM_svg_mask-13)"
              cx={1.5}
              cy={1}
              r={1}
            />
            <rect
              id="TM_svg_Rectangle-1093"
              fill="#28AE67"
              mask="url(#TM_svg_mask-13)"
              x={0}
              y={0}
              width={1}
              height={2}
            />
            <rect
              id="TM_svg_Rectangle-1093-Copy-2"
              fill="#28AE67"
              mask="url(#TM_svg_mask-13)"
              x={2}
              y={0}
              width={1}
              height={2}
            />
          </g>
          <path
            d="M11.1169894,3.17861784 C10.9394885,3.39015517 10.9670805,3.70553297 11.1786178,3.88303386 C11.3901552,4.06053476 11.705533,4.03294278 11.8830339,3.82140545 C12.0605348,3.60986811 12.0329428,3.29449032 11.8214054,3.11698942 C11.6098681,2.93948852 11.2944903,2.9670805 11.1169894,3.17861784 Z M9.82140545,5.11698942 C9.60986811,4.93948852 9.29449032,4.9670805 9.11698942,5.17861784 C8.93948852,5.39015517 8.9670805,5.70553297 9.17861784,5.88303386 C9.39015517,6.06053476 9.70553297,6.03294278 9.88303386,5.82140545 C10.0605348,5.60986811 10.0329428,5.29449032 9.82140545,5.11698942 L9.82140545,5.11698942 Z M8.82140545,4.11698942 C8.60986811,3.93948852 8.29449032,3.9670805 8.11698942,4.17861784 C7.93948852,4.39015517 7.9670805,4.70553297 8.17861784,4.88303386 C8.39015517,5.06053476 8.70553297,5.03294278 8.88303386,4.82140545 C9.06053476,4.60986811 9.03294278,4.29449032 8.82140545,4.11698942 L8.82140545,4.11698942 Z M10.8214054,2.11698942 C10.6098681,1.93948852 10.2944903,1.9670805 10.1169894,2.17861784 C9.93948852,2.39015517 9.9670805,2.70553297 10.1786178,2.88303386 C10.3901552,3.06053476 10.705533,3.03294278 10.8830339,2.82140545 C11.0605348,2.60986811 11.0329428,2.29449032 10.8214054,2.11698942 L10.8214054,2.11698942 Z M10.3214054,3.61698942 C10.1098681,3.43948852 9.79449032,3.4670805 9.61698942,3.67861784 C9.43948852,3.89015517 9.4670805,4.20553297 9.67861784,4.38303386 C9.89015517,4.56053476 10.205533,4.53294278 10.3830339,4.32140545 C10.5605348,4.10986811 10.5329428,3.79449032 10.3214054,3.61698942 L10.3214054,3.61698942 Z"
            id="TM_svg_Oval-68"
            fill="url(#TM_svg_linearGradient-1)"
          />
          <path
            d="M13.1070726,7.0878904 C11.9160354,8.27892761 9.98498252,8.27892761 8.79394531,7.0878904 C8.67853723,6.97248232 8.57431185,6.85012618 8.48126919,6.72216849 C9.6738634,7.58934686 11.3530454,7.48512149 12.4286745,6.40949237 C13.5043037,5.33386325 13.608529,3.65468123 12.7413507,2.46208702 C12.8693083,2.55512969 12.9916645,2.65935506 13.1070726,2.77476315 C14.2981098,3.96580035 14.2981098,5.8968532 13.1070726,7.0878904 Z"
            id="TM_svg_Star-8"
            fill="url(#TM_svg_linearGradient-1)"
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
