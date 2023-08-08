import React from "react"

const TotalCard = props => {
  const { heading, subheading, className, text } = props

  return (
    <div className="max-w-[1084px] mx-auto flex items-center gap-5 justify-center py-[50px] md:py-[clamp(20px,12vw,122px)] lg:py-[128px] px-[20px] md:px-[clamp(20px,12vw,122px)] lg:px-8">
      <div className="flex flex-col items-center gap-2 max-w-[348px] w-full">
        <h2 className={`h2-text flex items-center  ${className}`}>
          {heading}
          <span className="h2-text pb-1">{subheading}</span>
        </h2>
        <p className={`small-text`}>{text}</p>
      </div>
    </div>
  )
}

export default TotalCard
