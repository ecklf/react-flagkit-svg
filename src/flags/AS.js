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
      <title>{"AS"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AS_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AS_svg_linearGradient-2"
        >
          <stop stopColor="#071585" offset="0%" />
          <stop stopColor="#000B64" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="AS_svg_linearGradient-3"
        >
          <stop stopColor="#D32636" offset="0%" />
          <stop stopColor="#BA1827" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="35.4001096%"
          y2="89.1313033%"
          id="AS_svg_linearGradient-4"
        >
          <stop stopColor="#AB5423" offset="0%" />
          <stop stopColor="#5A3719" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="AS_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="AS_svg_AS">
          <rect
            id="AS_svg_FlagBackground"
            fill="url(#AS_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="AS_svg_Mask"
            fill="url(#AS_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <polygon
            id="AS_svg_Rectangle-1134"
            fill="url(#AS_svg_linearGradient-3)"
            fillRule="nonzero"
            points="22 15.5 0 7.5 22 -0.5"
          />
          <polygon
            id="AS_svg_Rectangle-1134"
            fill="url(#AS_svg_linearGradient-1)"
            fillRule="nonzero"
            points="21 0.927699992 2.92617498 7.5 21 14.0723"
          />
          <path
            d="M16,7.038486 C15.8815511,6.92003711 15.1942139,7.19421386 15.1942139,7.19421386 L14,6 C14,6 13.9383569,5.33698587 14.5,5 C14.9247187,4.74516878 15.7204931,4.83977815 16.4990013,4.5 C17.7459982,3.95575102 19,3 19,3 L18.1979642,5.20559849 C18.1979642,5.20559849 19.1166408,5.67923724 18.9999998,6 C18.9661979,6.0929551 18.0694389,6.38457486 17.9999998,6.5 C17.8680615,6.71931452 18.5239661,6.78580715 18.3197925,7.03848593 C17.7327784,7.76495606 17,8.5 17,8.5 L16,8 C16,8 16.1501465,7.18863249 16,7.038486 Z"
            id="AS_svg_Rectangle-1475"
            fill="url(#AS_svg_linearGradient-4)"
          />
          <circle
            id="AS_svg_Oval-322"
            fill="#FFC322"
            cx={13.5}
            cy={7.5}
            r={1}
          />
          <path
            d="M12.5,9 L17.5,9 C17.7761424,9 18,8.77614237 18,8.5 C18,8.22385763 17.7761424,8 17.5,8 L12.5,8 C12.2238576,8 12,8.22385763 12,8.5 C12,8.77614237 12.2238576,9 12.5,9 Z"
            id="AS_svg_Line"
            fill="#FFC322"
            fillRule="nonzero"
          />
          <path
            d="M14.1969596,10.4595725 L17.6969596,8.95957252 C17.9507745,8.8507947 18.0683503,8.55685524 17.9595725,8.30304035 C17.8507947,8.04922546 17.5568552,7.93164967 17.3030404,8.04042748 L13.8030404,9.54042748 C13.5492255,9.6492053 13.4316497,9.94314476 13.5404275,10.1969596 C13.6492053,10.4507745 13.9431448,10.5683503 14.1969596,10.4595725 Z"
            id="AS_svg_Line-Copy"
            fill="#FFC322"
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
