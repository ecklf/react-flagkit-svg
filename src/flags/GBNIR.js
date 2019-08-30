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
      <title>{"GB-NIR"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBNIR_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBNIR_svg_linearGradient-2"
        >
          <stop stopColor="#E82739" offset="0%" />
          <stop stopColor="#CA1A2B" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBNIR_svg_linearGradient-3"
        >
          <stop stopColor="#E6101E" offset="0%" />
          <stop stopColor="#CA0814" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GBNIR_svg_linearGradient-4"
        >
          <stop stopColor="#FFD148" offset="0%" />
          <stop stopColor="#FFCB2F" offset="100%" />
        </linearGradient>
        <path
          d="M9,3.75 L10,4 L10.5,3.5 L11,4 L12,3.75 L11.596405,4.75898743 C11.543162,4.892095 11.3924713,5 11.2547607,5 L9.74523926,5 C9.60979736,5 9.46076584,4.9019146 9.40359497,4.75898743 L9,3.75 Z M10.5,3 C10.2238576,3 10,2.77614237 10,2.5 C10,2.22385763 10.2238576,2 10.5,2 C10.7761424,2 11,2.22385763 11,2.5 C11,2.77614237 10.7761424,3 10.5,3 Z"
          id="GBNIR_svg_path-5"
        />
      </defs>
      <g
        id="GBNIR_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GBNIR_svg_GB-NIR">
          <rect
            id="GBNIR_svg_FlagBackground"
            fill="url(#GBNIR_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M9,6 L0,6 L0,9 L9,9 L9,15 L12,15 L12,9 L21,9 L21,6 L12,6 L12,0 L9,0 L9,6 Z"
            id="GBNIR_svg_Rectangle-2"
            fill="url(#GBNIR_svg_linearGradient-2)"
          />
          <polygon
            id="GBNIR_svg_Star"
            fill="url(#GBNIR_svg_linearGradient-1)"
            points="11.5164945 9.26062019 10.5 11 9.48350546 9.26062019 7.46891109 9.25 8.46701092 7.5 7.46891109 5.75 9.48350546 5.73937981 10.5 4 11.5164945 5.73937981 13.5310889 5.75 12.5329891 7.5 13.5310889 9.25"
          />
          <path
            d="M9.55059123,7.0059123 C9.52265047,6.72650465 9.70856857,6.43047714 9.97460938,6.34179688 L10.5253906,6.15820313 C10.7875101,6.07082995 11,6.22133017 11,6.50783157 L11,7.5 C11,7.5 11.3211384,6.46341503 11.5000001,7 C11.6788617,7.53658497 11.3721481,8.52641098 11.3721481,8.52641098 C11.3046876,8.78796697 11.0286698,9 10.7421684,9 L10.2578316,9 C9.97736394,9 9.72692871,8.76928711 9.69940877,8.4940877 L9.55059123,7.0059123 Z"
            id="GBNIR_svg_Rectangle"
            fill="url(#GBNIR_svg_linearGradient-3)"
          />
          <path
            d="M10.4992381,2.90843608 C9.98856711,2.90843608 9.53335377,3.21158862 9.33161539,3.67111702 L9.2311203,3.90002909 L9.68894444,4.10101928 L9.78943954,3.87210721 C9.9121134,3.59267537 10.1887668,3.40843608 10.4992381,3.40843608 C10.8075103,3.40843608 11.0825571,3.59005825 11.2065575,3.86652051 L11.3088688,4.09462659 L11.765081,3.89000386 L11.6627696,3.66189778 C11.4588692,3.20729607 11.0062786,2.90843608 10.4992381,2.90843608 Z"
            id="GBNIR_svg_Oval"
            fill="url(#GBNIR_svg_linearGradient-1)"
            fillRule="nonzero"
          />
          <mask id="GBNIR_svg_mask-6" fill="white">
            <use xlinkHref="#path-5" />
          </mask>
          <use
            id="GBNIR_svg_Combined-Shape"
            fill="url(#GBNIR_svg_linearGradient-4)"
            xlinkHref="#path-5"
          />
          <circle
            id="GBNIR_svg_Oval-7"
            fill="#5169E2"
            mask="url(#GBNIR_svg_mask-6)"
            cx={10.5}
            cy={4.5}
            r={1}
          />
          <circle
            id="GBNIR_svg_Oval-7-Copy"
            fill="#D34D43"
            mask="url(#GBNIR_svg_mask-6)"
            cx={11.5}
            cy={4.5}
            r={1}
          />
          <circle
            id="GBNIR_svg_Oval-7-Copy-2"
            fill="#D34D43"
            mask="url(#GBNIR_svg_mask-6)"
            cx={9.5}
            cy={4.5}
            r={1}
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
