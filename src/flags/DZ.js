import React from 'react'
import PropTypes from 'prop-types'

const DZ = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#048345" offset="0%"/><stop stop-color="#04753E" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E81B42" offset="0%"/><stop stop-color="#D20F34" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h11v15H0z"/><path fill="url(#a)" d="M11 0h10v15H11z"/><path fill="url(#c)" d="M13 8.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L13 5.5l.458 1.369 1.444.013-1.16.859.434 1.377z"/><path d="M13.26 4.214A4.204 4.204 0 0010.313 3C7.931 3 6 5.015 6 7.5S7.931 12 10.313 12c1.14 0 2.176-.461 2.947-1.214a4.112 4.112 0 01-1.77.396c-2.166 0-3.922-1.649-3.922-3.682s1.756-3.682 3.921-3.682c.638 0 1.24.143 1.771.396z" fill="url(#c)"/></g></svg>
  )
}

DZ.propTypes = {
  width: '21',
  height: '15',
}

export default DZ