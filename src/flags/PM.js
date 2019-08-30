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
      <title>{"PM"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_linearGradient-2"
        >
          <stop stopColor="#138E16" offset="0%" />
          <stop stopColor="#0F7F12" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_linearGradient-3"
        >
          <stop stopColor="#26A7DC" offset="0%" />
          <stop stopColor="#1B94C6" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_linearGradient-4"
        >
          <stop stopColor="#FBCD3F" offset="0%" />
          <stop stopColor="#FFCE2F" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_linearGradient-5"
        >
          <stop stopColor="#F03633" offset="0%" />
          <stop stopColor="#D82A28" offset="100%" />
        </linearGradient>
        <rect id="PM_svg_path-6" x={0} y={0} width={7} height={5} />
        <linearGradient
          x1="82.8416049%"
          y1="18.1366533%"
          x2="20.4259648%"
          y2="78.4787716%"
          id="PM_svg_linearGradient-8"
        >
          <stop stopColor="#2AA854" offset="0%" />
          <stop stopColor="#219447" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_linearGradient-9"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_linearGradient-10"
        >
          <stop stopColor="#D7181D" offset="0%" />
          <stop stopColor="#C60E13" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="PM_svg_linearGradient-11"
        >
          <stop stopColor="#FBCD3F" offset="0%" />
          <stop stopColor="#FECB2F" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="PM_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="PM_svg_PM">
          <rect
            id="PM_svg_FlagBackground"
            fill="url(#PM_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="PM_svg_Rectangle-2"
            fill="url(#PM_svg_linearGradient-2)"
            x={0}
            y={10}
            width={21}
            height={5}
          />
          <polygon
            id="PM_svg_Rectangle-2"
            fill="url(#PM_svg_linearGradient-3)"
            points="0 15 7 15 21 15 21 0 7 0 0 0"
          />
          <path
            d="M17.3255147,6.42868342 C18.3529675,6.17626317 19,6.10923857 19,7 C19,8.65685425 16.7614237,10 14,10 C11.2385763,10 9,8.65685425 9,7 C9,6.10923857 9.64703249,6.17626317 10.6744853,6.42868342 C10.6092993,6.25116276 10.5547704,6.06301595 10.5129994,5.86649853 C10.2259332,4.51595853 10.6501175,3.28150168 11.4604415,3.109262 C12.2707656,2.93702231 13.160376,3.89222345 13.4474422,5.24276346 C13.5827623,5.8793947 13.5600365,6.49023126 13.413319,6.97616846 C13.6057537,6.99144098 13.8015264,7 14,7 C14.1984736,7 14.3942463,6.99144098 14.586681,6.97616846 C14.4399635,6.49023126 14.4172377,5.8793947 14.5525578,5.24276346 C14.839624,3.89222345 15.7292344,2.93702231 16.5395585,3.109262 C17.3498825,3.28150168 17.7740668,4.51595853 17.4870006,5.86649853 C17.4452296,6.06301595 17.3907007,6.25116276 17.3255147,6.42868342 L17.3255147,6.42868342 Z"
            id="PM_svg_Combined-Shape"
            fill="url(#PM_svg_linearGradient-4)"
          />
          <path
            d="M15.7763932,12.9472136 C15.9171569,13.0175955 16.0828431,13.0175955 16.2236068,12.9472136 L18.2236068,11.9472136 C18.470596,11.823719 18.5707082,11.5233825 18.4472136,11.2763932 C18.323719,11.029404 18.0233825,10.9292918 17.7763932,11.0527864 L16,11.940983 L14.2236068,11.0527864 C14.0828431,10.9824045 13.9171569,10.9824045 13.7763932,11.0527864 L12,11.940983 L10.2236068,11.0527864 C9.97661755,10.9292918 9.67628103,11.029404 9.5527864,11.2763932 C9.42929178,11.5233825 9.52940395,11.823719 9.7763932,11.9472136 L11.7763932,12.9472136 C11.9171569,13.0175955 12.0828431,13.0175955 12.2236068,12.9472136 L14,12.059017 L15.7763932,12.9472136 Z"
            id="PM_svg_Line"
            fill="url(#PM_svg_linearGradient-1)"
            fillRule="nonzero"
          />
          <g id="PM_svg_Group">
            <mask id="PM_svg_mask-7" fill="white">
              <use xlinkHref="#path-6" />
            </mask>
            <use
              id="PM_svg_Rectangle-2"
              fill="url(#PM_svg_linearGradient-5)"
              xlinkHref="#path-6"
            />
            <path
              d="M4,2 L4,-2 L3,-2 L3,2 L-1,2 L-1,3 L3,3 L3,7 L4,7 L4,3 L8,3 L8,2 L4,2 Z"
              id="PM_svg_Combined-Shape"
              fill="url(#PM_svg_linearGradient-8)"
              mask="url(#PM_svg_mask-7)"
              transform="translate(3.500000, 2.500000) rotate(-45.000000) translate(-3.500000, -2.500000) "
            />
            <path
              d="M4,2 L4,-1 L3,-1 L3,2 L0,2 L0,3 L3,3 L3,6 L4,6 L4,3 L7,3 L7,2 L4,2 Z"
              id="PM_svg_Combined-Shape-Copy"
              fill="url(#PM_svg_linearGradient-1)"
              mask="url(#PM_svg_mask-7)"
            />
          </g>
          <rect
            id="PM_svg_Rectangle-2-Copy"
            fill="url(#PM_svg_linearGradient-1)"
            x={0}
            y={5}
            width={7}
            height={5}
          />
          <path
            d="M1.5,7 C1.22385763,7 1,6.77614237 1,6.5 C1,6.22385763 1.22385763,6 1.5,6 C1.77614237,6 2,6.22385763 2,6.5 C2,6.77614237 1.77614237,7 1.5,7 Z M3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 C3.77614237,6 4,6.22385763 4,6.5 C4,6.77614237 3.77614237,7 3.5,7 Z M5.5,7 C5.22385763,7 5,6.77614237 5,6.5 C5,6.22385763 5.22385763,6 5.5,6 C5.77614237,6 6,6.22385763 6,6.5 C6,6.77614237 5.77614237,7 5.5,7 Z M4.5,9 C4.22385763,9 4,8.77614237 4,8.5 C4,8.22385763 4.22385763,8 4.5,8 C4.77614237,8 5,8.22385763 5,8.5 C5,8.77614237 4.77614237,9 4.5,9 Z M2.5,9 C2.22385763,9 2,8.77614237 2,8.5 C2,8.22385763 2.22385763,8 2.5,8 C2.77614237,8 3,8.22385763 3,8.5 C3,8.77614237 2.77614237,9 2.5,9 Z"
            id="PM_svg_Combined-Shape"
            fill="url(#PM_svg_linearGradient-9)"
          />
          <rect
            id="PM_svg_Rectangle-2-Copy-2"
            fill="url(#PM_svg_linearGradient-10)"
            x={0}
            y={10}
            width={7}
            height={5}
          />
          <path
            d="M3.5,12 C2.11928813,12 1,11.7761424 1,11.5 C1,11.2238576 2.11928813,11 3.5,11 C4.88071187,11 6,11.2238576 6,11.5 C6,11.7761424 4.88071187,12 3.5,12 Z M3.5,14 C2.11928813,14 1,13.7761424 1,13.5 C1,13.2238576 2.11928813,13 3.5,13 C4.88071187,13 6,13.2238576 6,13.5 C6,13.7761424 4.88071187,14 3.5,14 Z"
            id="PM_svg_Combined-Shape"
            fill="url(#PM_svg_linearGradient-11)"
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
