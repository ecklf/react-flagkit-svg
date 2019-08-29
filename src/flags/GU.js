import React from 'react'
import PropTypes from 'prop-types'

const GU = props => {
  const { width, height, ...otherProps}
  return (
    <svg width={width} height={height} {...otherProps} xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#F0F0F0" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b"><stop stop-color="#DE3149" offset="0%"/><stop stop-color="#C2273D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#053B94" offset="0%"/><stop stop-color="#002E7A" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d"><stop stop-color="#DE3149" offset="0%"/><stop stop-color="#C2273D" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f"><stop stop-color="#81C1F3" offset="0%"/><stop stop-color="#6AB1E9" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="h"><stop stop-color="#27A07E" offset="0%"/><stop stop-color="#1F9171" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="i"><stop stop-color="#1E8CE8" offset="0%"/><stop stop-color="#107FDC" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="j"><stop stop-color="#FFF048" offset="0%"/><stop stop-color="#FFEF36" offset="100%"/></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="k"><stop stop-color="#8F5715" offset="0%"/><stop stop-color="#7A480D" offset="100%"/></linearGradient><path d="M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4z" id="e"/></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M0 0h21v15H0z"/><path fill="url(#b)" d="M0 0h21v15H0z"/><rect fill="url(#c)" x="1" y="1" width="19" height="13" rx=".75"/><path d="M10.5 12s3-2.015 3-4.5-3-4.5-3-4.5-3 2.015-3 4.5 3 4.5 3 4.5z" fill="url(#d)"/><g transform="translate(8 3)"><mask id="g" fill="#fff"><use xlink:href="#e"/></mask><use fill="url(#a)" xlink:href="#e"/><path fill="url(#f)" mask="url(#g)" d="M0 0h5v5H0z"/><path fill="url(#h)" mask="url(#g)" d="M2.5 4.1l-.882.614.311-1.029-.856-.649 1.074-.021L2.5 2l.353 1.015 1.074.021-.856.65.31 1.028z"/><path fill="url(#i)" mask="url(#g)" d="M0 5h5v4H0z"/><path d="M0 6s1.59 1.5 2 1.5c.488 0 .496-.723 1-1 .794-.436 2-.5 2-.5v3H0V6z" fill="url(#j)" mask="url(#g)"/></g><path d="M10.251 6.475a14.974 14.974 0 00-.067 1.084c-.01.467.01.812.079 1.02.087.261.284.506.557.742.208.18.415.316.557.397a.25.25 0 00.246-.436 3.148 3.148 0 01-.477-.34c-.21-.182-.356-.363-.409-.521-.044-.134-.063-.442-.053-.85a13.917 13.917 0 01.065-1.046.25.25 0 10-.498-.05z" fill="url(#k)" fill-rule="nonzero"/><path fill="#FFF" d="M9 7.5L10 9H9z"/></g></svg>
  )
}

GU.propTypes = {
  width: '21',
  height: '15',
}

export default GU