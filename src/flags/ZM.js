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
      <title>{"ZM"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZM_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="100%"
          x2="50%"
          y2="3.061617e-15%"
          id="ZM_svg_linearGradient-2"
        >
          <stop stopColor="#2A8815" offset="0%" />
          <stop stopColor="#35A51D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZM_svg_linearGradient-3"
        >
          <stop stopColor="#EF8A34" offset="0%" />
          <stop stopColor="#EC7E21" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZM_svg_linearGradient-4"
        >
          <stop stopColor="#F48D36" offset="0%" />
          <stop stopColor="#EC7E21" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZM_svg_linearGradient-5"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="ZM_svg_linearGradient-6"
        >
          <stop stopColor="#EC322B" offset="0%" />
          <stop stopColor="#DB261F" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="ZM_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="ZM_svg_ZM">
          <rect
            id="ZM_svg_FlagBackground"
            fill="url(#ZM_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="ZM_svg_Mask-Copy"
            fill="url(#ZM_svg_linearGradient-2)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M16.1957397,3.6239624 C16.1957397,3.6239624 15.7925991,3.77693009 15.3621827,3.62396231 C15.0196689,3.50223465 14.6752552,3.09044022 14.3922729,2.9473877 C14.2282057,2.86444882 14.5326538,2.46911625 14.2079468,2.57580571 C13.8832397,2.68249516 13.3528442,2.18682861 13.3528442,2.18682861 C13.3528442,2.18682861 12.8048939,1.5189209 13.6119995,1.5189209 C14.4191051,1.5189209 16.1215821,2.09881594 16.1215821,2.09881594 C16.1215821,2.09881594 16.1853303,1.79933622 16.3241578,1.66131594 C16.4629853,1.52329565 16.565926,1.39648807 16.7933961,1.43090822 C17.0208662,1.46532837 17.1466065,1.78576662 17.1466065,1.78576662 L16.7933961,1.92059328 L16.7933961,2.18682863 C16.7933961,2.18682863 19.1547325,1.4626417 19.7128906,1.5189209 C20.2710488,1.57520009 19.8218249,2.18758725 19.4848633,2.57580566 C19.3545218,2.72597403 18.9289552,3.03192214 18.6702271,2.78662113 C18.4114991,2.54132013 18.5074741,3.05183429 18.2393188,3.21664429 C17.802004,3.48542085 17.6378414,3.73174013 17.4874878,3.80340576 C17.3371342,3.87507139 17.0083008,3.80340576 17.0083008,3.80340576 L17.1043701,4.04992676 C17.1043701,4.04992676 17.1312984,4.34621467 17.0083008,4.46435547 C16.8853032,4.58249626 16.7997934,4.66581581 16.5,4.63043213 C16.2002066,4.59504845 16.0587347,4.67027965 15.9590454,4.34051514 C15.8593561,4.01075062 16.1957397,3.6239624 16.1957397,3.6239624 Z M16.442688,3.28240967 L16.442688,4.05389404 L16.7818604,3.77026367 L16.442688,3.28240967 Z"
            id="ZM_svg_Combined-Shape"
            fill="url(#ZM_svg_linearGradient-3)"
          />
          <rect
            id="ZM_svg_Rectangle-1349"
            fill="url(#ZM_svg_linearGradient-4)"
            x={18}
            y={6}
            width={3}
            height={9}
          />
          <rect
            id="ZM_svg_Rectangle-1349-Copy"
            fill="url(#ZM_svg_linearGradient-5)"
            x={15}
            y={6}
            width={3}
            height={9}
          />
          <rect
            id="ZM_svg_Rectangle-1349-Copy-2"
            fill="url(#ZM_svg_linearGradient-6)"
            x={12}
            y={6}
            width={3}
            height={9}
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
