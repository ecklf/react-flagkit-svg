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
      <title>{"MO"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MO_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="MO_svg_linearGradient-2"
        >
          <stop stopColor="#079D7B" offset="0%" />
          <stop stopColor="#01795E" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="MO_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="MO_svg_MO">
          <rect
            id="MO_svg_FlagBackground"
            fill="url(#MO_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="MO_svg_Rectangle-2"
            fill="url(#MO_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <g id="MO_svg_Oval-9" transform="translate(6.000000, 2.000000)">
            <path
              d="M2.4518305,6.90229785 C2.5949082,6.94030272 2.73629673,6.97283288 2.87486696,7.00000015 L0.5,7 C0.618605029,7.35602901 0.778240116,7.69149418 0.972877361,8 L8.02712264,8 L8.02712264,8 C8.22175988,7.69149418 8.38139497,7.35602901 8.5,7 L6.09273789,7 C6.23564626,6.97342299 6.38176522,6.94108962 6.52983342,6.90287496 C6.07592352,6.91795726 5.33586703,7 4.5,7 C3.65278028,7 2.90399136,6.91571353 2.4518305,6.90229785 Z M2.03486814,6.77684443 C0.914121039,6.39849793 0.146013313,5.79167067 0.266754997,5.34105657 C0.401480524,4.83825405 1.59184645,4.72034517 2.92551171,5.0776997 C2.99553548,5.09646251 3.06456206,5.11616246 3.1324836,5.13672218 C3.10229564,4.93343568 3.08621989,4.72003757 3.08621989,4.5 C3.08621989,3.11928813 3.7191908,2 4.5,2 C5.2808092,2 5.91378011,3.11928813 5.91378011,4.5 C5.91378011,4.71889423 5.89787099,4.93121783 5.86798584,5.13355247 C5.94467469,5.10997668 6.02280331,5.0874933 6.10221442,5.06621516 C7.43587968,4.70886063 8.6262456,4.82676952 8.76097113,5.32957203 C8.88272959,5.7839808 8.10060539,6.3972448 6.96446944,6.77486936 C6.76375643,6.17961082 5.7367541,6 4.5,6 C3.26187911,6 2.23397385,6.18000803 2.03486814,6.77684443 Z M7.16607559,9 C6.43763664,9.62539994 5.51005005,10 4.5,10 C3.48994995,10 2.56236336,9.62539994 1.83392441,9 L7.16607559,9 L7.16607559,9 Z"
              id="MO_svg_Mask"
              fill="url(#MO_svg_linearGradient-1)"
            />
            <path
              d="M4.5,1 C4.22385763,1 4,0.776142375 4,0.5 C4,0.223857625 4.22385763,0 4.5,0 C4.77614237,0 5,0.223857625 5,0.5 C5,0.776142375 4.77614237,1 4.5,1 Z M0.5,3.5 C0.223857625,3.5 0,3.27614237 0,3 C0,2.72385763 0.223857625,2.5 0.5,2.5 C0.776142375,2.5 1,2.72385763 1,3 C1,3.27614237 0.776142375,3.5 0.5,3.5 Z M8.5,3.5 C8.22385763,3.5 8,3.27614237 8,3 C8,2.72385763 8.22385763,2.5 8.5,2.5 C8.77614237,2.5 9,2.72385763 9,3 C9,3.27614237 8.77614237,3.5 8.5,3.5 Z M7,2 C6.72385763,2 6.5,1.77614237 6.5,1.5 C6.5,1.22385763 6.72385763,1 7,1 C7.27614237,1 7.5,1.22385763 7.5,1.5 C7.5,1.77614237 7.27614237,2 7,2 Z M2,2 C1.72385763,2 1.5,1.77614237 1.5,1.5 C1.5,1.22385763 1.72385763,1 2,1 C2.27614237,1 2.5,1.22385763 2.5,1.5 C2.5,1.77614237 2.27614237,2 2,2 Z"
              id="MO_svg_Oval-184"
              fill="#FCD117"
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
