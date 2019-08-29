import React from 'react'
import PropTypes from 'prop-types'

const GL = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#E82245" offset="0%"/><stop stop-color="#CC1838" offset="100%"/></linearGradient><filter x="-3.6%" y="-9.4%" width="107.1%" height="118.8%" filterUnits="objectBoundingBox" id="b"><feMorphology radius=".25" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/><feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1"/></filter><path id="c" d="M0 0h21v8H0z"/></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><use fill="#000" filter="url(#b)" xlink:href="#c"/><use fill="url(#a)" xlink:href="#c"/><path d="M3 8H0v7h21V8H11a4 4 0 10-8 0z" fill="url(#d)"/><path d="M3 8a4 4 0 108 0H3z" fill="url(#a)"/></g></svg>
  )
}

GL.propTypes = {
  width: '21',
  height: '15',
}

export default GL