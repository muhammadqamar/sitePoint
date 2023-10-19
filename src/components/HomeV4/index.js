import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Formik } from "formik"
import Slider from "../LogoSlider"

import LanguageCard from "../common/LanguageCard"
import CoursesCard from "../common/CoursesCard"
import LearningCard from "../common/LearningCard"
import WritingTabs from "../common/writingTabs"
import ArmyCard from "../common/ArmyCard"

import Button from "../../utils/Button"

const Index = () => {
  return (
    <div className="w-full md:pt-[228px] pt-[150px]">
      <div className="">
        {/* Hero */}
        <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 flex flex-col items-center mb-20 md:mb-[120px] xl:mb-[164px]">
          <h1 className="md:text-[90px] text-[50px] font-bold leading-[92px] tracking-[-1.4px] text-[#292A32] mb-6 md:text-center text-start">
            We develop developers
          </h1>
          <p className="text-[18px] font-normal leading-[28px] tracking-normal text-[#444553] mb-10">
            Access a library of books and courses on Javascript, Phython, AI,
            and more with a community of over 500,000 developers.
          </p>
          <div className="flex items-center gap-5">
            <Button
              text="Start Free Trial"
              onClick={() => {}}
              className="bg-[#7232FA] hover:bg-white hover:text-[#292A32] border border-solid border-[#7232FA] hover:border-[#292A32] rounded-xl"
              icon=""
              type=""
              disabled
            />
            <Button
              text="Browse the library"
              onClick={() => {}}
              className="hover:bg-[#7232FA] bg-white !text-[#292A32] hover:!text-white border border-solid border-[#292A32] hover:border-[#7232FA] rounded-xl"
              icon=""
              type=""
              disabled
            />
          </div>
        </div>
        {/* Courses */}
        <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 md:mb-[164px] mb-[80px]">
          <LanguageCard />
        </div>
        {/*Explore Courses */}
        <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 w-full mb-20 md:mb-[120px] xl:mb-[164px]">
          <h1 className="text-[38px] font-bold leading-[44px] track-[-0.72px] text-center mb-16">
            Explore over 700+ Courses
          </h1>
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mb-16">
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
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mb-16">
            <LearningCard />
          </div>
          <Button
            text="Explore all courses"
            className=" mx-auto !text-gray-900 hover:!text-white !font-bold rounded-xl border border-solid border-gray-900 hover:border-purple_300"
          />
        </div>
        {/* Inspired Content */}
        <div className="mb-20 md:mb-[120px] xl:mb-[164px] flex flex-col items-center gap-16">
          <h2 className="text-[36px] font-bold leading-[44px] tracking-[-0.72px] text-[#292A32]">
            Content that’s inspired the Internet
          </h2>
          <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 w-full flex gap-5">
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
              className="rounded-lg"
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
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mb-16">
            <ArmyCard />
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

          {/* Writing Cards */}
          <WritingTabs cards />
        </div>
        {/* Join Newsletter */}
        <div className="max-w-[1440px] mx-auto md:px-[130px] px-5 w-full flex flex-col md:items-center items-start">
          <h2 className="text-[36px] font-bold leading-[44px] tracking-[-0.72px] text-[#292A32] mb-8">
            Join the newsletter
          </h2>
          <p className="text-[16px] font-normal leading-[24px] tracking-normal text-[#444553] mb-16">
            Get the freshest resources and stories for developers, designers and
            digital creators in your inbox each week
          </p>
          <Formik
            initialValues={{ email: "" }}
            validate={values => {
              const errors = {}
              if (!values.email) {
                errors.email = "Required"
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address"
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-wrap gap-5">
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter your email"
                    className="py-4 px-6 text-[16px] font-normal leading-[24px] tracking-normal rounded-xl max-w-[340px] text-[#292A32] border border-solid border-[#DADAE0] focus:border-[#7232FA]"
                  />
                  <p className="caption-text  text-[red] m-0">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-4 px-6 h-[56px] text-[16px] font-bold leading-[24px] tracking-normal rounded-xl text-[#292A32] border border-solid border-[#292A32]"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Index
