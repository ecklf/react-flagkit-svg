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
      <title>{"KE"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KE_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KE_svg_linearGradient-2"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KE_svg_linearGradient-3"
        >
          <stop stopColor="#018301" offset="0%" />
          <stop stopColor="#006700" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="KE_svg_linearGradient-4"
        >
          <stop stopColor="#DC0808" offset="0%" />
          <stop stopColor="#BC0000" offset="100%" />
        </linearGradient>
        <path
          d="M2.5,10.5 C3.5,10.5 5,8.53756612 5,5.5 C5,2.46243388 3.5,0.5 2.5,0.5 C1.5,0.5 0,2.46243388 0,5.5 C0,8.53756612 1.5,10.5 2.5,10.5 Z"
          id="KE_svg_path-5"
        />
      </defs>
      <g
        id="KE_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="KE_svg_KE">
          <rect
            id="KE_svg_FlagBackground"
            fill="url(#KE_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="KE_svg_Rectangle-2"
            fill="url(#KE_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={4}
          />
          <rect
            id="KE_svg_Rectangle-2"
            fill="url(#KE_svg_linearGradient-3)"
            x={0}
            y={11}
            width={21}
            height={4}
          />
          <rect
            id="KE_svg_Rectangle-2"
            fill="url(#KE_svg_linearGradient-1)"
            x={0}
            y={4}
            width={21}
            height={7}
          />
          <rect
            id="KE_svg_Rectangle-2-Copy-4"
            fill="url(#KE_svg_linearGradient-4)"
            x={0}
            y={5}
            width={21}
            height={5}
          />
          <g id="KE_svg_Oval-225" transform="translate(8.000000, 2.000000)">
            <mask id="KE_svg_mask-6" fill="white">
              <use xlinkHref="#path-5" />
            </mask>
            <use id="KE_svg_Mask" fill="#BC0000" xlinkHref="#path-5" />
            <ellipse
              id="KE_svg_Mask-Copy"
              fill="url(#KE_svg_linearGradient-2)"
              mask="url(#KE_svg_mask-6)"
              cx={-1.5}
              cy={5.5}
              rx={2.5}
              ry={5.5}
            />
            <ellipse
              id="KE_svg_Mask-Copy-2"
              fill="url(#KE_svg_linearGradient-2)"
              mask="url(#KE_svg_mask-6)"
              cx={6.5}
              cy={5.5}
              rx={2.5}
              ry={5.5}
            />
            <path
              d="M2.5,7 C2.22385763,7 2,6.32842712 2,5.5 C2,4.67157288 2.22385763,4 2.5,4 C2.77614237,4 3,4.67157288 3,5.5 C3,6.32842712 2.77614237,7 2.5,7 Z M2.5,4 C2.22385763,4 2,3.1045695 2,2 C2,0.8954305 2.22385763,0 2.5,0 C2.77614237,0 3,0.8954305 3,2 C3,3.1045695 2.77614237,4 2.5,4 Z M2.5,11 C2.22385763,11 2,10.1045695 2,9 C2,7.8954305 2.22385763,7 2.5,7 C2.77614237,7 3,7.8954305 3,9 C3,10.1045695 2.77614237,11 2.5,11 Z"
              id="KE_svg_Oval-228"
              fill="url(#KE_svg_linearGradient-1)"
              mask="url(#KE_svg_mask-6)"
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
