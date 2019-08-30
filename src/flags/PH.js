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
      <title>{"PH"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PH_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PH_svg_linearGradient-2"
        >
          <stop stopColor="#DD1C34" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PH_svg_linearGradient-3"
        >
          <stop stopColor="#0D4BC3" offset="0%" />
          <stop stopColor="#073DA6" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PH_svg_linearGradient-4"
        >
          <stop stopColor="#FDD64D" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="PH_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="PH_svg_PH">
          <rect
            id="PH_svg_FlagBackground"
            fill="url(#PH_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="PH_svg_Rectangle-2"
            fill="url(#PH_svg_linearGradient-2)"
            x={0}
            y={7}
            width={21}
            height={8}
          />
          <rect
            id="PH_svg_Rectangle-2"
            fill="url(#PH_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={7}
          />
          <polygon
            id="PH_svg_Rectangle-83"
            fill="url(#PH_svg_linearGradient-1)"
            points="0 0 10 7.5 0 15"
          />
          <path
            d="M3.39905647,8.49496835 L2.54329142,9.80969883 L2.86783947,8.27487717 C2.81561375,8.23221927 2.76778073,8.18438625 2.72512283,8.13216053 L1.19030117,8.45670858 L2.50503165,7.60094353 C2.50170408,7.56774742 2.5,7.53407271 2.5,7.5 C2.5,7.46592729 2.50170408,7.43225258 2.50503165,7.39905647 L1.19030117,6.54329142 L2.72512283,6.86783947 C2.76778073,6.81561375 2.81561375,6.76778073 2.86783947,6.72512283 L2.54329142,5.19030117 L3.39905647,6.50503165 C3.43225258,6.50170408 3.46592729,6.5 3.5,6.5 C3.53407271,6.5 3.56774742,6.50170408 3.60094353,6.50503165 L4.45670858,5.19030117 L4.13216053,6.72512283 C4.18438625,6.76778073 4.23221927,6.81561375 4.27487717,6.86783947 L5.80969883,6.54329142 L4.49496835,7.39905647 C4.49829592,7.43225258 4.5,7.46592729 4.5,7.5 C4.5,7.53407271 4.49829592,7.56774742 4.49496835,7.60094353 L5.80969883,8.45670858 L4.27487717,8.13216053 C4.23221927,8.18438625 4.18438625,8.23221927 4.13216053,8.27487717 L4.45670858,9.80969883 L3.60094353,8.49496835 C3.56774742,8.49829592 3.53407271,8.5 3.5,8.5 C3.46592729,8.5 3.43225258,8.49829592 3.39905647,8.49496835 L3.39905647,8.49496835 Z M7.5,8 C7.22385763,8 7,7.77614237 7,7.5 C7,7.22385763 7.22385763,7 7.5,7 C7.77614237,7 8,7.22385763 8,7.5 C8,7.77614237 7.77614237,8 7.5,8 Z M1.5,3 C1.22385763,3 1,2.77614237 1,2.5 C1,2.22385763 1.22385763,2 1.5,2 C1.77614237,2 2,2.22385763 2,2.5 C2,2.77614237 1.77614237,3 1.5,3 Z M1.5,13 C1.22385763,13 1,12.7761424 1,12.5 C1,12.2238576 1.22385763,12 1.5,12 C1.77614237,12 2,12.2238576 2,12.5 C2,12.7761424 1.77614237,13 1.5,13 Z"
            id="PH_svg_Oval-206"
            fill="url(#PH_svg_linearGradient-4)"
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
