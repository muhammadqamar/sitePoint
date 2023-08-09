import React from "react"

import HeroSection from "./hero"
import KnowledgeSection from "./knowledgeSection"
import TotalProgress from "../../utils/TotalProgress"
import LatestSkill from "../../utils/LatestSkills"
import CourseCard from "../../utils/CourseCard"

import SitepointFeatureImg from "../../assets/images/sitepoint-feature.png"

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className=" w-full px-[20px] md:px-[clamp(20px,12vw,122px)]  ">
        <div className="max-w-[1084px] mx-auto ">
          <FeatureImg />

          {/* add section */}

          <div className=" w-full flex items-center justify-center lg:justify-between gap-5 flex-wrap xs:my-10 xsm:my-16 md:my-20 lg:my-32">
            <TotalProgress heading="700+" subheading="Books & Courses" />
            <TotalProgress
              heading="35+"
              subheading="Premium Coding Assessments"
            />
            <TotalProgress
              heading="Updates"
              subheading="New Content Added Constantly"
            />
          </div>

          <div className="w-full">
            <h2 className="h2-text xs:mb-10 md:mb-14">All the latest skills</h2>
            <div className="w-full flex items-center gap-5 flex-wrap">
              <LatestSkill
                timer="10:38:34"
                text="A Complete Guide to Learning ChatGPT 4"
                rating="3.3"
                bg="bg-[url('../../assets/images/bg-skill-img.png')]"
              />
              <LatestSkill
                timer="10:38:34"
                text="Become the CSS Hero of Your Office"
                rating="3.3"
                bg="bg-[url('../../assets/images/bg-card2.png')]"
              />
              <LatestSkill
                timer="10:38:34"
                text="Master CSS Layouts with Flexbox"
                rating="3.3"
                bg="bg-[url('../../assets/images/bg-card3.png')]"
              />
              <LatestSkill
                timer="10:38:34"
                text="Create Animations with CSS"
                rating="3.3"
                bg="bg-[url('../../assets/images/bg-card4.png')]"
              />
              <LatestSkill
                timer="10:38:34"
                text="Become the CSS Hero of Your Office"
                rating="3.3"
                bg="bg-[url('../../assets/images/bg-card5.png')]"
              />
              <LatestSkill
                timer="10:38:34"
                text="Master CSS Layouts with Flexbox"
                rating="3.3"
                bg="bg-[url('../../assets/images/bg-card6.png')]"
              />
              <LatestSkill
                timer="10:38:34"
                text="Create Animations with CSS"
                rating="3.3"
                bg="bg-[url('../../assets/images/bg-card7.png')]"
              />
              <LatestSkill
                timer="10:38:34"
                text="A Complete Guide to Learning ChatGPT 4"
                rating="3.3"
                bg="bg-[url('../../assets/images/bg-card8.png')]"
              />
            </div>
          </div>

          <div className="w-full xs:my-10 xsm:my-16 md:my-20 lg:my-32">
            <h2 className="h2-text mb-14">A path for everyone</h2>
            <div className="w-full sm:w-[inherit] lg:w-full flex items-center gap-5  flex-wrap overflow-hidden">
              <CourseCard
                Icon
                subheading="Full Stack JavaScript Developer"
                text="Learning Path"
              />
              <CourseCard
                Icon
                subheading="Full Stack JavaScript Developer"
                text="Learning Path"
              />
              <CourseCard
                Icon
                subheading="Full Stack JavaScript Developer"
                text="Learning Path"
              />
              <CourseCard
                Icon
                subheading="Full Stack JavaScript Developer"
                text="Learning Path"
              />
              <CourseCard
                Icon
                subheading="Full Stack JavaScript Developer"
                text="Learning Path"
              />
              <CourseCard
                Icon
                subheading="Full Stack JavaScript Developer"
                text="Learning Path"
              />
              <CourseCard
                Icon
                subheading="Full Stack JavaScript Developer"
                text="Learning Path"
              />
            </div>
          </div>
          <div id="knowledge">
            <KnowledgeSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

const FeatureImg = () => {
  return (
    <div className="relative mt-[-115px] rounded-[20px] shadow-xlgShadow overflow-hidden ">
      <img
        src={SitepointFeatureImg}
        alt="site point"
        className="w-full h-auto object-cover"
      />
    </div>
  )
}
