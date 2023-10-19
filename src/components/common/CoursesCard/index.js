import React from "react"

import { Courses } from "../../../dummyData"

const Index = () => {
  return (
    <>
      {Courses.map((item, i) => (
        <div
          key={i}
          className="w-auto h-auto  pb-5 flex flex-col items-center gap-4 rounded-lg "
        >
          <img
            src={item.image}
            alt="CourseCard_Image"
            className="rounded-lg w-full flex items-center justify-center sm:h-[200px] h-auto"
          />
          <div className="w-full px-4 flex gap-2 items-center">
            <img
              src={item.starlogo}
              alt="Star_Logo"
              className="w-[120px] h-[24px]"
            />
            <span className="body-small-text tracking-normal text-gray-900 m-0">
              {item.rating}
            </span>
            <span className="body-small-text tracking-normal text-gray-701 m-0 whitespace-nowrap">
              {item.review}
            </span>
          </div>
          <h4 className="w-full px-4  small-text !font-bold  text-gray-900 m-0">
            {item.heading}
          </h4>
        </div>
      ))}
    </>
  )
}

export default Index
