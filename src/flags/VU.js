import React from 'react'
import PropTypes from 'prop-types'

const VU = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#27AB53" offset="0%"/><stop stop-color="#219447" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#EC2547" offset="0%"/><stop stop-color="#CE1A39" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#262626" offset="0%"/><stop stop-color="#0D0D0D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="e"><stop stop-color="#FFD449" offset="0%"/><stop stop-color="#FDCD34" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M.2 9h21v6H.2z"/><path fill="url(#c)" d="M.2 0h21v6H.2z"/><path d="M8.2 6h13v3h-13l-8 6V0l8 6z" fill="url(#d)"/><path d="M6.867 7.5L-.6 1.9l-.4-.3.6-.8.4.3L7.867 7H21.2v1H7.7l.3-.1-8 6-.4.3-.6-.8.4-.3 7.467-5.6z" fill="url(#e)" fill-rule="nonzero"/><path d="M2.7 9a1.5 1.5 0 111.5-1.5c0 .727-.813 2.363-1.5 2.5-.096.02.101-1 0-1zm0-.75c.276.25.5-.474.5-.75a.5.5 0 00-1 0c0 .276.224 1 .5.75z" fill="url(#e)"/></g></svg>
  )
}

VU.propTypes = {
  width: '21',
  height: '15',
}

export default VU