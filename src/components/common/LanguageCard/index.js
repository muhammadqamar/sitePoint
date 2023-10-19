import React from "react"
import { Languages } from "../../../dummyData"

const Index = () => {
  return (
    <>
      {Languages.map((item, i) => (
        <div
          key={i}
          className="w-auto h-auto px-4 py-5 flex items-center gap-3 rounded-lg border border-solid border-gray-201"
        >
          <img src={item.image} alt="course_image" />
          <div className="">
            <h4 className="small-text !font-bold m-0 text-gray-900">
              {item.course}
            </h4>
            <p className="body-small-text tracking-normal text-gray-701 m-0">
              {item.courseQuantity}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Index
