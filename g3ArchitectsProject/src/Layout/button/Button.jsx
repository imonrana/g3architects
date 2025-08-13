import React from 'react'

const Button = ({children, className}) => {
  return (
    <a href='#' className={`${className} py-5 px-6 bg bg-[#FF900E] text-white rounded-lg inline-block font-semibold text-xl hover:bg-amber-700 duration-300 transition-all `}>{children}</a>
  )
}

export default Button