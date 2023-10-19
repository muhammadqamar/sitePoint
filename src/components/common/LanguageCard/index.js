import React from "react"

const Index = ({ image, course, courseQuantity }) => {
  return (
    <div className="w-auto h-auto px-4 py-5 flex items-center gap-3 rounded-lg border border-solid border-gray-201">
      <img src={image} alt="course_image" />
      <div className="">
        <h4 className="small-text !font-bold m-0 text-gray-900">{course}</h4>
        <p className="body-small-text tracking-normal text-gray-701 m-0">
          {courseQuantity}
        </p>
      </div>
    </div>
  )
}

export default Index
