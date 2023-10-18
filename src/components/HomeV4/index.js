import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Formik } from "formik"

import LanguageCard from "../common/LanguageCard"
import CoursesCard from "../common/CoursesCard"
import Button from "../../utils/Button"

import Javascript from "../../assets/images/javaScript.png"

const courses = [
  {
    image: Javascript,
    course: "JavaScript",
    courseQuantity: "218 courses",
  },
]

const Index = () => {
  return (
    <div className="w-full pt-[228px]">
      <div className="max-w-[1440px] mx-auto px-[130px]">
        {/* Hero */}
        <div className="flex flex-col items-center mt-[160px] mb-[164px]">
          <h1 className="text-[90px] font-bold leading-[92px] tracking-[-1.4px] text-[#292A32] mb-6">
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
              className="bg-[#7232FA] hover:bg-white hover:text-[#292A32] hover:border border-solid border-[#292A32] rounded-xl"
              icon=""
              type=""
              disabled
            />
            <Button
              text="Browse the library"
              onClick={() => {}}
              className="hover:bg-[#7232FA] bg-white !text-[#292A32] hover:!text-white border hover:border-none border-solid border-[#292A32] rounded-xl"
              icon=""
              type=""
              disabled
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-5 mb-[164px]">
          {courses.map((item, index) => (
            <div
              className="w-auto h-auto px-4 py-5 flex items-center gap-3 rounded-lg border border-solid border-gray-201"
              key={index}
            >
              <StaticImage
                src={item.image}
                alt="A dinosaur"
                placeholder="blurred"
                layout="fixed"
                width={36}
                height={36}
                className="rounded-full flex items-center justify-center"
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
        <h1 className="text-[38px] font-bold leading-[44px] track-[-0.72px] text-center mb-16">
          Explore over 700+ Courses
        </h1>
        <div className="w-full grid grid-cols-4 gap-5 mb-[164px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
            <CoursesCard />
          ))}
        </div>
        {/* Inspired Content */}
        <div className="mb-[164px] flex flex-col items-center gap-16">
          <h2 className="text-[36px] font-bold leading-[44px] tracking-[-0.72px] text-[#292A32]">
            Content that’s inspired the Internet
          </h2>
          <div className="flex gap-5">
            <div className="w-[880px] p-8 rounded-lg border border-solid border-[#DADAE0]">
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
        <div className="flex flex-col items-center mb-[164px]">
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
              <form onSubmit={handleSubmit} className="flex">
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter your email"
                    className="py-4 px-6 text-[16px] font-normal leading-[24px] tracking-normal rounded-xl max-w-[340px] text-[#292A32] border border-solid border-[#DADAE0] focus:border-[#7232FA] mr-5"
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
