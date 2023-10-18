import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Formik } from "formik"
import LanguageCard from "../common/LanguageCard"
import CoursesCard from "../common/CoursesCard"
import LearningCard from "../common/LearningCard"
import ArmyCard from "../common/ArmyCard"

import Button from "../../utils/Button"

const Index = () => {
  return (
    <div className="w-full pt-[228px]">
      <div className="max-w-[1440px] mx-auto px-[130px]">
        {/* Hero */}
        <div className="flex flex-col items-center pt-[160px] pb-[164px]">
          <h1 className="text-[90px] font-bold leading-[92px] tracking-[-1.4px] text-[#292A32] mb-6">
            We develop developers
          </h1>
          <p className="text-[18px] font-normal leading-[28px] tracking-normal text-[#444553] mb-10">
            Access a library of books and courses on Javascript, Phython, AI,
            and more with a community of over 500,000 developers.
          </p>
        </div>
        <div className="w-full grid grid-cols-4 gap-5 mb-[164px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
            <LanguageCard />
          ))}
        </div>

        {/* courses */}
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
        {/* learning */}
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

        {/* developers */}
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
        {/* Inspired Content */}
        <div className="py-[164px] flex flex-col items-center gap-16">
          <h2 className="text-[36px] font-bold leading-[44px] tracking-[-0.72px] text-[#292A32]">
            Content that’s inspired the Internet
          </h2>
          <div className="flex gap-5">
            <div className="w-[880px] py-3 px-8 rounded-lg border border-solid border-[#DADAE0]">
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
        </div>
        {/* Join Newsletter */}
        <div className="flex flex-col items-center py-[164px]">
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
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className=" py-4 px-6 rounded-xl"
                />
                {errors.email && touched.email && errors.email}
                <button type="submit" disabled={isSubmitting}>
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
