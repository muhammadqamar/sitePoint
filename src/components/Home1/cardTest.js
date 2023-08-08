import React from "react"
import TotalCard from "../../utils/TotalCourse"
import LatestSkill from "../../utils/LatestSkills"
import CourseCard from "../../utils/CourseDevelopment"
import Icon from "../../assets/images/logo/js.svg"

const CardTest = () => {
  return (
    <div>
      <TotalCard heading="700" subheading="+" text="Books & Courses" />
      <LatestSkill
        heading="All the latest skills"
        timer="10:38:34"
        text="A Complete Guide to Learning ChatGPT 4"
        rating="3.3"
      />
      <CourseCard
        heading="A path for everyone"
        Icon
        subheading="Full Stack JavaScript Developer"
        text="Learning Path"
      />
    </div>
  )
}

export default CardTest
