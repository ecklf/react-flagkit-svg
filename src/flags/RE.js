import React from 'react'
import PropTypes from 'prop-types'

const RE = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F44653" offset="0%"/><stop stop-color="#EE2A39" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#1035BB" offset="0%"/><stop stop-color="#042396" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M10 0h11v15H10z"/><path fill="url(#c)" d="M0 0h7v15H0z"/><path fill="url(#a)" d="M7 0h7v15H7z"/></g></svg>
  )
}

RE.propTypes = {
  width: '21',
  height: '15',
}

export default RE