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
      <title>{"EC"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EC_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EC_svg_linearGradient-2"
        >
          <stop stopColor="#0748AE" offset="0%" />
          <stop stopColor="#003993" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EC_svg_linearGradient-3"
        >
          <stop stopColor="#DE2035" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EC_svg_linearGradient-4"
        >
          <stop stopColor="#FFD935" offset="0%" />
          <stop stopColor="#FDD216" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="EC_svg_linearGradient-5"
        >
          <stop stopColor="#FBDC44" offset="0%" />
          <stop stopColor="#FFDC32" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="EC_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="EC_svg_EC">
          <rect
            id="EC_svg_FlagBackground"
            fill="url(#EC_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="EC_svg_Rectangle-2"
            fill="url(#EC_svg_linearGradient-2)"
            x={0}
            y={7}
            width={21}
            height={4}
          />
          <rect
            id="EC_svg_Rectangle-2"
            fill="url(#EC_svg_linearGradient-3)"
            x={0}
            y={11}
            width={21}
            height={4}
          />
          <rect
            id="EC_svg_Rectangle-2"
            fill="url(#EC_svg_linearGradient-4)"
            x={0}
            y={0}
            width={21}
            height={7}
          />
          <path
            d="M9.29996095,6 C8.81420448,6.36488433 8.5,6.94580754 8.5,7.60011714 C8.5,8.70468664 9.3954305,9.60011714 10.5,9.60011714 C11.6045695,9.60011714 12.5,8.70468664 12.5,7.60011714 C12.5,6.94580754 12.1857955,6.36488433 11.700039,6 L11,8.10011714 L10,8.10011714 L9.29996095,6 Z"
            id="EC_svg_Oval-12"
            fill="url(#EC_svg_linearGradient-5)"
          />
          <polygon
            id="EC_svg_Rectangle-483"
            fill="#5FC0DC"
            points="10.5 5.5 11 8 10 8"
          />
          <path
            d="M9.6767767,3.8232233 C9.60981862,3.75626523 9.51077674,3.73288462 9.42094306,3.76282918 L7.92094306,4.26282918 C7.78995723,4.30649112 7.71916723,4.44807111 7.76282918,4.57905694 C7.80649112,4.71004277 7.94807111,4.78083277 8.07905694,4.73717082 L9.43247731,4.2860307 L10.3232233,5.1767767 C10.4208544,5.27440777 10.5791456,5.27440777 10.6767767,5.1767767 L11.5675227,4.2860307 L12.9209431,4.73717082 C13.0519289,4.78083277 13.1935089,4.71004277 13.2371708,4.57905694 C13.2808328,4.44807111 13.2100428,4.30649112 13.0790569,4.26282918 L11.5790569,3.76282918 C11.4892233,3.73288462 11.3901814,3.75626523 11.3232233,3.8232233 L10.5,4.64644661 L9.6767767,3.8232233 Z"
            id="EC_svg_Line"
            fill="#3F2821"
            fillRule="nonzero"
            opacity={0.66}
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
