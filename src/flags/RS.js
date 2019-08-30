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
      <title>{"RS"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RS_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RS_svg_linearGradient-2"
        >
          <stop stopColor="#17508F" offset="0%" />
          <stop stopColor="#114175" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="RS_svg_linearGradient-3"
        >
          <stop stopColor="#E1444D" offset="0%" />
          <stop stopColor="#C53840" offset="100%" />
        </linearGradient>
        <path
          d="M0.5,2.5 C0.5,1.82617791 0.873828888,0.484626524 0.873828888,0.484626524 C0.943511269,0.216974685 1.2157526,0 1.49538898,0 L3.50461102,0 C3.7782068,0 4.05735636,0.214117162 4.12617111,0.481138541 C4.12617111,0.481138541 4.5,1.81010532 4.5,2.5 C4.5,3.1449728 4.12359554,4.51947242 4.12359554,4.51947242 C4.05533561,4.78486047 3.85530376,5.17418671 3.66748512,5.37236309 C3.66748512,5.37236309 3.25,6 2.5,6 C1.75,6 1.33251488,5.37236309 1.33251488,5.37236309 C1.14887198,5.16671263 0.942643642,4.78284423 0.873828888,4.51260075 C0.873828888,4.51260075 0.5,3.16104539 0.5,2.5 Z"
          id="RS_svg_path-4"
        />
      </defs>
      <g
        id="RS_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="RS_svg_RS">
          <rect
            id="RS_svg_FlagBackground"
            fill="url(#RS_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="RS_svg_Rectangle-2"
            fill="url(#RS_svg_linearGradient-2)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <rect
            id="RS_svg_Rectangle-2"
            fill="url(#RS_svg_linearGradient-3)"
            x={0}
            y={0}
            width={21}
            height={5}
          />
          <rect
            id="RS_svg_Rectangle-2"
            fill="url(#RS_svg_linearGradient-1)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <g
            id="RS_svg_Rectangle-1668"
            transform="translate(4.000000, 5.000000)"
          >
            <mask id="RS_svg_mask-5" fill="white">
              <use xlinkHref="#path-4" />
            </mask>
            <use
              id="RS_svg_Mask"
              fill="url(#RS_svg_linearGradient-1)"
              xlinkHref="#path-4"
            />
            <polygon
              id="RS_svg_Line"
              fill="#C43840"
              fillRule="nonzero"
              mask="url(#RS_svg_mask-5)"
              points="4.42191312 -0.202781928 -0.202781928 5.57808688 0.578086881 6.20278193 5.20278193 0.421913119"
            />
            <polygon
              id="RS_svg_Line"
              fill="#C43840"
              fillRule="nonzero"
              mask="url(#RS_svg_mask-5)"
              points="-0.202781928 0.421913119 4.42191312 6.20278193 5.20278193 5.57808688 0.578086881 -0.202781928"
            />
          </g>
          <ellipse
            id="RS_svg_Oval-214"
            fill="#FFFFFF"
            cx={6.5}
            cy={7.5}
            rx={1}
            ry={1.5}
          />
          <path
            d="M5,4 L4.5,3 L5.5,3.5 L6.5,3 L7.5,3.5 L8.5,3 L8,4 L8,4.5 C8,4.77614237 7.7842474,5 7.50461102,5 L5.49538898,5 C5.2217932,5 5,4.76806641 5,4.5 L5,4 Z"
            id="RS_svg_Rectangle-1669"
            fill="#D1A43A"
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
