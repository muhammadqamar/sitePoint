import React from "react"

const TotalCard = props => {
  const { heading, subheading } = props

  return (
    <div className="w-full flex flex-col items-center gap-2 max-w-[348px]  text-black">
      <h2 className="h2-text flex items-center">{heading}</h2>
      <p className="small-text tracking-[-0.16px]">{subheading}</p>
    </div>
  )
}

export default TotalCard
