import React from "react"
import { Formik } from "formik"

import Button from "../../utils/Button"

const JoinNewsletter = () => {
  return (
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

            <Button
              text="Subscribe"
              className=" mx-auto !text-gray-900 hover:!text-white !font-bold rounded-xl border border-solid border-gray-900 hover:border-purple_300"
              type="submit"
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </div>
  )
}

export default JoinNewsletter
