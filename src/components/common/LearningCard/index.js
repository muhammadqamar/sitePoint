import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Index = props => {
  const { image, height, logo, name, step, date, subheading } = props
  return (
    <div className="w-auto h-auto flex flex-col items-center gap-4 rounded-lg">
      <img
        src={image}
        alt="A dinosaur"
        // placeholder="blurred"
        width={280}
        height={height || 320}
        className="rounded-lg w-full flex items-center justify-center"
      />
      <div className="w-full  flex gap-2 items-center">
        <div className="flex items-center gap-1">
          <img
            src={logo}
            alt="A dinosaur"
            // placeholder="blurred"
            width={24}
            height={24}
          />
        </div>
        <span className="body-small-text tracking-normal text-gray-900 m-0">
          {name}
        </span>
        <span className="body-small-text tracking-normal text-gray-701 m-0">
          {date ? date : step}
        </span>
      </div>
      <h4 className="w-full   small-text !font-bold  text-gray-900 m-0">
        {subheading}
      </h4>
    </div>
  )
}

export default Index
