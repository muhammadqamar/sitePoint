import React from "react"
import { Learning } from "../../../dummyData"

const Index = props => {
  const { date } = props
  return (
    <>
      {Learning.map((item, i) => (
        <div
          key={i}
          className="w-auto h-auto flex flex-col items-center gap-4 rounded-lg"
        >
          <img
            src={item.image}
            alt="A dinosaur"
            className="rounded-lg w-full flex items-center justify-center h-[320px]"
          />
          <div className="w-full  flex gap-2 items-center">
            <div className="flex items-center gap-1">
              {item.logos.map((item, i) => (
                <img
                  key={i}
                  src={item.logo}
                  alt="Course_Logo"
                  className="rounded-full w-6 h-6"
                />
              ))}
            </div>
            <span className="body-small-text tracking-normal text-gray-900 m-0">
              {item.name}
            </span>
            <span className="body-small-text tracking-normal text-gray-701 m-0">
              {item.step}
            </span>
          </div>
          <h4 className="w-full   small-text !font-bold  text-gray-900 m-0">
            {item.subheading}
          </h4>
        </div>
      ))}
    </>
  )
}

export default Index
