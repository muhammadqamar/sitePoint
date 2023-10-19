import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Slider from "../LogoSlider"

import LanguageCard from "../common/LanguageCard"
import CoursesCard from "../common/CoursesCard"
import LearningCard from "../common/LearningCard"
import WritingTabs from "../common/writingTabs"
import ArmyCard from "../common/ArmyCard"

import Button from "../../utils/Button"

import JoinNewsletter from "./JoinNewsletter"

import Javascript from "../../assets/images/javaScript.png"
import PHPImage from "../../assets/images/php.png"
import HTMLImage from "../../assets/images/html.png"
import PythonImage from "../../assets/images/python.png"
import RubyImage from "../../assets/images/ruby.png"
import WordpressImage from "../../assets/images/wordPress.png"
import BlockchainImage from "../../assets/images/blockChain.png"
import CloudImage from "../../assets/images/cloud.png"

import CSSLOgo from "../../assets/images/cssLogo.png"
import Typescript from "../../assets/images/typeScript.png"
import JavaScript from "../../assets/images/exploreJavaScript.png"
import CSSFirebox from "../../assets/images/cssFirebox.png"
import PhPExplore from "../../assets/images/phpExplore.png"
import CSSArchitecture from "../../assets/images/cssArchitecture.png"
import ReactImg from "../../assets/images/react.png"
import FigmaImg from "../../assets/images/figma.png"
import FullStack from "../../assets/images/fullStackDeveloper.png"
import ReactLogo from "../../assets/images/reactLogo.png"
import JavascriptGreen from "../../assets/images/javaScriptGreen.png"
import WebDevelopmentBasics from "../../assets/images/webDevelopmentBasics.png"
import BuildPages from "../../assets/images/buildBeautifulWebpages.png"
import PythonMaster from "../../assets/images/becomePythonMaster.png"
import CraftingTarget from "../../assets/images/craftingTarget.png"
import ChromeExtension from "../../assets/images/chromeExtension.png"
import AcceleratingCloud from "../../assets/images/acceleratingCloud.png"
import WhichLanguage from "../../assets/images/whichLanguage.png"

import RatingsImg from "../../assets/images/logo/ratings.svg"
import ShefaliShetty from "../../assets/images/logo/shefaliShetty.svg"
import MarkJacob from "../../assets/images/logo/markJacob.svg"
import AndrewMillan from "../../assets/images/logo/andrewMillan.svg"
import SarahJemeson from "../../assets/images/logo/sarahJemeson.svg"
import DaveMaxxwell from "../../assets/images/logo/daveMaxxwell.svg"
import JakeJhonson from "../../assets/images/logo/jakeJhonson.svg"
import MarkDev from "../../assets/images/logo/markDev.svg"
import AndySmith from "../../assets/images/logo/daveMaxxwell.svg"

const courses = [
  {
    image: Javascript,
    course: "JavaScript",
    courseQuantity: "218 courses",
  },
  {
    image: PHPImage,
    course: "PHP",
    courseQuantity: "167 courses",
  },
  {
    image: HTMLImage,
    course: "HTML & CSS",
    courseQuantity: "415 courses",
  },
  {
    image: PythonImage,
    course: "Python",
    courseQuantity: "112 courses",
  },
  {
    image: RubyImage,
    course: "Ruby",
    courseQuantity: "88 courses",
  },
  {
    image: WordpressImage,
    course: "WordPress",
    courseQuantity: "394 courses",
  },
  {
    image: BlockchainImage,
    course: "Blockchain",
    courseQuantity: "29 courses",
  },
  {
    image: CloudImage,
    course: "Cloud & DevOps",
    courseQuantity: "37 courses",
  },
]

