import React from 'react'

const Info = ({children, className}) => {
  return (
    <div className={`${className || ""}  font-normal text-base leading-6 text-secondary`}>{children}</div>
  )
}

export default Info