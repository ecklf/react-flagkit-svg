import React from 'react'
import PropTypes from 'prop-types'

const MN = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#146BBC" offset="0%"/><stop stop-color="#0B5396" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E43642" offset="0%"/><stop stop-color="#C32A34" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#F8D246" offset="0%"/><stop stop-color="#F9CE2F" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M7 0h7v15H7z"/><path fill="url(#c)" d="M0 0h7v15H0zM14 0h7v15h-7z"/><path d="M4 9h1v3H4V9zM2 9h1v3H2V9zm1 2h1l-.5 1-.5-1zm0-2h1l-.5 1L3 9zm0-1l.5-.5.5.5H3zm.5 1a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1z" fill="url(#d)"/></g></svg>
  )
}

MN.propTypes = {
  width: '21',
  height: '15',
}

export default MN