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
      <title>{"YT"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <path
          d="M0,0.491005182 C0,0.219830508 0.21484375,0 0.497698784,0 L4.50230122,0 C4.77717266,0 5,0.227880478 5,0.491005182 L5,5.50899482 C5,5.78016949 4.78177452,6.00788266 4.49942374,6.03091038 C4.49942374,6.03091038 3,6 2.5,6.94055176 C2,6 0.500576258,6.03091038 0.500576258,6.03091038 C0.224115624,6.01383905 0,5.77211952 0,5.50899482 L0,0.491005182 Z"
          id="YT_svg_path-2"
        />
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_linearGradient-4"
        >
          <stop stopColor="#1B2CA9" offset="0%" />
          <stop stopColor="#132294" offset="100%" />
        </linearGradient>
        <rect id="YT_svg_path-5" x={0} y={0} width={5} height={3} />
        <filter
          x="-15.0%"
          y="-25.0%"
          width="130.0%"
          height="150.0%"
          filterUnits="objectBoundingBox"
          id="YT_svg_filter-6"
        >
          <feMorphology
            radius={0.25}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx={0}
            dy={0}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          />
        </filter>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_linearGradient-7"
        >
          <stop stopColor="#E6402C" offset="0%" />
          <stop stopColor="#D1321F" offset="100%" />
        </linearGradient>
        <rect id="YT_svg_path-8" x={0} y={3} width={5} height={4} />
        <filter
          x="-15.0%"
          y="-18.8%"
          width="130.0%"
          height="137.5%"
          filterUnits="objectBoundingBox"
          id="YT_svg_filter-9"
        >
          <feMorphology
            radius={0.25}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx={0}
            dy={0}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowOffsetOuter1"
          />
        </filter>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_linearGradient-10"
        >
          <stop stopColor="#D0D0D0" offset="0%" />
          <stop stopColor="#C4C4C4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_linearGradient-11"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="YT_svg_linearGradient-12"
        >
          <stop stopColor="#F7E04B" offset="0%" />
          <stop stopColor="#EAD135" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="YT_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="YT_svg_YT">
          <rect
            id="YT_svg_FlagBackground"
            fill="url(#YT_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <g id="YT_svg_Group-2" transform="translate(8.000000, 4.000000)">
            <mask id="YT_svg_mask-3" fill="white">
              <use xlinkHref="#path-2" />
            </mask>
            <g id="YT_svg_Rectangle-1413">
              <use fill="#D8D8D8" fillRule="evenodd" xlinkHref="#path-2" />
              <path
                stroke="#979797"
                strokeWidth={1}
                d="M4.5,0.499992354 L4.5,0.491005182 C4.5,0.497950084 4.49934225,0.499642123 4.5,0.499992354 Z M4.500015,0.5 C4.50035608,0.500166293 4.50103425,0.5 4.50230122,0.5 L4.500015,0.5 Z M0.5,0.5 L0.5,5.50899482 C0.5,5.5096944 0.52039143,5.53118161 0.490271027,5.53101659 C0.493447987,5.53095507 0.493447987,5.53095507 0.499491206,5.53087957 C0.841705468,5.5272592 1.29263846,5.57914699 1.74964719,5.74362637 C2.03481782,5.8462605 2.28839025,5.98420381 2.5,6.16244113 C2.71160975,5.98420381 2.96518218,5.8462605 3.25035281,5.74362637 C3.69407543,5.58392872 4.13207043,5.53037131 4.47038919,5.53070596 C4.4897994,5.52595068 4.5,5.51446456 4.5,5.50899482 L4.5,0.5 C4.50000493,0.499994978 4.50000993,0.499997526 4.500015,0.5 L0.5,0.5 Z"
              />
            </g>
            <g id="YT_svg_Rectangle-1414" mask="url(#YT_svg_mask-3)">
              <use
                fill="black"
                fillOpacity={1}
                filter="url(#YT_svg_filter-6)"
                xlinkHref="#path-5"
              />
              <use
                fill="url(#YT_svg_linearGradient-4)"
                fillRule="evenodd"
                xlinkHref="#path-5"
              />
            </g>
            <g id="YT_svg_Rectangle-1414-Copy" mask="url(#YT_svg_mask-3)">
              <use
                fill="black"
                fillOpacity={1}
                filter="url(#YT_svg_filter-9)"
                xlinkHref="#path-8"
              />
              <use
                fill="url(#YT_svg_linearGradient-7)"
                fillRule="evenodd"
                xlinkHref="#path-8"
              />
            </g>
          </g>
          <g id="YT_svg_Group" transform="translate(14.000000, 3.000000)">
            <path
              d="M1.03900146,1.72583008 L1.03900146,1.26226807 L1.5,1 C1.5,1 1.04486084,0.443908691 1.26989746,0.443908691 C1.54486084,0.443908691 2.69909286,0.809953822 3,1 C3.30090714,1.19004618 3.45344159,1.41844189 3.49578857,1.84973145 C3.53813556,2.281021 3.17980957,2.83129883 3.17980957,2.83129883 L3,3.24975586 L3.78808594,3.07147217 C3.78808594,3.07147217 3.91567981,3.8974742 3.33551025,4.5 C2.7553407,5.1025258 1.94122314,4.98950195 1.94122314,4.98950195 L1.77746582,4.5 C1.77746582,4.5 1.24609375,4.7064209 0.933593749,5.1741333 C0.621093749,5.6418457 0.532972177,6.45023985 1.03900146,6.94921875 C1.54503075,7.44819765 2.38000488,7.40588379 2.77813721,6.70440674 C2.77813721,6.70440674 2.93786621,6.08398437 2.56976318,5.79229736 C2.20166015,5.50061035 1.95251065,6.10328088 1.94122314,6.07006836 C1.86972123,5.85968013 1.77746582,5.50061035 2.36901855,5.50061035 C2.96057129,5.50061035 3.26489258,6.13665771 3.17980957,6.62567139 C3.09472656,7.11468506 2.92401123,7.57897949 1.77746582,7.70916748 C0.630920412,7.83935547 0.33581543,6.3861084 0.33581543,6.3861084 C0.33581543,6.3861084 0.0435790985,5.02996826 0.33581543,4.05072021 C0.628051761,3.07147217 1.06121826,3.04718018 1.94122314,2.50952148 C2.82122803,1.97186279 1.40997314,2.32720947 1.40997314,2.32720947 C1.40997314,2.32720947 0.739807128,2.83129883 0.529724121,2.64782715 C0.319641115,2.46435547 1.03900146,1.72583008 1.03900146,1.72583008 Z"
              id="YT_svg_Rectangle-1411"
              fill="url(#YT_svg_linearGradient-10)"
            />
            <circle
              id="YT_svg_Oval-280"
              fillOpacity={0.3}
              fill="url(#YT_svg_linearGradient-11)"
              cx={1.75}
              cy={1.75}
              r={1}
            />
          </g>
          <g
            id="YT_svg_Group-Copy"
            transform="translate(5.000000, 7.000000) scale(-1, 1) translate(-5.000000, -7.000000) translate(3.000000, 3.000000)"
          >
            <path
              d="M1.03900146,1.72583008 L1.03900146,1.26226807 L1.5,1 C1.5,1 1.04486084,0.443908691 1.26989746,0.443908691 C1.54486084,0.443908691 2.69909286,0.809953822 3,1 C3.30090714,1.19004618 3.45344159,1.41844189 3.49578857,1.84973145 C3.53813556,2.281021 3.17980957,2.83129883 3.17980957,2.83129883 L3,3.24975586 L3.78808594,3.07147217 C3.78808594,3.07147217 3.91567981,3.8974742 3.33551025,4.5 C2.7553407,5.1025258 1.94122314,4.98950195 1.94122314,4.98950195 L1.77746582,4.5 C1.77746582,4.5 1.24609375,4.7064209 0.933593749,5.1741333 C0.621093749,5.6418457 0.532972177,6.45023985 1.03900146,6.94921875 C1.54503075,7.44819765 2.38000488,7.40588379 2.77813721,6.70440674 C2.77813721,6.70440674 2.93786621,6.08398437 2.56976318,5.79229736 C2.20166015,5.50061035 1.95251065,6.10328088 1.94122314,6.07006836 C1.86972123,5.85968013 1.77746582,5.50061035 2.36901855,5.50061035 C2.96057129,5.50061035 3.26489258,6.13665771 3.17980957,6.62567139 C3.09472656,7.11468506 2.92401123,7.57897949 1.77746582,7.70916748 C0.630920412,7.83935547 0.33581543,6.3861084 0.33581543,6.3861084 C0.33581543,6.3861084 0.0435790985,5.02996826 0.33581543,4.05072021 C0.628051761,3.07147217 1.06121826,3.04718018 1.94122314,2.50952148 C2.82122803,1.97186279 1.40997314,2.32720947 1.40997314,2.32720947 C1.40997314,2.32720947 0.739807128,2.83129883 0.529724121,2.64782715 C0.319641115,2.46435547 1.03900146,1.72583008 1.03900146,1.72583008 Z"
              id="YT_svg_Rectangle-1411"
              fill="url(#YT_svg_linearGradient-10)"
            />
            <circle
              id="YT_svg_Oval-280"
              fillOpacity={0.3}
              fill="url(#YT_svg_linearGradient-11)"
              cx={1.75}
              cy={1.75}
              r={1}
            />
          </g>
          <path
            d="M9.6337822,5 C9.54869714,5.14708668 9.5,5.31785643 9.5,5.5 C9.5,6.05228475 9.94771525,6.5 10.5,6.5 C11.0522847,6.5 11.5,6.05228475 11.5,5.5 C11.5,5.31785643 11.4513029,5.14708668 11.3662178,5 C11.1933131,5.29890069 10.8701412,5.5 10.5,5.5 C10.1298588,5.5 9.80668691,5.29890069 9.6337822,5 L9.6337822,5 Z"
            id="YT_svg_Combined-Shape"
            fill="url(#YT_svg_linearGradient-1)"
          />
          <path
            d="M9.5,9 C9.22385763,9 9,8.77614237 9,8.5 C9,8.22385763 9.22385763,8 9.5,8 C9.77614237,8 10,8.22385763 10,8.5 C10,8.77614237 9.77614237,9 9.5,9 Z M11.5,9 C11.2238576,9 11,8.77614237 11,8.5 C11,8.22385763 11.2238576,8 11.5,8 C11.7761424,8 12,8.22385763 12,8.5 C12,8.77614237 11.7761424,9 11.5,9 Z"
            id="YT_svg_Combined-Shape"
            fill="url(#YT_svg_linearGradient-12)"
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
