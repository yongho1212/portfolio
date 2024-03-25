import React from 'react'

interface ImageProps{
    src: string;
    alt: string;
    width?: string;
    height?: string;
}

const Image = ({src, alt, width, height}:ImageProps) => {
  return (
    <img 
        src={src}
        alt={alt}
        style={{
        width: width ? width : '100%', 
        height: height ? height : 'auto', 
        borderRadius:'15px'}}
    />
  )
}

export default Image

