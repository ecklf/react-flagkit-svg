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
      <title>{"BR"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BR_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BR_svg_linearGradient-2"
        >
          <stop stopColor="#05AB41" offset="0%" />
          <stop stopColor="#019C39" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="BR_svg_linearGradient-3"
        >
          <stop stopColor="#053087" offset="0%" />
          <stop stopColor="#012877" offset="100%" />
        </linearGradient>
        <circle id="BR_svg_path-4" cx={3.5} cy={3.5} r={3.5} />
      </defs>
      <g
        id="BR_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="BR_svg_BR">
          <rect
            id="BR_svg_FlagBackground"
            fill="url(#BR_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="BR_svg_Mask-Copy"
            fill="url(#BR_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M2.42151632,7.77274586 C2.18871929,7.62211248 2.19350487,7.37479097 2.42151632,7.22725414 L10.0784837,2.27274586 C10.3112807,2.12211248 10.6935049,2.12520903 10.9215163,2.27274586 L18.5784837,7.22725414 C18.8112807,7.37788752 18.8064951,7.62520903 18.5784837,7.77274586 L10.9215163,12.7272541 C10.6887193,12.8778875 10.3064951,12.874791 10.0784837,12.7272541 L2.42151632,7.77274586 Z"
            id="BR_svg_Combined-Shape"
            fill="#FDD216"
          />
          <g id="BR_svg_Oval-2" transform="translate(7.000000, 4.000000)">
            <mask id="BR_svg_mask-5" fill="white">
              <use xlinkHref="#path-4" />
            </mask>
            <use
              id="BR_svg_Mask"
              fill="url(#BR_svg_linearGradient-3)"
              xlinkHref="#path-4"
            />
            <path
              d="M-0.100381226,2.97376324 C0.164901149,2.75894182 1.36252192,2.933788 3.43417519,3.48641101 C4.90835176,3.87965437 6.60707006,4.747859 6.9957681,5.22786103 L7.31042832,5.61643399 L8.08757424,4.98711354 L7.77291401,4.59854058 C7.22285434,3.91927356 5.35175728,2.96296719 3.69191715,2.52019722 C1.10596471,1.83038255 -0.0661252244,1.65926374 -0.7297016,2.19661727 L-1.11827459,2.51127745 L-0.488954213,3.28842343 L-0.100381226,2.97376324 Z"
              id="BR_svg_Line"
              fill="#FFFFFF"
              fillRule="nonzero"
              mask="url(#BR_svg_mask-5)"
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
