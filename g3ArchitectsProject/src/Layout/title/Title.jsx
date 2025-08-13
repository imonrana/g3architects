import React from 'react'

const Title = ({children, className}) => {
  return (
    <div className={`${className} font-bold text-[45px] w-[468px] text-primary`}>{children}</div>
  )
}

export default Title