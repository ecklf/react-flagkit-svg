import React from 'react'
import PropTypes from 'prop-types'

const LC = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#86D7FF" offset="0%"/><stop stop-color="#6BCDFE" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FFDA57" offset="0%"/><stop stop-color="#FCD036" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#a)" d="M10.5 2L15 13H6z"/><path fill="url(#c)" d="M10.5 4l3.5 9H7z"/><path fill="url(#d)" d="M10.5 7l4.5 6H6z"/></g></svg>
  )
}

LC.propTypes = {
  width: '21',
  height: '15',
}

export default LC