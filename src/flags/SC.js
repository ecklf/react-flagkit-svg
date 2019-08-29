import React from 'react'
import PropTypes from 'prop-types'

const SC = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#1DBE4F" offset="0%"/><stop stop-color="#159B3F" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#0858B4" offset="0%"/><stop stop-color="#013F87" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#ED3535" offset="0%"/><stop stop-color="#D62828" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#08964F" offset="0%"/><stop stop-color="#017B3E" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#FFDD67" offset="0%"/><stop stop-color="#FDD856" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path fill="url(#c)" d="M0 0h7L0 15z"/><path fill="url(#d)" d="M14 0h7v5L0 15z"/><path fill="url(#e)" d="M21 15v-5L0 15z"/><path fill="url(#f)" d="M7 0h7L0 15z"/><path fill="url(#a)" d="M21 10V5L0 15z"/></g></svg>
  )
}

SC.propTypes = {
  width: '21',
  height: '15',
}

export default SC