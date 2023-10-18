import React from "react"
import LanguageCard from "../common/LanguageCard"
import CoursesCard from "../common/CoursesCard"

import Button from "../../utils/Button"

const Index = () => {
  return (
    <div className="w-full pt-[228px]">
      <div className="max-w-[1440px] mx-auto px-[130px]">
        <div className="w-full grid grid-cols-4 gap-5 mb-[164px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
            <LanguageCard />
          ))}
        </div>
        <div className="w-full mb-[164px]">
          <h1 className="text-[38px] font-bold leading-[44px] track-[-0.72px] text-center mb-16">
            Explore over 700+ Courses
          </h1>
          <div className="w-full grid grid-cols-4 gap-5 mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <CoursesCard />
            ))}
          </div>
          <Button
            text="Browse Premium Library"
            className=" mx-auto !text-gray-900 hover:!text-white !font-bold rounded-xl border border-solid border-gray-900 hover:border-purple_300"
          />
        </div>
      </div>
    </div>
  )
}

export default Index
