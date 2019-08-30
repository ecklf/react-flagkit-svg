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
      <title>{"GB"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GB_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GB_svg_linearGradient-2"
        >
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="GB_svg_linearGradient-3"
        >
          <stop stopColor="#E6273E" offset="0%" />
          <stop stopColor="#CF152B" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="GB_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="GB_svg_GB">
          <rect
            id="GB_svg_FlagBackground"
            fill="url(#GB_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="GB_svg_Mask-Copy"
            fill="url(#GB_svg_linearGradient-2)"
            x={-0.00188732147}
            y={0}
            width={21}
            height={15}
          />
          <path
            d="M5.00341861,10 L-0.00188732147,10 L-0.00188732147,5 L5.00341861,5 L-2.08212503,0.220740472 L-0.96373922,-1.43733467 L7.99811268,4.60751076 L7.99811268,-1 L12.9981127,-1 L12.9981127,4.60751076 L21.9599646,-1.43733467 L23.0783504,0.220740472 L15.9928067,5 L20.9981127,5 L20.9981127,10 L15.9928067,10 L23.0783504,14.7792595 L21.9599646,16.4373347 L12.9981127,10.3924892 L12.9981127,16 L7.99811268,16 L7.99811268,10.3924892 L-0.96373922,16.4373347 L-2.08212503,14.7792595 L5.00341861,10 Z"
            id="GB_svg_Rectangle-2"
            fill="url(#GB_svg_linearGradient-1)"
          />
          <path
            d="M14.1364901,4.95800192 L23.6355136,-1.29114359 C23.7508618,-1.367028 23.7828535,-1.52205266 23.7069691,-1.63740087 C23.6310847,-1.75274908 23.47606,-1.78474082 23.3607118,-1.70885641 L13.8616884,4.5402891 C13.7463402,4.6161735 13.7143484,4.77119817 13.7902328,4.88654638 C13.8661172,5.00189459 14.0211419,5.03388632 14.1364901,4.95800192 Z"
            id="GB_svg_Line"
            fill="#DB1F35"
            fillRule="nonzero"
          />
          <path
            d="M14.8679651,10.4804377 L23.383346,16.2200617 C23.4978376,16.2972325 23.6532106,16.266978 23.7303814,16.1524864 C23.8075522,16.0379948 23.7772977,15.8826218 23.6628061,15.805451 L15.1474253,10.065827 C15.0329337,9.98865619 14.8775606,10.0189107 14.8003898,10.1334023 C14.7232191,10.2478938 14.7534735,10.4032669 14.8679651,10.4804377 Z"
            id="GB_svg_Line-Copy-2"
            fill="#DB1F35"
            fillRule="nonzero"
          />
          <path
            d="M6.14197982,4.5255348 L-2.74028336,-1.46054919 C-2.8547799,-1.53771262 -3.01015101,-1.50744816 -3.08731444,-1.39295161 C-3.16447787,-1.27845507 -3.13421341,-1.12308397 -3.01971687,-1.04592054 L5.86254632,4.94016345 C5.97704286,5.01732688 6.13241396,4.98706241 6.20957739,4.87256587 C6.28674083,4.75806933 6.25647636,4.60269823 6.14197982,4.5255348 Z"
            id="GB_svg_Line-Copy"
            fill="#DB1F35"
            fillRule="nonzero"
          />
          <path
            d="M6.82747404,9.99532456 L-3.01816805,16.5244994 C-3.13323644,16.6008074 -3.16465792,16.7559487 -3.08834987,16.8710171 C-3.01204183,16.9860854 -2.85690058,17.0175069 -2.74183218,16.9411989 L7.10380991,10.4120241 C7.2188783,10.335716 7.25029978,10.1805748 7.17399174,10.0655064 C7.09768369,9.95043799 6.94254244,9.91901651 6.82747404,9.99532456 Z"
            id="GB_svg_Line-Copy-3"
            fill="#DB1F35"
            fillRule="nonzero"
          />
          <polygon
            id="GB_svg_Rectangle-2-Copy-3"
            fill="url(#GB_svg_linearGradient-3)"
            points="-0.00188732147 9 8.99811268 9 8.99811268 15 11.9981127 15 11.9981127 9 20.9981127 9 20.9981127 6 11.9981127 6 11.9981127 0 8.99811268 0 8.99811268 6 -0.00188732147 6"
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
