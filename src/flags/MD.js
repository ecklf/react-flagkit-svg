import React from 'react'
import PropTypes from 'prop-types'

const MD = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#EB1C43" offset="0%"/><stop stop-color="#CA1134" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#115BCB" offset="0%"/><stop stop-color="#094AAC" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#FFD953" offset="0%"/><stop stop-color="#FFD130" offset="100%"/></linearGradient><filter x="-10.7%" y="-5%" width="121.4%" height="110%" filterUnits="objectBoundingBox" id="d"><feMorphology radius=".25" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/><feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1"/></filter><path id="e" d="M7 0h7v15H7z"/></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M10 0h11v15H10z"/><path fill="url(#c)" d="M0 0h7v15H0z"/><use fill="#000" filter="url(#d)" xlink:href="#e"/><use fill="url(#f)" xlink:href="#e"/><path d="M9 6h1l.5-1.5L11 6h1v3l-1.5 1L9 9V6zm1 1v1.5h1V7h-1z" fill="#AF7F59"/></g></svg>
  )
}

MD.propTypes = {
  width: '21',
  height: '15',
}

export default MD