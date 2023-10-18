import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Index = () => {
  return (
    <div className="w-auto h-auto  pb-5 flex flex-col items-center gap-4 rounded-lg ">
      <StaticImage
        src="../../../assets/images/css-bg.png"
        alt="A dinosaur"
        placeholder="blurred"
        height={200}
        className="rounded-lg w-full flex items-center justify-center"
      />
      <div className="w-full px-4 flex gap-2 items-center">
        <StaticImage
          src="../../../assets/images/stars.png"
          alt="A dinosaur"
          placeholder="blurred"
          width={120}
          height={24}
        />
        <span className="body-small-text tracking-normal text-gray-900 m-0">
          4.8
        </span>
        <span className="body-small-text tracking-normal text-gray-701 m-0">
          (48 reviews)
        </span>
      </div>
      <h4 className="w-full px-4  small-text !font-bold  text-gray-900 m-0">
        CSS Troubleshooting in Six Easy Steps
      </h4>
    </div>
  )
}

export default Index