const Index = () => {
  return (
    <div className="w-full md:pt-[228px] pt-[150px]">
      <div className="">
        {/* Hero */}
        <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 flex flex-col items-center mb-20 md:mb-[120px] xl:mb-[164px]">
          <h1 className="md:text-[90px] text-[50px] font-bold md:leading-[92px] leading-[50px] tracking-[-1.4px] text-[#292A32] mb-6 md:text-center text-start">
            We develop developers
          </h1>
          <p className="text-[18px] font-normal leading-[28px] tracking-normal text-[#444553] mb-10">
            Access a library of books and courses on Javascript, Phython, AI,
            and more with a community of over 500,000 developers.
          </p>
          <div className="flex items-center flex-wrap gap-5">
            <Button
              text="Start Free Trial"
              onClick={() => {}}
              className="bg-[#7232FA] w-[190px] hover:bg-white hover:text-[#292A32] border border-solid border-[#7232FA] hover:border-[#292A32] rounded-xl"
              icon=""
              type=""
              disabled
            />
            <Button
              text="Browse the library"
              onClick={() => {}}
              className="hover:bg-[#7232FA] !px-0 w-[190px] !font-bold bg-white !text-[#292A32] hover:!text-white border hover:border-none border-solid border-[#292A32] rounded-xl"
              icon=""
              type=""
              disabled
            />
          </div>
        </div>
        {/* Courses */}
        <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 w-full grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5 md:mb-[164px] mb-[80px]">
          {courses?.map((item, index) => (
            <div
              className="w-full h-auto px-4 py-4 flex items-center gap-3 rounded-lg border border-solid border-gray-201"
              key={index}
            >
              <img
                src={item.image}
                alt=""
                className="object-fit rounded-full h-9"
              />
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
        </div>
        {/*Explore Courses */}
        <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 w-full mb-20 md:mb-[120px] xl:mb-[164px]">
          <h1 className="text-[38px] font-bold leading-[44px] track-[-0.72px] text-center mb-16">
            Explore over 700+ Courses
          </h1>
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5 mb-16">
            <CoursesCard />
          </div>
          <Button
            text="Browse Premium Library"
            className=" mx-auto !text-gray-900 hover:!text-white !font-bold rounded-xl border border-solid border-gray-900 hover:border-purple_300"
          />
        </div>
        {/* Learning */}
        <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 w-full mb-20 md:mb-[120px] xl:mb-[164px]">
          <h1 className="text-[38px] font-bold leading-[44px] track-[-0.72px] text-gray-900 text-center mb-4">
            For all learning paths
          </h1>
          <p className="small-text text-center text-gray-900 mb-16">
            Whether you’re a full-stack developer, designer, or looking to get
            into AI, we’ve got a path for you.
          </p>
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5 mb-16">
            <LearningCard
              image={FullStack}
              logos
              logo1={Javascript}
              logo2={JavascriptGreen}
              logo3={ReactLogo}
              name="Beginner"
              step="7 steps"
              subheading="Full Stack JavaScript Developer"
            />
            <LearningCard
              image={WebDevelopmentBasics}
              logos
              logo1={Javascript}
              logo2={HTMLImage}
              logo3={CSSLOgo}
              name="Beginner"
              step="2 steps"
              subheading="Web Development Basics"
            />
            <LearningCard
              image={BuildPages}
              logos
              logo1={HTMLImage}
              logo2={CSSLOgo}
              logo3={FigmaImg}
              name="Beginner"
              step="3 steps"
              subheading="Build Beautiful Webpages"
            />
            <LearningCard
              image={PythonMaster}
              logo={PythonImage}
              name="Beginner"
              step="7 steps"
              subheading="Become a Python master"
            />
          </div>
          <Button
            text="Explore all courses"
            className=" mx-auto !text-gray-900 hover:!text-white !font-bold rounded-xl border border-solid border-gray-900 hover:border-purple_300"
          />
        </div>
        {/* Inspired Content */}
        <div className="mb-20 mx-auto md:px-[130px] px-5 md:mb-[164px] flex flex-col items-center gap-16">
          <h2 className="text-[36px] font-bold leading-[44px] tracking-[-0.72px] text-[#292A32]">
            Content that’s inspired the Internet
          </h2>
          <div className="max-w-[1440px] mx-auto w-full flex md:flex-nowrap flex-wrap gap-5">
            <div className="xl:max-w-[880px] w-full p-8 rounded-lg border border-solid border-[#DADAE0]">
              <p className="max-w-[628px] text-[24px] font-normal leading-[36px] tracking-normal text-[#292A32] mb-10">
                “... I joined SitePoint to learn more about web stuff and their
                PHP/MySQL tutorial was probably the first I used.”
              </p>
              <div className="flex items-center gap-3">
                <StaticImage
                  src="../../assets/images/matt.png"
                  alt="Matt image"
                  placeholder="blurred"
                  layout="fixed"
                  className="rounded-full"
                />
                <div>
                  <h4 className="text-[16px] font-bold leading-[24px] tracking-normal text-[#292A32]">
                    Matt Mullenweg
                  </h4>
                  <p className="text-[14px] font-normal leading-[20px] tracking-normal text-[#555667]">
                    Creator of WordPress, CEO of Automattic
                  </p>
                </div>
              </div>
            </div>
            <StaticImage
              src="../../assets/images/automatic.png"
              alt="Automattic image"
              placeholder="blurred"
              layout="fixed"
              className="rounded-lg h-full"
            />
          </div>
          {/* Slider */}
          <div className="w-full max-w-[1440px] min-h-[64px]">
            <Slider />
          </div>
        </div>
        {/* Developers */}
        <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 w-full mb-20 md:mb-[120px] xl:mb-[164px]">
          <h1 className="text-[38px] font-bold leading-[44px] track-[-0.72px] text-gray-900 text-center mb-4">
            An army of developers ready to assist
          </h1>
          <p className="small-text text-center text-gray-900 mb-16">
            Create a free account and join our community today!
          </p>
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5 mb-16">
            <ArmyCard
              heading="The usage of Artificial Intelligence in the sitepoint community"
              profileLogo={DaveMaxxwell}
              name="DaveMaxxwell"
              date="Mar 8"
              comment="10 replies"
            />
            <ArmyCard
              heading="How to move my side bar from the bottom to top?"
              profileLogo={JakeJhonson}
              name="JakeJhonson"
              date="Mar 5"
              comment="15 replies"
            />
            <ArmyCard
              heading="Can some guide me with AI Chat Bots and How we can use to start our Coding Journey"
              profileLogo={MarkDev}
              name="MarkDev"
              date="Mar 2"
              comment="20 replies"
            />
            <ArmyCard
              heading="Latest book you’ve read"
              profileLogo={AndySmith}
              name="AndySmith"
              date="Mar 1"
              comment="367 replies"
            />
          </div>
          <Button
            text="Go to community"
            className=" mx-auto !text-gray-900 hover:!text-white !font-bold rounded-xl border border-solid border-gray-900 hover:border-purple_300"
          />
        </div>
        {/* Writing */}
        <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 w-full mb-20 md:mb-[120px] xl:mb-[164px]">
          <h1 className="text-[38px] font-bold leading-[44px] track-[-0.72px] text-gray-900 text-center mb-[64px]">
            What we’re writing about these days
          </h1>
          <div className="w-full flex items-center flex-wrap xl:flex-nowrap gap-1 mb-[64px]">
            <WritingTabs />
          </div>
          {/* Learning Cards */}
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5 mb-[164px]">
            <LearningCard
              image={CraftingTarget}
              logo={ShefaliShetty}
              name="Shefali Shetty"
              date="Sep 1, 2023"
              subheading="Crafting Targeted Email Campaigns with Mailchimp and Drupal"
            />
            <LearningCard
              image={ChromeExtension}
              logo={MarkJacob}
              name="Mark Jacob"
              date="Aug 31, 2023"
              subheading="How to Create a Chrome Extension in 10 Minutes Flat"
            />
            <LearningCard
              image={AcceleratingCloud}
              logo={AndrewMillan}
              name="Andrew Millan"
              date="Aug 30, 2023"
              subheading="Accelerating the Cloud: What to Expect When Going Cloud Native"
            />
            <LearningCard
              image={WhichLanguage}
              logo={SarahJemeson}
              name="Sarah Jemeson"
              date="Aug 29, 2023"
              subheading="Which Programming Language Should I Learn First in 2023?"
            />
          </div>
        </div>
        {/* Join Newsletter */}
        <JoinNewsletter />
      </div>
    </div>
  )
}

export default Index
