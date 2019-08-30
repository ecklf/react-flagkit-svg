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
      <title>{"DM"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DM_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DM_svg_linearGradient-2"
        >
          <stop stopColor="#108753" offset="0%" />
          <stop stopColor="#0B6B41" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DM_svg_linearGradient-3"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DM_svg_linearGradient-4"
        >
          <stop stopColor="#FCD449" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="DM_svg_linearGradient-5"
        >
          <stop stopColor="#E02C42" offset="0%" />
          <stop stopColor="#D22036" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="DM_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="DM_svg_DM">
          <rect
            id="DM_svg_FlagBackground"
            fill="url(#DM_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="DM_svg_Rectangle-2"
            fill="url(#DM_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={6}
          />
          <rect
            id="DM_svg_Rectangle-2"
            fill="url(#DM_svg_linearGradient-2)"
            x={0}
            y={9}
            width={21}
            height={6}
          />
          <path
            d="M9,6 L0,6 L0,9 L9,9 L9,15 L12,15 L12,9 L21,9 L21,6 L12,6 L12,0 L9,0 L9,6 Z"
            id="DM_svg_Rectangle-2"
            fill="url(#DM_svg_linearGradient-1)"
          />
          <path
            d="M10,8 L10,15 L11,15 L11,8 L21,8 L21,7 L11,7 L11,0 L10,0 L10,7 L0,7 L0,8 L10,8 Z"
            id="DM_svg_Rectangle-2"
            fill="url(#DM_svg_linearGradient-3)"
          />
          <path
            d="M9,7 L9,15 L10,15 L10,7 L21,7 L21,6 L10,6 L10,0 L9,0 L9,6 L0,6 L0,7 L9,7 Z"
            id="DM_svg_Rectangle-2"
            fill="url(#DM_svg_linearGradient-4)"
          />
          <circle
            id="DM_svg_Oval-83"
            fill="url(#DM_svg_linearGradient-5)"
            cx={10.5}
            cy={7.5}
            r={3.5}
          />
          <path
            d="M10.5,10.5 C10.2238576,10.5 10,10.2761424 10,10 C10,9.72385763 10.2238576,9.5 10.5,9.5 C10.7735025,9.5 11.0384691,9.44535437 11.2838445,9.34069603 C11.5378474,9.23235788 11.8315828,9.35044247 11.9399209,9.60444534 C12.0482591,9.8584482 11.9301745,10.1521836 11.6761716,10.2605218 C11.307323,10.4178443 10.9089652,10.5 10.5,10.5 Z M13.3164826,8.53513497 C13.4305997,8.22471688 13.4928268,7.89606641 13.4994155,7.55972049 C13.5000122,7.44025084 13.4981257,7.36866902 13.4929347,7.29277075 C13.4740924,7.01727197 13.2354817,6.80921083 12.9599829,6.82805318 C12.6844842,6.84689554 12.476423,7.08550617 12.4952654,7.36100495 C12.4986576,7.41060301 12.4999195,7.45848733 12.4995165,7.54766823 C12.4952036,7.76494093 12.4537974,7.98362642 12.377897,8.19008853 C12.282615,8.44927179 12.4154833,8.73662261 12.6746665,8.83190455 C12.9338498,8.9271865 13.2212006,8.79431823 13.3164826,8.53513497 Z M12.3668662,5.15151318 C12.0511516,4.90026597 11.6876614,4.71455015 11.2968001,4.60709601 C11.0305365,4.53389578 10.7553466,4.69040462 10.6821464,4.95666828 C10.6089462,5.22293194 10.765455,5.4981218 11.0317186,5.57132203 C11.2916225,5.64277383 11.5336059,5.76640891 11.7441747,5.93398061 C11.9602471,6.10593213 12.2748026,6.07016506 12.4467541,5.85409265 C12.6187057,5.63802023 12.5829386,5.32346469 12.3668662,5.15151318 Z M8.94366027,4.93484935 C8.59886233,5.1444204 8.29927448,5.42178319 8.06363322,5.74921687 C7.90233196,5.9733519 7.9532688,6.28580976 8.17740384,6.44711102 C8.40153888,6.60841227 8.71399673,6.55747543 8.87529799,6.33334039 C9.03269204,6.11463459 9.23291646,5.92926391 9.46305384,5.7893845 C9.6990272,5.64595793 9.7740512,5.33839351 9.63062463,5.10242014 C9.48719806,4.86644678 9.17963364,4.79142277 8.94366027,4.93484935 Z M7.56417542,8.1196657 C7.64770963,8.51708562 7.81100685,8.89104199 8.04261462,9.22120209 C8.20119959,9.44726717 8.51302006,9.50197061 8.73908514,9.34338564 C8.96515022,9.18480068 9.01985365,8.87298021 8.86126869,8.64691513 C8.70693286,8.42690726 8.59833169,8.17820676 8.54279124,7.91396916 C8.48598971,7.64373186 8.22087236,7.47070799 7.95063506,7.52750952 C7.68039776,7.58431105 7.50737388,7.8494284 7.56417542,8.1196657 Z M10.1049151,10.4741592 C9.83113932,10.4380835 9.63844538,10.1868993 9.6745211,9.91312352 C9.71059682,9.63934778 9.96178105,9.44665384 10.2355568,9.48272956 C10.3165479,9.49340185 10.3985727,9.49916355 10.4813639,9.49991542 C10.7574949,9.50242309 10.9793105,9.72830435 10.9768028,10.0044353 C10.9742951,10.2805663 10.7484139,10.5023819 10.4722829,10.4998742 C10.3488091,10.4987529 10.2261891,10.4901396 10.1049151,10.4741592 Z"
            id="DM_svg_Oval-73"
            fill="#0E673F"
            fillRule="nonzero"
          />
          <path
            d="M10.5,8.5 C11.0522847,8.5 11,8.05228475 11,7.5 C11,6.94771525 11.0522847,6.5 10.5,6.5 C9.94771525,6.5 10,6.94771525 10,7.5 C10,8.05228475 9.94771525,8.5 10.5,8.5 Z"
            id="DM_svg_Oval-84"
            fill="#0E673F"
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
