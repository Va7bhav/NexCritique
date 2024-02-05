/* eslint-disable no-unused-vars */
import React from 'react'

const What = () => {
  const randFunc = (e) => {
    console.log(e.target.id);
  }
  const variants = {'red': {'XL': {slug: 'wear-the-code'}}};
  
  console.log(variants);
  console.log(variants['red']['XL'])

  // 'wear-the-code'
  return (
    <>
      
    </>
  )
}

export default What