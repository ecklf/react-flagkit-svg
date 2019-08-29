import React from 'react'
import PropTypes from 'prop-types'

const MM = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F13D4F" offset="0%"/><stop stop-color="#E92C3F" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#4AC94B" offset="0%"/><stop stop-color="#3BB13C" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FFD043" offset="0%"/><stop stop-color="#FECA2F" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 10h21v5H0z"/><path fill="url(#c)" d="M0 5h21v5H0z"/><path fill="url(#d)" d="M0 0h21v5H0z"/><path fill="url(#a)" d="M10.5 9.255l-2.645 1.886.976-3.099L6.22 6.11l3.247-.029L10.5 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099z"/></g></svg>
  )
}

MM.propTypes = {
  width: '21',
  height: '15',
}

export default MM