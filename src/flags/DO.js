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
      <title>{"DO"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DO_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DO_svg_linearGradient-2"
        >
          <stop stopColor="#083D7A" offset="0%" />
          <stop stopColor="#032F61" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DO_svg_linearGradient-3"
        >
          <stop stopColor="#DF1E35" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="DO_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="DO_svg_DO">
          <rect
            id="DO_svg_FlagBackground"
            fill="url(#DO_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="DO_svg_Rectangle-2"
            fill="url(#DO_svg_linearGradient-2)"
            x={0}
            y={0}
            width={9}
            height={6}
          />
          <rect
            id="DO_svg_Rectangle-2"
            fill="url(#DO_svg_linearGradient-2)"
            x={12}
            y={9}
            width={9}
            height={6}
          />
          <rect
            id="DO_svg_Rectangle-2"
            fill="url(#DO_svg_linearGradient-3)"
            x={0}
            y={9}
            width={9}
            height={6}
          />
          <rect
            id="DO_svg_Rectangle-2"
            fill="url(#DO_svg_linearGradient-3)"
            x={12}
            y={0}
            width={9}
            height={6}
          />
          <path
            d="M9,6 L0,6 L0,9 L9,9 L9,15 L12,15 L12,9 L21,9 L21,6 L12,6 L12,0 L9,0 L9,6 Z"
            id="DO_svg_Rectangle-2"
            fill="url(#DO_svg_linearGradient-1)"
          />
          <path
            d="M10.5,6 C9.67157288,6 9,6.67157288 9,7.5 C9,8.32842712 9.67157288,9 10.5,9 L10.5,9 C11.3284271,9 12,8.32842712 12,7.5"
            id="DO_svg_Oval-85"
            fillOpacity={0.2}
            fill="#C93127"
            transform="translate(10.500000, 7.500000) rotate(-45.000000) translate(-10.500000, -7.500000) "
          />
          <circle id="DO_svg_Oval-85" fill="#042F60" cx={10.5} cy={7.5} r={1} />
          <path
            d="M11.5606602,8.56066017 C10.9748737,9.14644661 10.0251263,9.14644661 9.43933983,8.56066017 C8.85355339,7.97487373 8.85355339,7.02512627 9.43933983,6.43933983 L9.79289322,6.79289322 C9.40236893,7.18341751 9.40236893,7.81658249 9.79289322,8.20710678 C10.1834175,8.59763107 10.8165825,8.59763107 11.2071068,8.20710678 C11.5976311,7.81658249 11.5976311,7.18341751 11.2071068,6.79289322 L11.5606602,6.43933983 C12.1464466,7.02512627 12.1464466,7.97487373 11.5606602,8.56066017 Z M11.5606602,8.56066017 C10.9748737,9.14644661 10.0251263,9.14644661 9.43933983,8.56066017 C8.85355339,7.97487373 8.85355339,7.02512627 9.43933983,6.43933983 L9.79289322,6.79289322 C9.40236893,7.18341751 9.40236893,7.81658249 9.79289322,8.20710678 C10.1834175,8.59763107 10.8165825,8.59763107 11.2071068,8.20710678 C11.5976311,7.81658249 11.5976311,7.18341751 11.2071068,6.79289322 L11.5606602,6.43933983 C12.1464466,7.02512627 12.1464466,7.97487373 11.5606602,8.56066017 Z"
            id="DO_svg_Oval-85"
            fill="#0F6D1A"
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
