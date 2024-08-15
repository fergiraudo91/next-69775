import Image from 'next/image'
import React from 'react'


const ComponenteSVG = ({src, alt, ...props}) => {
    
  return (
    <Image src={src} alt={alt} {...props} />
  )
}

export default ComponenteSVG