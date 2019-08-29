import React from 'react'
import PropTypes from 'prop-types'

const SS = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#E22A32" offset="0%"/><stop stop-color="#D61C24" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#2CA244" offset="0%"/><stop stop-color="#218736" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#185AC6" offset="0%"/><stop stop-color="#104CAD" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#FDE14A" offset="0%"/><stop stop-color="#FCDC34" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v4H0z"/><path fill="url(#c)" d="M0 5h21v5H0z"/><path fill="url(#a)" d="M0 4h21v1H0z"/><path fill="url(#d)" d="M0 11h21v4H0z"/><path fill="url(#a)" d="M0 10h21v1H0z"/><path fill="url(#e)" d="M0 0l10 7.5L0 15z"/><path fill="url(#f)" d="M3.836 7.987l-.683 1.28-.205-1.437-1.429-.254 1.304-.639-.2-1.437 1.01 1.042 1.306-.634-.68 1.283 1.007 1.046z"/></g></svg>
  )
}

SS.propTypes = {
  width: '21',
  height: '15',
}

export default SS