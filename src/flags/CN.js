import React from 'react'
import PropTypes from 'prop-types'

const CN = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#F1361D" offset="0%"/><stop stop-color="#DF2910" offset="100%"/></linearGradient><linearGradient x1="37.059%" y1="1.704%" x2="62.941%" y2="98.296%" id="c"><stop stop-color="#FFDC42" offset="0%"/><stop stop-color="#FDD217" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#FFDC42" offset="0%"/><stop stop-color="#FDD217" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><path d="M10.13 4.483l-.63.383.017-.737-.383-.629.737.017.629-.383-.017.737.383.629-.737-.017zM8.28 2.449l-.726-.123.497-.545.123-.727.545.497.727.123-.497.545-.123.727-.545-.497zm.366 6.53l-.615.404-.01-.737-.404-.615.737-.01.615-.404.01.737.404.615-.737.01zm1.267-1.987l-.732.082.327-.66-.082-.733.66.327.733-.082-.327.66.082.733-.66-.327z" fill="url(#c)"/><path fill="url(#d)" d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z"/></g></svg>
  )
}

CN.propTypes = {
  width: '21',
  height: '15',
}

export default CN