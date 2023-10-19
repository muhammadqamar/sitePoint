import React from "react"

const Index = props => {
  const { image, starlogo, rating, review, heading } = props
  return (
    <div className="w-auto h-auto  pb-5 flex flex-col items-center gap-4 rounded-lg ">
      <img
        src={image}
        alt="CourseCard_Image"
        className="rounded-lg w-full flex items-center justify-center sm:h-[200px] h-auto"
      />
      <div className="w-full px-4 flex gap-2 items-center">
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
