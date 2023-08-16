import React from "react"

import HeroSection from "./hero"
import KnowledgeSection from "./knowledgeSection"
import TotalProgress from "../../utils/TotalProgress"
import LatestSkill from "../../utils/LatestSkills"
import CourseCard from "../../utils/CourseCard"

import SitepointFeatureImg from "../../assets/images/sitepoint-feature.png"
import Logo1_1 from "../../assets/images/logo/js.svg"
import Logo1_2 from "../../assets/images/logo/react.svg"
import Logo1_3 from "../../assets/images/logo/node-js.svg"
import Logo2_1 from "../../assets/images/logo/html.svg"
import Logo2_2 from "../../assets/images/logo/css.svg"
import Logo3_1 from "../../assets/images/logo/vs-code.svg"
import Logo3_2 from "../../assets/images/logo/swap-call.svg"
import Logo3_3 from "../../assets/images/logo/dev-board.svg"
import Logo4_1 from "../../assets/images/logo/code-fill.svg"
import Logo5_1 from "../../assets/images/logo/vue.svg"
import Logo6_1 from "../../assets/images/logo/calculater.svg"
import Logo6_2 from "../../assets/images/logo/function.svg"
import Logo7_1 from "../../assets/images/logo/python.svg"
import Logo8_1 from "../../assets/images/logo/analytics.svg"

const learningPath = [
  {
    skillLogo: [
      {
        logo: Logo1_1,
      },
      {
        logo: Logo1_2,
      },
      {
        logo: Logo1_3,
      },
    ],
    heading: "Full Stack JavaScript Developer",
    lable: "Learning Path",
  },
  {
    skillLogo: [
      {
        logo: Logo2_1,
      },
      {
        logo: Logo2_2,
      },
      {
        logo: Logo1_1,
      },
    ],
    heading: "Web Development Basics",
    lable: "Learning Path",
  },
  {
    skillLogo: [
      {
        logo: Logo3_1,
      },
      {
        logo: Logo3_2,
      },
      {
        logo: Logo3_3,
      },
    ],
    heading: "Pro Dev Workflow",
    lable: "Learning Path",
  },
  {
    skillLogo: [
      {
        logo: Logo2_1,
      },
      {
        logo: Logo2_2,
      },
      {
        logo: Logo4_1,
      },
    ],
    heading: "Build Beautiful Webpages",
    lable: "Learning Path",
  },
  {
    skillLogo: [
      {
        logo: Logo1_2,
      },
    ],
    heading: "React Front End Development",
    lable: "Learning Path",
  },
  {
    skillLogo: [
      {
        logo: Logo5_1,
      },
    ],
    heading: "Vue Front End Developement",
    lable: "Learning Path",
  },
  {
    skillLogo: [
      {
        logo: Logo1_1,
      },
    ],
    heading: "Advanced JavaScript",
    lable: "Learning Path",
  },
  {
    skillLogo: [
      {
        logo: Logo6_1,
      },
      {
        logo: Logo6_2,
      },
    ],
    heading: "Computer Science Crash Coruse",
    lable: "Learning Path",
  },
  {
    skillLogo: [
      {
        logo: Logo7_1,
      },
    ],
    heading: "Become a Python Master",
    lable: "Learning Path",
  },
  {
    skillLogo: [
      {
        logo: Logo7_1,
      },
      {
        logo: Logo8_1,
      },
    ],
    heading: "Become a Python Data Scientist",
    lable: "Learning Path",
  },
]

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
              {learningPath.map((item, index) => (
                <CourseCard
                  key={index}
                  learningLogo={item.skillLogo}
                  subheading={item.heading}
                  text={item.lable}
                />
              ))}
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
