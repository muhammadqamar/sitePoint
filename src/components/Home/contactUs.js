import React from "react"
import { Formik } from "formik"

const ContactUs = () => {
  return (
    <div className="w-full  md:w-[535px] lg:w-[440px] min-h-[662px] bg-white rounded-3xl px-5 py-8 sm:p-8 shadow-none md:shadow-lgShadow">
      <h3 className="h3-text mb-1">Contact us</h3>
      <p className="body-small-text text-gray_400 mb-8">
        The minimum campaign spend is $1,000 USD
      </p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          company: "",
          companyBudget: "",
          otherCompany: "",
        }}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = "Required"
          }
          if (!values.company) {
            errors.company = "Required"
          }
          if (!values.companyBudget) {
            errors.companyBudget = "Required"
          }
          if (!values.otherCompany) {
            errors.otherCompany = "Required"
          }
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 justify-between"
          >
            <div className="w-full">
              <div className="w-full flex items-start justify-between flex-col sm:flex-row gap-4 mb-4">
                <div className="w-full sm:w-1/2 flex flex-col gap-1">
                  <label className="caption-text text-gray_400 ">Name *</label>
                  <input
                    className="input body-small-text "
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <p className="caption-text text-[red] m-0">
                    {errors.name && touched.name && errors.name}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-1">
                  <label className="caption-text text-gray_400 ">Email *</label>
                  <input
                    className="input body-small-text "
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <p className="caption-text  text-[red] m-0">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
              </div>
              <div className="w-full flex items-start justify-between flex-col sm:flex-row gap-4 ">
                <div className="w-full sm:w-1/2flex flex-col gap-1">
                  <label className="caption-text text-gray_400 ">
                    Company *
                  </label>
                  <input
                    className="input body-small-text "
                    type="text"
                    name="company"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company}
                  />
                  <p className="caption-text text-[red] m-0">
                    {errors.company && touched.company && errors.company}
                  </p>
                </div>
                <div className="w-full sm:w-1/2flex flex-col gap-1">
                  <label className="caption-text text-gray_400 ">
                    Campaign budget *
                  </label>

                  <select
                    name="companyBudget"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.companyBudget}
                    className="input body-small-text "
                  >
                    <option value="" label="Select a color">
                      Select a color
                    </option>
                    <option value="red" label="red">
                      red
                    </option>
                    <option value="blue" label="blue">
                      blue
                    </option>
                    <option value="green" label="green">
                      green
                    </option>
                  </select>

                  <p className="caption-text text-[red] m-0">
                    {errors.companyBudget &&
                      touched.companyBudget &&
                      errors.companyBudget}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="caption-text text-gray_400 mb-3">
                What partnership are you interested in?
              </p>
              <div className="w-full flex gap-[6px] flex-wrap">
                <label className="labels body-small-text">
                  Display Advertising
                </label>
                <label className="labels body-small-text">
                  Newsletter Sponsorship
                </label>
                <label className="labels body-small-text">
                  Sponsored Content
                </label>
                <label className="labels body-small-text">
                  Email Marketing
                </label>
                <label className="labels body-small-text">Other</label>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label className="caption-text text-gray_400 ">
                Other comments *
              </label>
              <textarea
                className="input body-small-text "
                type="text"
                name="otherCompany"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.otherCompany}
                rows={5}
              />
              <p className="caption-text text-[red] m-0">
                {errors.otherCompany &&
                  touched.otherCompany &&
                  errors.otherCompany}
              </p>
            </div>

            <button
              className="button bg-purple_200"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default ContactUs
