import React from "react"
import { Link } from "gatsby"

const Index = ({
  link,
  target,
  text,
  onClick,
  className,
  icon,
  type,
  disabled,
}) => {
  return (
    <>
      <Link to={link} target={target}>
        <button
          className={`flex items-center justify-center py-2 xsm:py-4 px-4 xsm:px-6 rounded-[56px] text-base font-semibold text-white hover:bg-purple_300 ${className} ${
            disabled && "opacity-[0.3]"
          }`}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {icon && <span>{icon}</span>}
          {text}
        </button>
      </Link>
    </>
  )
}

export default Index
