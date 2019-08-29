import React from 'react'
import PropTypes from 'prop-types'

const GY = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#08C55F" offset="0%"/><stop stop-color="#009F49" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FFD831" offset="0%"/><stop stop-color="#FDD117" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#E92034" offset="0%"/><stop stop-color="#CE1225" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#c)" fill-rule="nonzero" d="M-1 15V0h1l21 7v1L0 15z"/><path fill="url(#d)" fill-rule="nonzero" d="M0 1.054v12.892L19.338 7.5z"/><path fill="url(#e)" fill-rule="nonzero" d="M-1 15V0h1l11.5 7.5L0 15z"/><path fill="url(#f)" fill-rule="nonzero" d="M0 13.806L9.67 7.5 0 1.194z"/></g></svg>
  )
}

GY.propTypes = {
  width: '21',
  height: '15',
}

export default GY