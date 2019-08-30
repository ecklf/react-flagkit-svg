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
      <title>{"HT"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="HT_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="HT_svg_linearGradient-2"
        >
          <stop stopColor="#112EBC" offset="0%" />
          <stop stopColor="#0620A0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="HT_svg_linearGradient-3"
        >
          <stop stopColor="#E3264A" offset="0%" />
          <stop stopColor="#D20F34" offset="100%" />
        </linearGradient>
        <rect id="HT_svg_path-4" x={0} y={0} width={7} height={6} rx={0.5} />
        <path
          d="M0,5 L1.10529494,4.44735253 C1.5994269,4.20028655 2.44266033,4 2.99895656,4 L4.00104344,4 C4.55275191,4 5.40472984,4.20236492 5.89470506,4.44735253 L7,5 L7,6 L0,6 L0,5 Z"
          id="HT_svg_path-6"
        />
        <path
          d="M1,3.0059123 C1,2.72650465 1.17979383,2.64383507 1.390625,2.8125 L3.109375,4.1875 C3.32511123,4.36008898 3.67979383,4.35616493 3.890625,4.1875 L5.609375,2.8125 C5.82511123,2.63991102 6,2.73071289 6,3.0059123 L6,4.4940877 C6,4.77349535 5.78515625,5 5.50230122,5 L1.49769878,5 C1.22282734,5 1,4.76928711 1,4.4940877 L1,3.0059123 Z"
          id="HT_svg_path-7"
        />
      </defs>
      <g
        id="HT_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="HT_svg_HT">
          <rect
            id="HT_svg_FlagBackground"
            fill="url(#HT_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="HT_svg_Rectangle-2"
            fill="url(#HT_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={7}
          />
          <rect
            id="HT_svg_Rectangle-2"
            fill="url(#HT_svg_linearGradient-3)"
            x={0}
            y={7}
            width={21}
            height={8}
          />
          <g
            id="HT_svg_Rectangle-180"
            transform="translate(7.000000, 5.000000)"
          >
            <mask id="HT_svg_mask-5" fill="white">
              <use xlinkHref="#path-4" />
            </mask>
            <use
              id="HT_svg_Mask"
              fill="url(#HT_svg_linearGradient-1)"
              xlinkHref="#path-4"
            />
            <g id="HT_svg_Rectangle-181" mask="url(#HT_svg_mask-5)">
              <use fill="#AABCAE" fillRule="evenodd" xlinkHref="#path-6" />
              <path
                stroke="#366C14"
                strokeWidth={0.5}
                d="M0.25,5.1545085 L0.25,5.75 L6.75,5.75 L6.75,5.1545085 L5.78290166,4.67095933 C5.32616358,4.44259029 4.51229671,4.25 4.00104344,4.25 L2.99895656,4.25 C2.48310198,4.25 1.67798094,4.44051803 1.21709834,4.67095933 L0.25,5.1545085 Z"
              />
            </g>
            <circle
              id="HT_svg_Oval-6"
              fill="#D4B872"
              mask="url(#HT_svg_mask-5)"
              cx={3.5}
              cy={2.5}
              r={1.5}
            />
            <g id="HT_svg_Rectangle-182" mask="url(#HT_svg_mask-5)">
              <use fill="#C28321" fillRule="evenodd" xlinkHref="#path-7" />
              <path
                stroke="#0D3488"
                strokeWidth={0.5}
                d="M1.25,3.02015621 L1.25,4.4940877 C1.25,4.63389068 1.36357173,4.75 1.49769878,4.75 L5.50230122,4.75 C5.64276516,4.75 5.75,4.63977414 5.75,4.4940877 L5.75,3.02015621 L4.04679876,4.3827172 C3.74324769,4.62555806 3.25884401,4.62723142 2.95320124,4.3827172 L1.25,3.02015621 Z"
              />
            </g>
            <path
              d="M2.17206907,1.17206907 C2.07703795,1.07703795 2.11394024,1 2.25577831,1 L4.74422169,1 C4.88548415,1 4.91935349,1.08064651 4.82793093,1.17206907 L3.67206907,2.32793093 C3.57703795,2.42296205 3.41935349,2.41935349 3.32793093,2.32793093 L2.17206907,1.17206907 Z"
              id="HT_svg_Rectangle-183"
              fill="#216C30"
              mask="url(#HT_svg_mask-5)"
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
