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
      <title>{"LB"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LB_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LB_svg_linearGradient-2"
        >
          <stop stopColor="#F03340" offset="0%" />
          <stop stopColor="#EB212E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="LB_svg_linearGradient-3"
        >
          <stop stopColor="#1FC065" offset="0%" />
          <stop stopColor="#17A555" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="LB_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="LB_svg_LB">
          <rect
            id="LB_svg_FlagBackground"
            fill="url(#LB_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="LB_svg_Rectangle-2"
            fill="url(#LB_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={4}
          />
          <rect
            id="LB_svg_Rectangle-2"
            fill="url(#LB_svg_linearGradient-2)"
            x={0}
            y={11}
            width={21}
            height={4}
          />
          <rect
            id="LB_svg_Rectangle-2-Copy-4"
            fill="url(#LB_svg_linearGradient-1)"
            x={0}
            y={4}
            width={21}
            height={7}
          />
          <path
            d="M9.65024853,9.34975144 C9.84341093,9.15658903 9.84179687,8.84179683 9.64731216,8.64731212 L9.85268784,8.85268779 C9.65790372,8.65790368 9.28596497,8.55350871 9.01585579,8.62103601 L7.98414421,8.8789639 C7.71675875,8.94581027 7.68457031,8.86157222 7.90472984,8.69645257 L9.09527016,7.80354734 C9.31879628,7.63590275 9.27866983,7.49999995 8.99216843,7.49999995 L8.50783157,7.49999995 C8.22736394,7.49999995 8.19907951,7.4004602 8.44386482,7.27806754 L9.55613518,6.72193236 C9.80127495,6.59936248 9.77866983,6.49999995 9.49216843,6.49999995 L9.00783157,6.49999995 C8.72736394,6.49999995 8.68457031,6.36157222 8.90472984,6.19645257 L10.0952702,5.30354734 C10.3187963,5.13590275 10.6845703,5.13842769 10.9047298,5.30354734 L12.0952702,6.19645257 C12.3187963,6.36409716 12.2786698,6.49999995 11.9921684,6.49999995 L11.5078316,6.49999995 C11.2273639,6.49999995 11.1990795,6.59953971 11.4438648,6.72193236 L12.5561352,7.27806754 C12.8012749,7.40063743 12.7786698,7.49999995 12.4921684,7.49999995 L12.0078316,7.49999995 C11.7273639,7.49999995 11.6845703,7.63842769 11.9047298,7.80354734 L13.0952702,8.69645257 C13.3187963,8.86409716 13.285965,8.9464912 13.0158558,8.8789639 L11.9841442,8.62103601 C11.7167587,8.55418964 11.3417969,8.65820308 11.1473122,8.85268779 L11.3526878,8.64731212 C11.1579037,8.84209623 11.15625,9.15624995 11.3497515,9.34975143 L11.6502485,9.65024848 C11.8434109,9.84341089 11.7842474,9.99999996 11.504611,9.99999996 L9.49538898,9.99999999 C9.2217932,10 9.15625,9.84374999 9.34975147,9.65024851 L9.65024853,9.34975144 Z"
            id="LB_svg_Combined-Shape"
            fill="url(#LB_svg_linearGradient-3)"
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
