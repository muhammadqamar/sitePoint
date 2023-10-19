import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Index = props => {
  const { image, starlogo, rating, review, heading } = props
  return (
    <div className="w-auto h-auto  pb-5 flex flex-col items-center gap-4 rounded-lg ">
      {/* <StaticImage
        src={image}
        alt="A dinosaur"
        placeholder="blurred"
        height={200}
        className="rounded-lg w-full flex items-center justify-center"
      /> */}
      <img
        src={image}
        alt="CourseCard_Image"
        className="rounded-lg w-full flex items-center justify-center h-[200px]"
      />
      <div className="w-full px-4 flex gap-2 items-center">
        {/* <StaticImage
          src={starlogo}
          alt="A dinosaur"
          placeholder="blurred"
          width={120}
          height={24}
        /> */}
        <img src={starlogo} alt="Star_Logo" className="w-[120px] h-[24px]" />
        <span className="body-small-text tracking-normal text-gray-900 m-0">
          {rating}
        </span>
        <span className="body-small-text tracking-normal text-gray-701 m-0">
          {review}
        </span>
      </div>
      <h4 className="w-full px-4  small-text !font-bold  text-gray-900 m-0">
        {heading}
      </h4>
    </div>
  )
}

export default Index
