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
      <title>{"VG"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VG_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VG_svg_linearGradient-2"
        >
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VG_svg_linearGradient-3"
        >
          <stop stopColor="#008339" offset="0%" />
          <stop stopColor="#00612A" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VG_svg_linearGradient-4"
        >
          <stop stopColor="#FFD033" offset="0%" />
          <stop stopColor="#FEC403" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="VG_svg_linearGradient-5"
        >
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="VG_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="VG_svg_VG">
          <rect
            id="VG_svg_FlagBackground"
            fill="url(#VG_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="VG_svg_Mask-Copy"
            fill="url(#VG_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M13,7.5 L13,4.99934196 C13,4.44742064 13.4437166,4 13.9998075,4 L17.0001925,4 C17.5523709,4 18,4.44095969 18,4.99934196 L18,7.5 C18,10 15.5,11 15.5,11 C15.5,11 13,10 13,7.5 Z"
            id="VG_svg_Mask"
            fill="url(#VG_svg_linearGradient-3)"
          />
          <path
            d="M14.5,6 C14.2238576,6 14,5.77614237 14,5.5 C14,5.22385763 14.2238576,5 14.5,5 C14.7761424,5 15,5.22385763 15,5.5 C15,5.77614237 14.7761424,6 14.5,6 Z M14.5,7 C14.2238576,7 14,6.77614237 14,6.5 C14,6.22385763 14.2238576,6 14.5,6 C14.7761424,6 15,6.22385763 15,6.5 C15,6.77614237 14.7761424,7 14.5,7 Z M14.5,8 C14.2238576,8 14,7.77614237 14,7.5 C14,7.22385763 14.2238576,7 14.5,7 C14.7761424,7 15,7.22385763 15,7.5 C15,7.77614237 14.7761424,8 14.5,8 Z M14.5,9 C14.2238576,9 14,8.77614237 14,8.5 C14,8.22385763 14.2238576,8 14.5,8 C14.7761424,8 15,8.22385763 15,8.5 C15,8.77614237 14.7761424,9 14.5,9 Z M16.5,9 C16.2238576,9 16,8.77614237 16,8.5 C16,8.22385763 16.2238576,8 16.5,8 C16.7761424,8 17,8.22385763 17,8.5 C17,8.77614237 16.7761424,9 16.5,9 Z M16.5,8 C16.2238576,8 16,7.77614237 16,7.5 C16,7.22385763 16.2238576,7 16.5,7 C16.7761424,7 17,7.22385763 17,7.5 C17,7.77614237 16.7761424,8 16.5,8 Z M16.5,7 C16.2238576,7 16,6.77614237 16,6.5 C16,6.22385763 16.2238576,6 16.5,6 C16.7761424,6 17,6.22385763 17,6.5 C17,6.77614237 16.7761424,7 16.5,7 Z M16.5,6 C16.2238576,6 16,5.77614237 16,5.5 C16,5.22385763 16.2238576,5 16.5,5 C16.7761424,5 17,5.22385763 17,5.5 C17,5.77614237 16.7761424,6 16.5,6 Z"
            id="VG_svg_Oval-197"
            fill="url(#VG_svg_linearGradient-4)"
          />
          <ellipse
            id="VG_svg_Oval-193"
            fill="url(#VG_svg_linearGradient-1)"
            cx={15.5}
            cy={7}
            rx={1}
            ry={1.5}
          />
          <path
            d="M12.5,10 C12.5,10.9536401 13.8658999,11.5 15.5,11.5 C17.1341001,11.5 18.5,10.9536401 18.5,10 C18.5,9.72385763 18.2761424,9.5 18,9.5 C17.7238576,9.5 17.5,9.72385763 17.5,10 C17.5,10.0095598 17.3788043,10.1241754 17.0820716,10.2428684 C16.6792626,10.403992 16.1117918,10.5 15.5,10.5 C14.8882082,10.5 14.3207374,10.403992 13.9179284,10.2428684 C13.6211957,10.1241754 13.5,10.0095598 13.5,10 C13.5,9.72385763 13.2761424,9.5 13,9.5 C12.7238576,9.5 12.5,9.72385763 12.5,10 L12.5,10 Z"
            id="VG_svg_Shape"
            fill="url(#VG_svg_linearGradient-4)"
            fillRule="nonzero"
          />
          <path
            d="M3,3.22996746 L-1.3516287,-0.5 L0.660232527,-0.5 L4.16023253,2 L4.85660189,2 L9.5,-0.902123821 L9.5,0.25 C9.5,0.552509227 9.33308555,0.876533554 9.08215972,1.05576629 L6,3.25730895 L6,3.77003254 L9.13722049,6.45907867 C9.59934261,6.85518335 9.34102897,7.5 8.75,7.5 C8.50478614,7.5 8.2052751,7.40393402 8.00092153,7.25796718 L4.83976747,5 L4.14339811,5 L-0.5,7.90212382 L-0.5,6.24269105 L3,3.74269105 L3,3.22996746 Z"
            id="VG_svg_Rectangle-36"
            fill="url(#VG_svg_linearGradient-1)"
            fillRule="nonzero"
          />
          <path
            d="M3.5,3 L0,0 L0.5,0 L4,2.5 L5,2.5 L9,0 L9,0.25 C9,0.388071187 8.91348267,0.561798096 8.79154062,0.648899555 L5.5,3 L5.5,4 L8.8118248,6.83870697 C8.91575109,6.92778665 8.8840332,7 8.75,7 L8.75,7 C8.61192881,7 8.41348267,6.9382019 8.29154062,6.85110044 L5,4.5 L4,4.5 L0,7 L0,6.5 L3.5,4 L3.5,3 Z"
            id="VG_svg_Rectangle-36"
            fill="url(#VG_svg_linearGradient-5)"
          />
          <path
            d="M0,2.5 L0,4.5 L3.5,4.5 L3.5,7.00461102 C3.5,7.2782068 3.71403503,7.5 4.00468445,7.5 L4.99531555,7.5 C5.27404508,7.5 5.5,7.2842474 5.5,7.00461102 L5.5,4.5 L9.00952148,4.5 C9.28040529,4.5 9.5,4.28596497 9.5,3.99531555 L9.5,3.00468445 C9.5,2.72595492 9.28494263,2.5 9.00952148,2.5 L5.5,2.5 L5.5,0 L3.5,0 L3.5,2.5 L0,2.5 Z"
            id="VG_svg_Rectangle-2"
            fill="url(#VG_svg_linearGradient-1)"
          />
          <polygon
            id="VG_svg_Rectangle-36"
            fill="url(#VG_svg_linearGradient-5)"
            points="0 3 4 3 4 2.5 4 0 5 0 5 2.5 5 3 9 3 9 4 5 4 5 4.5 5 7 4 7 4 4.5 4 4 0 4"
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
