import React from "react"
import CommentIcon from "../../../assets/images/icons/comit.svg"

import { AnArmy } from "../../../dummyData"

const Index = () => {
  return (
    <>
      {AnArmy.map((item, i) => (
        <div
          key={i}
          className="w-auto h-[233px] p-4 flex items-start justify-between flex-col  gap-3 rounded-lg border border-solid border-gray-201"
        >
          <div className="">
            <h4 className="small-text !font-bold mb-[17px] text-gray-900">
              {item.heading}
            </h4>

            <div className="flex flex-wrap items-center gap-2">
              <img
                src={item.profileLogo}
                alt="Profile_Logo"
                className="rounded-full flex items-center justify-center w-[24px] h-[24px]"
              />
              <span className="body-small-text tracking-normal text-gray-900 m-0">
                {item.name}
              </span>
              <span className="body-small-text tracking-normal text-gray-701 m-0">
                {item.date}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={CommentIcon} alt="commit" />
            <p className="body-small-text tracking-normal text-gray-900 m-0">
              {item.comment}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Index
