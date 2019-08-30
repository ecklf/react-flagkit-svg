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
      <title>{"US-CA"}</title>
      <desc>{"Created with sketchtool."}</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="USCA_svg_linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="USCA_svg_linearGradient-2"
        >
          <stop stopColor="#E7413D" offset="0%" />
          <stop stopColor="#DB3531" offset="100%" />
        </linearGradient>
        <path
          d="M7.31164554,6.60015859 C7.16130173,6.46057562 7.16833315,6.72568461 6.83068848,6.68060292 C6.74081336,6.66860296 6.63098145,6.46435536 6.63098145,6.46435536 C6.63098145,6.46435536 6.06743044,6.42784005 6.0369873,6.16577142 C6.00654417,5.90370279 6.38690828,5.78023091 6.52856447,5.58270253 C6.64006102,5.42722939 6.54654958,5.29625057 6.63098143,5.12493898 C6.71541329,4.95362739 6.96554849,4.89932091 6.9909668,4.81127931 C7.00674509,4.75662793 6.857965,4.54693809 7.06793213,4.47583009 C7.27094443,4.40707743 7.45916748,4.58032228 7.45916748,4.58032228 C7.45916748,4.58032228 7.46016394,4.33798604 7.62469483,4.30944826 C7.86312589,4.26809253 8.01745605,4.47583014 8.01745605,4.47583014 C8.01745605,4.47583014 9.23309315,3.46917666 9.91699219,3.46179199 C10.5049939,3.45544281 10.7731248,3.82462218 11.3372803,3.88549805 C12.2560672,3.98464085 12.6640016,3.46179199 13.5981447,3.88549804 C14.7933478,4.42761503 14.8684688,6.8774413 14.8684688,6.8774413 C14.8684688,6.8774413 15.1690517,7.27942158 15.2163082,7.50000013 C15.2610725,7.70894635 15.2163082,7.85552992 15.0114742,8.02105726 C14.8066402,8.18658461 14.1080935,8.39404271 13.977234,8.16601556 C13.8463745,7.93798841 14.5876168,7.76721523 14.4628292,7.71258539 C13.9772339,7.50000013 13.5981446,6.8774413 13.5981446,6.8774413 C13.5981446,6.8774413 13.0799397,7.15397063 12.7930298,7.50000013 C12.5570676,7.7845839 12.6582032,8.16601576 12.3027954,8.16601576 C11.6225771,8.16601576 11.3109045,8.23153136 11.2720337,8.02105726 C11.1882934,7.56762728 12.153676,7.90298063 11.9833374,7.79016127 C11.866211,7.71258558 11.8662111,6.46435541 11.8662111,6.46435541 L11.1278077,6.46435541 C11.1278077,6.46435541 11.2857808,7.90147765 11.0139161,7.93798841 C10.3049317,8.03320326 10.6471765,8.02237418 10.053589,7.93798822 C9.72644255,7.89148022 10.5,7.50000013 10.5,7.50000013 C10.5,7.50000013 10.3960549,6.75642108 10.053589,6.76196283 C9.49523929,7.31732167 8.62420658,8.34179653 8.2773368,8.34179648 C7.8559869,8.34179643 7.93995121,8.29479379 7.62469486,8.27056898 C6.96009518,8.21950007 7.62469486,7.71258558 8.01745606,7.93798822 C8.18377689,7.71258558 8.77532963,6.05902089 8.77532963,6.05902089 C8.77532963,6.05902089 7.69879154,6.95959462 7.31164554,6.60015859 Z"
          id="USCA_svg_path-3"
        />
      </defs>
      <g
        id="USCA_svg_Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="USCA_svg_US-CA">
          <rect
            id="USCA_svg_FlagBackground"
            fill="url(#USCA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={15}
          />
          <rect
            id="USCA_svg_Rectangle-2"
            fill="url(#USCA_svg_linearGradient-2)"
            x={0}
            y={12}
            width={21}
            height={3}
          />
          <rect
            id="USCA_svg_Rectangle-2"
            fill="url(#USCA_svg_linearGradient-1)"
            x={0}
            y={0}
            width={21}
            height={12}
          />
          <path
            d="M3.333,10.6039999 L3.334,10.6039999 C3.35666678,10.6146666 3.37433327,10.6299998 3.387,10.6499999 C3.39966673,10.67 3.406,10.6919998 3.406,10.7159999 C3.406,10.74 3.39866674,10.7633331 3.384,10.7859999 C3.29333288,10.9153339 3.16733414,10.9799999 3.006,10.9799999 C2.8926661,10.9799999 2.79800038,10.9486669 2.722,10.8859999 C2.64599962,10.8233329 2.59000018,10.7390005 2.554,10.6329999 C2.51799982,10.5269994 2.5,10.4093339 2.5,10.2799999 C2.5,10.1519993 2.51799982,10.0350005 2.554,9.92899992 C2.59000018,9.82299939 2.64599962,9.73833357 2.722,9.67499992 C2.79800038,9.61166627 2.8926661,9.57999992 3.006,9.57999992 C3.15800076,9.57999992 3.27866622,9.638666 3.368,9.75599992 C3.38533342,9.77733336 3.394,9.80199978 3.394,9.82999992 C3.394,9.8526667 3.38866672,9.87333316 3.378,9.89199992 C3.36733328,9.91066668 3.3520001,9.92599986 3.332,9.93799992 L3.328,9.93999992 C3.31066658,9.95066664 3.29000012,9.95599992 3.266,9.95599992 C3.2259998,9.95599992 3.19400012,9.94066674 3.17,9.90999992 C3.12466644,9.8526663 3.07000032,9.82399992 3.006,9.82399992 C2.92866628,9.82399992 2.86700023,9.86499951 2.821,9.94699992 C2.77499977,10.0290003 2.752,10.1399992 2.752,10.2799999 C2.752,10.4226673 2.77499977,10.5346662 2.821,10.6159999 C2.86700023,10.6973337 2.92866628,10.7379999 3.006,10.7379999 C3.07533368,10.7379999 3.13266644,10.7066669 3.178,10.6439999 C3.19000006,10.6266665 3.20499991,10.6133333 3.223,10.6039999 C3.24100009,10.5946665 3.2599999,10.5899999 3.28,10.5899999 C3.29866676,10.5899999 3.31599992,10.5939999 3.332,10.6019999 C3.332,10.6033333 3.33233333,10.6039999 3.333,10.6039999 L3.333,10.6039999 Z M4.2,10.9799999 C4.26933368,10.9799999 4.304,10.9500002 4.304,10.8899999 C4.304,10.8753332 4.30200002,10.8593333 4.298,10.8419999 L4.02,9.67999992 C4.0133333,9.65333312 3.99866678,9.63000002 3.976,9.60999992 C3.95333322,9.58999982 3.92800014,9.57999992 3.9,9.57999992 L3.798,9.57999992 C3.7713332,9.57999992 3.74666678,9.58999982 3.724,9.60999992 C3.70133322,9.63000002 3.6866667,9.65333312 3.68,9.67999992 L3.404,10.8379999 C3.39866664,10.858 3.396,10.8766665 3.396,10.8939999 C3.396,10.9286668 3.40533324,10.9516665 3.424,10.9629999 C3.44266676,10.9743333 3.46666652,10.9799999 3.496,10.9799999 L3.538,10.9799999 C3.56866682,10.9799999 3.59333324,10.9733333 3.612,10.9599999 C3.63066676,10.9466665 3.64533328,10.9220001 3.656,10.8859999 L3.686,10.7759999 C3.68733334,10.7706666 3.6913333,10.7566667 3.698,10.7339999 C3.7046667,10.7113331 3.71499993,10.6943333 3.729,10.6829999 C3.74300007,10.6716665 3.76133322,10.6659999 3.784,10.6659999 L3.91,10.6659999 C3.9433335,10.6659999 3.96566661,10.6749998 3.977,10.6929999 C3.98833339,10.711 3.99799996,10.7386664 4.006,10.7759999 L4.036,10.8859999 C4.04666672,10.9220001 4.06133324,10.9466665 4.08,10.9599999 C4.09866676,10.9733333 4.12399984,10.9799999 4.156,10.9799999 L4.2,10.9799999 Z M3.92,10.3179999 C3.92533336,10.3446667 3.928,10.3646665 3.928,10.3779999 C3.928,10.4166668 3.90733354,10.4359999 3.866,10.4359999 L3.834,10.4359999 C3.79133312,10.4359999 3.77,10.4140001 3.77,10.3699999 C3.77,10.3513332 3.77199998,10.3333333 3.776,10.3159999 L3.802,10.1719999 L3.832,10.0239999 C3.83333334,10.0186666 3.83566665,10.0139999 3.839,10.0099999 C3.84233335,10.0059999 3.84533332,10.0039999 3.848,10.0039999 C3.85733338,10.0039999 3.86266666,10.0119998 3.864,10.0279999 L3.892,10.1719999 L3.92,10.3179999 Z M5.056,10.9799999 C5.08533348,10.9799999 5.10966657,10.9703334 5.129,10.9509999 C5.14833343,10.9316665 5.158,10.9080001 5.158,10.8799999 L5.158,10.8319999 C5.158,10.8026664 5.14833343,10.7786667 5.129,10.7599999 C5.10966657,10.7413332 5.08533348,10.7319999 5.056,10.7319999 L4.772,10.7319999 C4.74266652,10.7319999 4.71833343,10.722 4.699,10.7019999 C4.67966657,10.6819998 4.67,10.6580001 4.67,10.6299999 L4.67,9.67999992 C4.67,9.65199978 4.66033343,9.62833335 4.641,9.60899992 C4.62166657,9.58966649 4.59800014,9.57999992 4.57,9.57999992 L4.508,9.57999992 C4.4813332,9.57999992 4.4580001,9.58966649 4.438,9.60899992 C4.4179999,9.62833335 4.408,9.65199978 4.408,9.67999992 L4.408,10.8799999 C4.408,10.9080001 4.4179999,10.9316665 4.438,10.9509999 C4.4580001,10.9703334 4.4813332,10.9799999 4.508,10.9799999 L5.056,10.9799999 Z M5.426,10.9799999 C5.45400014,10.9799999 5.4779999,10.9703334 5.498,10.9509999 C5.5180001,10.9316665 5.528,10.9080001 5.528,10.8799999 L5.528,9.67799992 C5.528,9.65133312 5.5180001,9.62833335 5.498,9.60899992 C5.4779999,9.58966649 5.45400014,9.57999992 5.426,9.57999992 L5.366,9.57999992 C5.3393332,9.57999992 5.3160001,9.58966649 5.296,9.60899992 C5.2759999,9.62833335 5.266,9.65133312 5.266,9.67799992 L5.266,10.8799999 C5.266,10.9080001 5.2759999,10.9316665 5.296,10.9509999 C5.3160001,10.9703334 5.3393332,10.9799999 5.366,10.9799999 L5.426,10.9799999 Z M5.91599999,10.9799999 C5.94400013,10.9799999 5.96799989,10.9703334 5.98799999,10.9509999 C6.00800009,10.9316665 6.01799999,10.9080001 6.01799999,10.8799999 L6.01799999,10.4779999 C6.01799999,10.4499998 6.02766656,10.426 6.04699999,10.4059999 C6.06633342,10.3859998 6.08999985,10.3759999 6.11799999,10.3759999 L6.32399999,10.3759999 C6.35066679,10.3759999 6.37366656,10.3663334 6.39299999,10.3469999 C6.41233342,10.3276665 6.42199999,10.3046667 6.42199999,10.2779999 L6.42199999,10.2259999 C6.42199999,10.1993331 6.41233342,10.176 6.39299999,10.1559999 C6.37366656,10.1359998 6.35066679,10.1259999 6.32399999,10.1259999 L6.11799999,10.1259999 C6.08866651,10.1259999 6.06466675,10.1163334 6.04599999,10.0969999 C6.02733323,10.0776665 6.01799999,10.0540001 6.01799999,10.0259999 L6.01799999,9.92999992 C6.01799999,9.90199978 6.02733323,9.87833335 6.04599999,9.85899992 C6.06466675,9.83966649 6.08866651,9.82999992 6.11799999,9.82999992 L6.39999999,9.82999992 C6.42800013,9.82999992 6.45199989,9.82033335 6.47199999,9.80099992 C6.49200009,9.78166649 6.50199999,9.75800006 6.50199999,9.72999992 L6.50199999,9.67999992 C6.50199999,9.65333312 6.49200009,9.63000002 6.47199999,9.60999992 C6.45199989,9.58999982 6.42800013,9.57999992 6.39999999,9.57999992 L5.85599999,9.57999992 C5.82933319,9.57999992 5.80600009,9.58999982 5.78599999,9.60999992 C5.76599989,9.63000002 5.75599999,9.65333312 5.75599999,9.67999992 L5.75599999,10.8799999 C5.75599999,10.9080001 5.76566656,10.9316665 5.78499999,10.9509999 C5.80433342,10.9703334 5.82799985,10.9799999 5.85599999,10.9799999 L5.91599999,10.9799999 Z M6.56399999,10.6329999 C6.60000017,10.7390005 6.65599961,10.8233329 6.73199999,10.8859999 C6.80800037,10.9486669 6.90266609,10.9799999 7.01599999,10.9799999 C7.12933389,10.9799999 7.22433294,10.9486669 7.30099999,10.8859999 C7.37766704,10.8233329 7.43433314,10.7390005 7.47099999,10.6329999 C7.50766684,10.5269994 7.52599999,10.4093339 7.52599999,10.2799999 C7.52599999,10.1519993 7.50766684,10.0350005 7.47099999,9.92899992 C7.43433314,9.82299939 7.37766704,9.73833357 7.30099999,9.67499992 C7.22433294,9.61166627 7.12933389,9.57999992 7.01599999,9.57999992 C6.90266609,9.57999992 6.80800037,9.61166627 6.73199999,9.67499992 C6.65599961,9.73833357 6.60000017,9.82299939 6.56399999,9.92899992 C6.52799981,10.0350005 6.50999999,10.1519993 6.50999999,10.2799999 C6.50999999,10.4093339 6.52799981,10.5269994 6.56399999,10.6329999 L6.56399999,10.6329999 Z M7.20499999,10.6159999 C7.15766642,10.6973337 7.09466705,10.7379999 7.01599999,10.7379999 C6.93866627,10.7379999 6.87700022,10.6973337 6.83099999,10.6159999 C6.78499976,10.5346662 6.76199999,10.4226673 6.76199999,10.2799999 C6.76199999,10.1399992 6.78499976,10.0290003 6.83099999,9.94699992 C6.87700022,9.86499951 6.93866627,9.82399992 7.01599999,9.82399992 C7.09466705,9.82399992 7.15766642,9.86499951 7.20499999,9.94699992 C7.25233356,10.0290003 7.27599999,10.1399992 7.27599999,10.2799999 C7.27599999,10.4226673 7.25233356,10.5346662 7.20499999,10.6159999 L7.20499999,10.6159999 Z M8.50399999,10.8079999 C8.51200003,10.8226667 8.51599999,10.8373332 8.51599999,10.8519999 C8.51599999,10.8693333 8.51000005,10.8859998 8.49799999,10.9019999 L8.46799999,10.9379999 C8.43333315,10.9766668 8.39866683,10.9959999 8.36399999,10.9959999 C8.34399989,10.9959999 8.32600007,10.988 8.30999999,10.9719999 C8.24333299,10.9146663 8.19300016,10.8523336 8.15899999,10.7849999 C8.12499982,10.7176663 8.10066673,10.6553335 8.08599999,10.5979999 C8.08066663,10.5753331 8.07000007,10.5583333 8.05399999,10.5469999 C8.03799991,10.5356665 8.01866677,10.5299999 7.99599999,10.5299999 C7.92533297,10.5299999 7.88999999,10.5599996 7.88999999,10.6199999 L7.88999999,10.8979999 C7.88999999,10.922 7.88266673,10.9426665 7.86799999,10.9599999 C7.85333325,10.9773333 7.83066681,10.9859999 7.79999999,10.9859999 L7.73799999,10.9859999 C7.70599983,10.9859999 7.67966676,10.977 7.65899999,10.9589999 C7.63833322,10.9409998 7.62799999,10.9206667 7.62799999,10.8979999 L7.62799999,9.66599992 C7.62799999,9.64333314 7.63833322,9.62333334 7.65899999,9.60599992 C7.67966676,9.5886665 7.70599983,9.57999992 7.73799999,9.57999992 L8.03799999,9.57999992 C8.13400047,9.57999992 8.21466633,9.6019997 8.27999999,9.64599992 C8.34533365,9.69000014 8.3936665,9.74666624 8.42499999,9.81599992 C8.45633348,9.8853336 8.47199999,9.95799954 8.47199999,10.0339999 C8.47199999,10.1686673 8.42133383,10.2913327 8.31999999,10.4019999 C8.31199995,10.4113333 8.30666667,10.4199999 8.30399999,10.4279999 C8.30133331,10.436 8.29999999,10.4413332 8.29999999,10.4439999 C8.29866665,10.4573333 8.30399993,10.4836664 8.31599999,10.5229999 C8.32800005,10.5623335 8.34733319,10.6046664 8.37399999,10.6499999 C8.40066679,10.6953335 8.43333313,10.7346664 8.47199999,10.7679999 C8.48533339,10.78 8.49599995,10.7933332 8.50399999,10.8079999 L8.50399999,10.8079999 Z M8.15599999,10.1999999 C8.19200017,10.1519997 8.20999999,10.0966669 8.20999999,10.0339999 C8.20999999,9.97533296 8.19200017,9.9246668 8.15599999,9.88199992 C8.11999981,9.83933304 8.06666701,9.81799992 7.99599999,9.81799992 C7.96533317,9.81799992 7.94000009,9.8266665 7.91999999,9.84399992 C7.89999989,9.86133334 7.88999999,9.88133314 7.88999999,9.90399992 L7.88999999,10.1859999 C7.88999999,10.2166667 7.8989999,10.2386665 7.91699999,10.2519999 C7.93500008,10.2653333 7.96133315,10.2719999 7.99599999,10.2719999 C8.06666701,10.2719999 8.11999981,10.2480002 8.15599999,10.1999999 L8.15599999,10.1999999 Z M9.31599999,10.9619999 C9.33600009,10.974 9.35399991,10.9799999 9.36999999,10.9799999 L9.42799999,10.9799999 C9.45333345,10.9799999 9.47566656,10.9696667 9.49499999,10.9489999 C9.51433342,10.9283332 9.52399999,10.9040001 9.52399999,10.8759999 L9.52399999,9.68599992 C9.52399999,9.6553331 9.51433342,9.63000002 9.49499999,9.60999992 C9.47566656,9.58999982 9.45333345,9.57999992 9.42799999,9.57999992 L9.39599999,9.57999992 C9.36533317,9.57999992 9.34000009,9.58999982 9.31999999,9.60999992 C9.29999989,9.63000002 9.28999999,9.6553331 9.28999999,9.68599992 L9.28999999,10.3379999 C9.28999999,10.3700001 9.28666669,10.3859999 9.27999999,10.3859999 C9.27599997,10.3859999 9.26733339,10.3733334 9.25399999,10.3479999 L8.89999999,9.64799992 C8.89066661,9.62799982 8.87566676,9.61166665 8.85499999,9.59899992 C8.83433322,9.58633319 8.81066679,9.57999992 8.78399999,9.57999992 L8.72599999,9.57999992 C8.69533317,9.57999992 8.67000009,9.58999982 8.64999999,9.60999992 C8.62999989,9.63000002 8.61999999,9.6553331 8.61999999,9.68599992 L8.61999999,10.8759999 C8.61999999,10.9053334 8.63033322,10.9299998 8.65099999,10.9499999 C8.67166676,10.97 8.69666651,10.9799999 8.72599999,10.9799999 L8.74799999,10.9799999 C8.77600013,10.9799999 8.79999989,10.97 8.81999999,10.9499999 C8.84000009,10.9299998 8.84999999,10.9053334 8.84999999,10.8759999 L8.84999999,10.1959999 C8.84999999,10.1866665 8.85166664,10.1793333 8.85499999,10.1739999 C8.85833334,10.1686666 8.86199997,10.1659999 8.86599999,10.1659999 C8.87400003,10.1659999 8.88133329,10.1726665 8.88799999,10.1859999 L9.27599999,10.9219999 C9.28266669,10.9366667 9.29599989,10.9499999 9.31599999,10.9619999 L9.31599999,10.9619999 Z M9.83199999,10.9799999 C9.86000013,10.9799999 9.88399989,10.9703334 9.90399999,10.9509999 C9.92400009,10.9316665 9.93399999,10.9080001 9.93399999,10.8799999 L9.93399999,9.67799992 C9.93399999,9.65133312 9.92400009,9.62833335 9.90399999,9.60899992 C9.88399989,9.58966649 9.86000013,9.57999992 9.83199999,9.57999992 L9.77199999,9.57999992 C9.74533319,9.57999992 9.72200009,9.58966649 9.70199999,9.60899992 C9.68199989,9.62833335 9.67199999,9.65133312 9.67199999,9.67799992 L9.67199999,10.8799999 C9.67199999,10.9080001 9.68199989,10.9316665 9.70199999,10.9509999 C9.72200009,10.9703334 9.74533319,10.9799999 9.77199999,10.9799999 L9.83199999,10.9799999 Z M10.84,10.9799999 C10.9093337,10.9799999 10.944,10.9500002 10.944,10.8899999 C10.944,10.8753332 10.942,10.8593333 10.938,10.8419999 L10.66,9.67999992 C10.6533333,9.65333312 10.6386668,9.63000002 10.616,9.60999992 C10.5933332,9.58999982 10.5680001,9.57999992 10.54,9.57999992 L10.438,9.57999992 C10.4113332,9.57999992 10.3866668,9.58999982 10.364,9.60999992 C10.3413332,9.63000002 10.3266667,9.65333312 10.32,9.67999992 L10.044,10.8379999 C10.0386666,10.858 10.036,10.8766665 10.036,10.8939999 C10.036,10.9286668 10.0453332,10.9516665 10.064,10.9629999 C10.0826667,10.9743333 10.1066665,10.9799999 10.136,10.9799999 L10.178,10.9799999 C10.2086668,10.9799999 10.2333332,10.9733333 10.252,10.9599999 C10.2706667,10.9466665 10.2853333,10.9220001 10.296,10.8859999 L10.326,10.7759999 C10.3273333,10.7706666 10.3313333,10.7566667 10.338,10.7339999 C10.3446667,10.7113331 10.3549999,10.6943333 10.369,10.6829999 C10.3830001,10.6716665 10.4013332,10.6659999 10.424,10.6659999 L10.55,10.6659999 C10.5833335,10.6659999 10.6056666,10.6749998 10.617,10.6929999 C10.6283334,10.711 10.6379999,10.7386664 10.646,10.7759999 L10.676,10.8859999 C10.6866667,10.9220001 10.7013332,10.9466665 10.72,10.9599999 C10.7386667,10.9733333 10.7639998,10.9799999 10.796,10.9799999 L10.84,10.9799999 Z M10.56,10.3179999 C10.5653333,10.3446667 10.568,10.3646665 10.568,10.3779999 C10.568,10.4166668 10.5473335,10.4359999 10.506,10.4359999 L10.474,10.4359999 C10.4313331,10.4359999 10.41,10.4140001 10.41,10.3699999 C10.41,10.3513332 10.412,10.3333333 10.416,10.3159999 L10.442,10.1719999 L10.472,10.0239999 C10.4733333,10.0186666 10.4756666,10.0139999 10.479,10.0099999 C10.4823333,10.0059999 10.4853333,10.0039999 10.488,10.0039999 C10.4973334,10.0039999 10.5026666,10.0119998 10.504,10.0279999 L10.532,10.1719999 L10.56,10.3179999 Z M12.222,10.8079999 C12.23,10.8226667 12.234,10.8373332 12.234,10.8519999 C12.234,10.8693333 12.228,10.8859998 12.216,10.9019999 L12.186,10.9379999 C12.1513331,10.9766668 12.1166668,10.9959999 12.082,10.9959999 C12.0619999,10.9959999 12.0440001,10.988 12.028,10.9719999 C11.961333,10.9146663 11.9110002,10.8523336 11.877,10.7849999 C11.8429998,10.7176663 11.8186667,10.6553335 11.804,10.5979999 C11.7986666,10.5753331 11.7880001,10.5583333 11.772,10.5469999 C11.7559999,10.5356665 11.7366668,10.5299999 11.714,10.5299999 C11.643333,10.5299999 11.608,10.5599996 11.608,10.6199999 L11.608,10.8979999 C11.608,10.922 11.6006667,10.9426665 11.586,10.9599999 C11.5713332,10.9773333 11.5486668,10.9859999 11.518,10.9859999 L11.456,10.9859999 C11.4239998,10.9859999 11.3976668,10.977 11.377,10.9589999 C11.3563332,10.9409998 11.346,10.9206667 11.346,10.8979999 L11.346,9.66599992 C11.346,9.64333314 11.3563332,9.62333334 11.377,9.60599992 C11.3976668,9.5886665 11.4239998,9.57999992 11.456,9.57999992 L11.756,9.57999992 C11.8520005,9.57999992 11.9326663,9.6019997 11.998,9.64599992 C12.0633336,9.69000014 12.1116665,9.74666624 12.143,9.81599992 C12.1743335,9.8853336 12.19,9.95799954 12.19,10.0339999 C12.19,10.1686673 12.1393338,10.2913327 12.038,10.4019999 C12.0299999,10.4113333 12.0246667,10.4199999 12.022,10.4279999 C12.0193333,10.436 12.018,10.4413332 12.018,10.4439999 C12.0166666,10.4573333 12.0219999,10.4836664 12.034,10.5229999 C12.046,10.5623335 12.0653332,10.6046664 12.092,10.6499999 C12.1186668,10.6953335 12.1513331,10.7346664 12.19,10.7679999 C12.2033334,10.78 12.2139999,10.7933332 12.222,10.8079999 L12.222,10.8079999 Z M11.874,10.1999999 C11.9100002,10.1519997 11.928,10.0966669 11.928,10.0339999 C11.928,9.97533296 11.9100002,9.9246668 11.874,9.88199992 C11.8379998,9.83933304 11.784667,9.81799992 11.714,9.81799992 C11.6833332,9.81799992 11.6580001,9.8266665 11.638,9.84399992 C11.6179999,9.86133334 11.608,9.88133314 11.608,9.90399992 L11.608,10.1859999 C11.608,10.2166667 11.6169999,10.2386665 11.635,10.2519999 C11.6530001,10.2653333 11.6793331,10.2719999 11.714,10.2719999 C11.784667,10.2719999 11.8379998,10.2480002 11.874,10.1999999 L11.874,10.1999999 Z M12.982,10.9799999 C13.0100001,10.9799999 13.0336666,10.9703334 13.053,10.9509999 C13.0723334,10.9316665 13.082,10.9073334 13.082,10.8779999 L13.082,10.8299999 C13.082,10.8033331 13.0723334,10.78 13.053,10.7599999 C13.0336666,10.7399998 13.0100001,10.7299999 12.982,10.7299999 L12.696,10.7299999 C12.6706665,10.7299999 12.6480001,10.72 12.628,10.6999999 C12.6079999,10.6799998 12.598,10.6573334 12.598,10.6319999 L12.598,10.4759999 C12.598,10.4479998 12.6076666,10.4243334 12.627,10.4049999 C12.6463334,10.3856665 12.6693332,10.3759999 12.696,10.3759999 L12.868,10.3759999 C12.8960001,10.3759999 12.9196666,10.3663334 12.939,10.3469999 C12.9583334,10.3276665 12.968,10.3046667 12.968,10.2779999 L12.968,10.2239999 C12.968,10.1973331 12.9583334,10.174 12.939,10.1539999 C12.9196666,10.1339998 12.8960001,10.1239999 12.868,10.1239999 L12.696,10.1239999 C12.6706665,10.1239999 12.6480001,10.114 12.628,10.0939999 C12.6079999,10.0739998 12.598,10.0513334 12.598,10.0259999 L12.598,9.92999992 C12.598,9.90333312 12.6079999,9.87966669 12.628,9.85899992 C12.6480001,9.83833315 12.6706665,9.82799992 12.696,9.82799992 L12.982,9.82799992 C13.0100001,9.82799992 13.0336666,9.81866668 13.053,9.79999992 C13.0723334,9.78133316 13.082,9.75866672 13.082,9.73199992 L13.082,9.67799992 C13.082,9.65133312 13.0723334,9.62833335 13.053,9.60899992 C13.0336666,9.58966649 13.0100001,9.57999992 12.982,9.57999992 L12.44,9.57999992 C12.4106665,9.57999992 12.3863334,9.58933316 12.367,9.60799992 C12.3476666,9.62666668 12.338,9.64999978 12.338,9.67799992 L12.338,10.8779999 C12.338,10.9073334 12.3476666,10.9316665 12.367,10.9509999 C12.3863334,10.9703334 12.4106665,10.9799999 12.44,10.9799999 L12.982,10.9799999 Z M13.296,10.9539999 C13.3133334,10.9713333 13.3339999,10.9799999 13.358,10.9799999 L13.44,10.9799999 C13.4653334,10.9799999 13.4866666,10.9713333 13.504,10.9539999 C13.5213334,10.9366665 13.53,10.9153334 13.53,10.8899999 L13.53,10.6219999 C13.53,10.5966665 13.5386666,10.575 13.556,10.5569999 C13.5733334,10.5389998 13.5939999,10.5299999 13.618,10.5299999 C13.7273339,10.5299999 13.8223329,10.5066668 13.903,10.4599999 C13.9836671,10.413333 14.0449998,10.352667 14.087,10.2779999 C14.1290002,10.2033329 14.15,10.1240003 14.15,10.0399999 C14.15,9.95066614 14.1310002,9.8713336 14.093,9.80199992 C14.0549998,9.73266624 13.9993337,9.67833345 13.926,9.63899992 C13.8526663,9.59966639 13.7640005,9.57999992 13.66,9.57999992 L13.358,9.57999992 C13.3339999,9.57999992 13.3133334,9.5886665 13.296,9.60599992 C13.2786666,9.62333334 13.27,9.64466646 13.27,9.66999992 L13.27,10.8899999 C13.27,10.9153334 13.2786666,10.9366665 13.296,10.9539999 L13.296,10.9539999 Z M13.618,10.2799999 C13.5939999,10.2799999 13.5733334,10.2713333 13.556,10.2539999 C13.5386666,10.2366665 13.53,10.2153334 13.53,10.1899999 L13.53,9.91399992 C13.53,9.88866646 13.5386666,9.86700001 13.556,9.84899992 C13.5733334,9.83099983 13.5939999,9.82199992 13.618,9.82199992 L13.63,9.82199992 C13.708667,9.82199992 13.7716664,9.83966641 13.819,9.87499992 C13.8663336,9.91033343 13.89,9.96599954 13.89,10.0419999 C13.89,10.1113336 13.8653336,10.168333 13.816,10.2129999 C13.7666664,10.2576668 13.704667,10.2799999 13.63,10.2799999 L13.618,10.2799999 Z M14.85,9.60499992 C14.8326666,9.62166667 14.824,9.64266646 14.824,9.66799992 L14.824,10.5059999 C14.824,10.5793336 14.8096668,10.6349997 14.781,10.6729999 C14.7523332,10.7110001 14.7040003,10.7299999 14.636,10.7299999 C14.569333,10.7299999 14.5213335,10.7113334 14.492,10.6739999 C14.4626665,10.6366664 14.448,10.5826669 14.448,10.5119999 L14.448,9.66799992 C14.448,9.6439998 14.4386667,9.62333334 14.42,9.60599992 C14.4013332,9.5886665 14.3793334,9.57999992 14.354,9.57999992 L14.286,9.57999992 C14.2579998,9.57999992 14.2356667,9.58833317 14.219,9.60499992 C14.2023332,9.62166667 14.194,9.64266646 14.194,9.66799992 L14.194,10.4959999 C14.194,10.6573341 14.2343329,10.7783329 14.315,10.8589999 C14.395667,10.939667 14.5039993,10.9799999 14.64,10.9799999 C14.7746673,10.9799999 14.8816662,10.939667 14.961,10.8589999 C15.0403337,10.7783329 15.08,10.6573341 15.08,10.4959999 L15.08,9.66799992 C15.08,9.6439998 15.0703334,9.62333334 15.051,9.60599992 C15.0316665,9.5886665 15.0093334,9.57999992 14.984,9.57999992 L14.916,9.57999992 C14.8893332,9.57999992 14.8673334,9.58833317 14.85,9.60499992 L14.85,9.60499992 Z M15.174,10.9569999 C15.1900001,10.9723333 15.2093332,10.9799999 15.232,10.9799999 L15.552,10.9799999 C15.7160008,10.9799999 15.8379996,10.9403337 15.918,10.8609999 C15.9980004,10.7816662 16.038,10.6780006 16.038,10.5499999 L16.038,10.4819999 C16.0366666,10.4219996 16.0196668,10.3696668 15.987,10.3249999 C15.9543331,10.280333 15.9100003,10.2446667 15.854,10.2179999 C15.8513333,10.2179999 15.85,10.2159999 15.85,10.2119999 L15.852,10.2099999 C15.8986669,10.1819998 15.9336665,10.1406669 15.957,10.0859999 C15.9803334,10.031333 15.992,9.97133358 15.992,9.90599992 C15.992,9.80999944 15.9530004,9.73166689 15.875,9.67099992 C15.7969996,9.61033295 15.6866674,9.57999992 15.544,9.57999992 L15.232,9.57999992 C15.2093332,9.57999992 15.1900001,9.58766651 15.174,9.60299992 C15.1579999,9.61833333 15.15,9.63733314 15.15,9.65999992 L15.15,10.8999999 C15.15,10.9226667 15.1579999,10.9416665 15.174,10.9569999 L15.174,10.9569999 Z M15.496,10.1139999 C15.4613331,10.1139999 15.4386667,10.1086666 15.428,10.0979999 C15.4173333,10.0873332 15.412,10.0653334 15.412,10.0319999 L15.412,9.90999992 C15.412,9.87799976 15.4169999,9.85633331 15.427,9.84499992 C15.437,9.83366653 15.4599998,9.82799992 15.496,9.82799992 L15.512,9.82799992 C15.5893337,9.82799992 15.6449998,9.83966647 15.679,9.86299992 C15.7130001,9.88633337 15.73,9.9166664 15.73,9.95399992 C15.73,9.99800014 15.7133335,10.0356664 15.68,10.0669999 C15.6466665,10.0983334 15.5913337,10.1139999 15.514,10.1139999 L15.496,10.1139999 Z M15.496,10.7319999 C15.4639998,10.7319999 15.442,10.7263333 15.43,10.7149999 C15.4179999,10.7036665 15.412,10.6820001 15.412,10.6499999 L15.412,10.4259999 C15.412,10.3913331 15.4179999,10.369 15.43,10.3589999 C15.442,10.3489999 15.4639998,10.3439999 15.496,10.3439999 L15.57,10.3439999 C15.6340003,10.3439999 15.6863331,10.3606664 15.727,10.3939999 C15.7676668,10.4273334 15.788,10.471333 15.788,10.5259999 L15.788,10.5499999 C15.788,10.6713339 15.7160007,10.7319999 15.572,10.7319999 L15.496,10.7319999 Z M16.83,10.9799999 C16.8593335,10.9799999 16.8836665,10.9703334 16.903,10.9509999 C16.9223334,10.9316665 16.932,10.9080001 16.932,10.8799999 L16.932,10.8319999 C16.932,10.8026664 16.9223334,10.7786667 16.903,10.7599999 C16.8836665,10.7413332 16.8593335,10.7319999 16.83,10.7319999 L16.546,10.7319999 C16.5166665,10.7319999 16.4923334,10.722 16.473,10.7019999 C16.4536665,10.6819998 16.444,10.6580001 16.444,10.6299999 L16.444,9.67999992 C16.444,9.65199978 16.4343334,9.62833335 16.415,9.60899992 C16.3956665,9.58966649 16.3720001,9.57999992 16.344,9.57999992 L16.282,9.57999992 C16.2553332,9.57999992 16.2320001,9.58966649 16.212,9.60899992 C16.1919999,9.62833335 16.182,9.65199978 16.182,9.67999992 L16.182,10.8799999 C16.182,10.9080001 16.1919999,10.9316665 16.212,10.9509999 C16.2320001,10.9703334 16.2553332,10.9799999 16.282,10.9799999 L16.83,10.9799999 Z M17.2,10.9799999 C17.2280001,10.9799999 17.2519999,10.9703334 17.272,10.9509999 C17.2920001,10.9316665 17.302,10.9080001 17.302,10.8799999 L17.302,9.67799992 C17.302,9.65133312 17.2920001,9.62833335 17.272,9.60899992 C17.2519999,9.58966649 17.2280001,9.57999992 17.2,9.57999992 L17.14,9.57999992 C17.1133332,9.57999992 17.0900001,9.58966649 17.07,9.60899992 C17.0499999,9.62833335 17.04,9.65133312 17.04,9.67799992 L17.04,10.8799999 C17.04,10.9080001 17.0499999,10.9316665 17.07,10.9509999 C17.0900001,10.9703334 17.1133332,10.9799999 17.14,10.9799999 L17.2,10.9799999 Z M18.291,10.6039999 L18.292,10.6039999 C18.3146668,10.6146666 18.3323332,10.6299998 18.345,10.6499999 C18.3576667,10.67 18.364,10.6919998 18.364,10.7159999 C18.364,10.74 18.3566667,10.7633331 18.342,10.7859999 C18.2513329,10.9153339 18.1253341,10.9799999 17.964,10.9799999 C17.8506661,10.9799999 17.7560004,10.9486669 17.68,10.8859999 C17.6039996,10.8233329 17.5480002,10.7390005 17.512,10.6329999 C17.4759998,10.5269994 17.458,10.4093339 17.458,10.2799999 C17.458,10.1519993 17.4759998,10.0350005 17.512,9.92899992 C17.5480002,9.82299939 17.6039996,9.73833357 17.68,9.67499992 C17.7560004,9.61166627 17.8506661,9.57999992 17.964,9.57999992 C18.1160007,9.57999992 18.2366662,9.638666 18.326,9.75599992 C18.3433334,9.77733336 18.352,9.80199978 18.352,9.82999992 C18.352,9.8526667 18.3466667,9.87333316 18.336,9.89199992 C18.3253333,9.91066668 18.3100001,9.92599986 18.29,9.93799992 L18.286,9.93999992 C18.2686666,9.95066664 18.2480001,9.95599992 18.224,9.95599992 C18.1839998,9.95599992 18.1520001,9.94066674 18.128,9.90999992 C18.0826664,9.8526663 18.0280003,9.82399992 17.964,9.82399992 C17.8866663,9.82399992 17.8250002,9.86499951 17.779,9.94699992 C17.7329997,10.0290003 17.71,10.1399992 17.71,10.2799999 C17.71,10.4226673 17.7329997,10.5346662 17.779,10.6159999 C17.8250002,10.6973337 17.8866663,10.7379999 17.964,10.7379999 C18.0333337,10.7379999 18.0906664,10.7066669 18.136,10.6439999 C18.148,10.6266665 18.1629999,10.6133333 18.181,10.6039999 C18.1990001,10.5946665 18.2179999,10.5899999 18.238,10.5899999 C18.2566667,10.5899999 18.2739999,10.5939999 18.29,10.6019999 C18.29,10.6033333 18.2903333,10.6039999 18.291,10.6039999 L18.291,10.6039999 Z"
            id="USCA_svg_CALIFORNIA-REPUBLIC"
            fill="#414B52"
          />
          <path
            d="M6.27335583,8.63566255 C5.45812024,8.61460483 5.44091424,8.4802047 6.24744429,8.3415617 C6.24744429,8.3415617 8.97064209,7.80236816 10.9328003,7.80236816 C12.9706421,7.80236816 15.5603397,8.33496335 15.5603397,8.33496335 C16.3611726,8.47997721 16.3470713,8.61536681 15.5310768,8.63730442 L11.0259398,8.75842285 L6.27335583,8.63566255 Z"
            id="USCA_svg_Rectangle-1518"
            fill="#319400"
          />
          <g id="USCA_svg_Rectangle-1517">
            <use fill="#944200" fillRule="evenodd" xlinkHref="#path-3" />
            <path
              stroke="#391800"
              strokeWidth={0.5}
              d="M6.91128698,6.43640803 C6.89837199,6.43658191 6.8830304,6.43537298 6.86377441,6.43280195 C6.8923056,6.43661138 6.91229342,6.44511531 6.9266267,6.45463759 C6.92726025,6.45505848 6.92072555,6.44809837 6.91128698,6.43640803 Z M7.23568097,4.72969533 C7.22996186,4.70962938 7.22257921,4.68459893 7.21327685,4.65275624 C7.20737772,4.63256306 7.20483461,4.62127504 7.20438314,4.61618174 C7.20721235,4.64809943 7.17503219,4.70350679 7.14812388,4.71261963 C7.16798347,4.70589393 7.19851014,4.71099741 7.23568097,4.72969533 Z M7.71207099,4.55693219 C7.71372113,4.54785687 7.71609832,4.53782936 7.71926397,4.52914589 C7.71838663,4.53155247 7.70125684,4.54990134 7.66741926,4.55577045 C7.68233748,4.55318289 7.69715031,4.55358604 7.71207099,4.55693219 Z M14.6276763,7.93661019 C14.4308531,8.00531926 14.198699,8.04965443 14.1940658,8.04158088 C14.2506507,8.14018208 14.2552541,8.13561899 14.3325529,8.09636713 C14.35633,8.08429329 14.5056578,8.01318626 14.5417606,7.99342376 C14.5763156,7.9745085 14.6035694,7.95753269 14.6276763,7.93661019 Z M12.2225139,7.91628685 C12.1391207,7.91686002 12.0555406,7.91835587 11.9455324,7.92090533 C11.5702126,7.92960345 11.5075538,7.91976109 11.5178764,7.97565457 C11.5191507,7.98255491 11.4982448,8.02567591 11.474057,8.03768177 C11.4910581,8.02924309 11.5459803,8.02278015 11.6239796,8.02628585 C11.6728427,8.02848201 11.7254842,8.03390715 11.7915685,8.04286009 C11.8811175,8.0558965 11.9290613,8.06251357 11.9638731,8.06435569 C12.0068195,8.08696003 12.0075531,8.08734615 12.2225139,7.91628685 Z M10.561924,7.74957106 C10.5260968,7.75421191 10.5079953,7.75560716 10.4948582,7.75537698 C10.4790269,7.75509961 10.2518323,7.71365737 10.0887759,7.69047684 C10.166065,7.70146447 10.2736707,7.83414971 10.203433,7.97169669 C10.1977784,7.98276999 10.2262419,7.95654693 10.2706031,7.92501748 C10.2987857,7.90498685 10.3316213,7.8834044 10.3680755,7.860831 C10.4366414,7.81837324 10.5061311,7.77928618 10.561924,7.74957106 Z M8.21488398,8.09148677 C8.07778401,8.08998667 8.01742191,8.08284243 7.9405417,8.06584842 C7.9170791,8.06060664 7.9170791,8.06060664 7.88856177,8.05446534 C7.81578226,8.03920646 7.74440643,8.02903082 7.6438488,8.02130381 C7.55121631,8.01418578 7.62342728,8.16192856 7.58001594,8.19639514 C7.66028622,8.13266428 7.81310401,8.10895601 7.89301882,8.15481851 L8.08630326,8.26574296 L8.21488398,8.09148677 Z M11.4188829,7.53722162 C11.4879612,7.52563833 11.5633637,7.52305669 11.6464295,7.5267901 C11.6501015,7.52695514 11.6537727,7.52713189 11.6574455,7.52732038 C11.6474453,7.4231067 11.640116,7.29648306 11.6325987,7.14123546 C11.6254259,6.99310368 11.6210474,6.84542556 11.6186426,6.71435541 L11.4008462,6.71435541 C11.413012,6.87966671 11.4210226,7.04376667 11.4229866,7.19834964 C11.4245817,7.32388785 11.4237736,7.43669004 11.4188829,7.53722162 Z M11.0549043,8.18467268 C11.0523504,8.18505268 11.0497795,8.18541644 11.0471917,8.18576398 C11.05022,8.18535728 11.0527911,8.18501561 11.0549247,8.18473594 C11.0662011,8.18325788 11.0652594,8.18351156 11.055028,8.18504992 C11.0549937,8.18494529 11.0549593,8.18484062 11.054925,8.1847359 C11.0549181,8.18471483 11.0549112,8.18469375 11.0549043,8.18467268 Z"
            />
          </g>
          <path
            d="M8.98522949,6.20428467 C8.98522949,6.20428467 9.28847607,5.37699937 9.27520752,5.0635376 C9.26263786,4.76658677 9.09169879,4.03374378 8.98602295,4.44946289 C8.88034711,4.865182 8.42102051,4.57727051 8.42102051,4.57727051"
            id="USCA_svg_Line"
            stroke="#391800"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <path
            d="M12.0463257,6.31018066 C12.0463257,6.31018066 13.0286865,5.55725098 13.0286865,4.9888916"
            id="USCA_svg_Line-Copy"
            stroke="#391800"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
          <polygon
            id="USCA_svg_Star-53"
            fill="url(#USCA_svg_linearGradient-2)"
            points="3.5 4.26701627 2.3244295 5.11803399 2.77052418 3.73702106 1.59788697 2.88196601 3.04915915 2.8794708 3.5 1.5 3.95084085 2.8794708 5.40211303 2.88196601 4.22947582 3.73702106 4.6755705 5.11803399"
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
