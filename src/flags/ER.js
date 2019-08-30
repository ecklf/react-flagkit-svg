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
      <title>{"ER"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ER_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ER_svg_linearGradient-2"
        >
          <stop stopColor="#29C53F" offset="0%" />
          <stop stopColor="#21AC35" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ER_svg_linearGradient-3"
        >
          <stop stopColor="#579DED" offset="0%" />
          <stop stopColor="#458BDB" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ER_svg_linearGradient-4"
        >
          <stop stopColor="#F42D56" offset="0%" />
          <stop stopColor="#E9103D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="ER_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="ER_svg_ER">
          <rect
            id="ER_svg_FlagBackground"
            fill="url(#ER_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="ER_svg_Rectangle-2"
            fill="url(#ER_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={7.5}
          />
          <rect
            id="ER_svg_Rectangle-2"
            fill="url(#ER_svg_linearGradient-3)"
            x={0}
            y={7.5}
            width={21}
            height={8}
          />
          <polygon
            id="ER_svg_Rectangle-2"
            fill="url(#ER_svg_linearGradient-4)"
            points="0 15 21 7.5 0 0"
          />
          <path
            d="M6.5,10 C7.88071187,10 9,8.88071187 9,7.5 C9,6.11928813 7.88071187,5 6.5,5 C5.11928813,5 4,6.11928813 4,7.5 C4,8.88071187 5.11928813,10 6.5,10 Z M6.5,11 C4.56700338,11 3,9.43299662 3,7.5 C3,5.56700338 4.56700338,4 6.5,4 C8.43299662,4 10,5.56700338 10,7.5 C10,9.43299662 8.43299662,11 6.5,11 Z"
            id="ER_svg_Oval-87"
            fill="#FFC63C"
            fillRule="nonzero"
          />
          <circle id="ER_svg_Oval-88" fill="#FFC63C" cx={6} cy={6.5} r={1} />
          <circle id="ER_svg_Oval-88" fill="#FFC63C" cx={7} cy={7} r={1} />
          <circle id="ER_svg_Oval-88" fill="#FFC63C" cx={6.5} cy={6} r={1} />
          <circle id="ER_svg_Oval-88" fill="#FFC63C" cx={6} cy={7.5} r={1} />
          <circle id="ER_svg_Oval-88" fill="#FFC63C" cx={7} cy={8} r={1} />
          <circle id="ER_svg_Oval-88" fill="#FFC63C" cx={6} cy={8.5} r={1} />
          <circle id="ER_svg_Oval-88" fill="#FFC63C" cx={7} cy={9} r={1} />
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
