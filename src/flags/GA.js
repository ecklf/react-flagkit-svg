import React from 'react'
import PropTypes from 'prop-types'

const GA = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#09B470" offset="0%"/><stop stop-color="#019F60" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#508CDE" offset="0%"/><stop stop-color="#3A75C5" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FFD935" offset="0%"/><stop stop-color="#FDD216" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v5H0z"/><path fill="url(#c)" d="M0 10h21v5H0z"/><path fill="url(#d)" d="M0 5h21v5H0z"/></g></svg>
  )
}

GA.propTypes = {
  width: '21',
  height: '15',
}

export default GA