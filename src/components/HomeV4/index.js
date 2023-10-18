import React from "react"
import LanguageCard from "../common/LanguageCard"
import CoursesCard from "../common/CoursesCard"
import LearningCard from "../common/LearningCard"
import WritingTabs from "../common/writingTabs"
import ArmyCard from "../common/ArmyCard"

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

        {/* Courses */}
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
        {/* Learning */}
        <div className="w-full mb-[164px]">
          <h1 className="text-[38px] font-bold leading-[44px] track-[-0.72px] text-gray-900 text-center mb-4">
            For all learning paths
          </h1>
          <p className="small-text text-center text-gray-900 mb-16">
            Whether you’re a full-stack developer, designer, or looking to get
            into AI, we’ve got a path for you.
          </p>
          <div className="w-full grid grid-cols-4 gap-5 mb-16">
            {[1, 2, 3, 4].map(item => (
              <LearningCard />
            ))}
          </div>
          <Button
            text="Explore all courses"
            className=" mx-auto !text-gray-900 hover:!text-white !font-bold rounded-xl border border-solid border-gray-900 hover:border-purple_300"
          />
        </div>

        {/* Writing */}
        <div className="w-full mb-[164px]">
          <h1 className="text-[38px] font-bold leading-[44px] track-[-0.72px] text-gray-900 text-center mb-[64px]">
            What we’re writing about these days
          </h1>

          <div className="w-full flex items-center gap-1 mb-[64px]">
            <WritingTabs />
          </div>

          <div className="w-full grid grid-cols-4 gap-5 mb-[164px]">
            {[1, 2, 3, 4].map(item => (
              <LearningCard />
            ))}
          </div>
        </div>
        {/* Developers */}
        <div className="w-full mb-[164px]">
          <h1 className="text-[38px] font-bold leading-[44px] track-[-0.72px] text-gray-900 text-center mb-4">
            An army of developers ready to assist
          </h1>
          <p className="small-text text-center text-gray-900 mb-16">
            Create a free account and join our community today!
          </p>
          <div className="w-full grid grid-cols-4 gap-5 mb-16">
            {[1, 2, 3, 4].map(item => (
              <ArmyCard />
            ))}
          </div>
          <Button
            text="Go to community"
            className=" mx-auto !text-gray-900 hover:!text-white !font-bold rounded-xl border border-solid border-gray-900 hover:border-purple_300"
          />
        </div>
      </div>
    </div>
  )
}

export default Index
