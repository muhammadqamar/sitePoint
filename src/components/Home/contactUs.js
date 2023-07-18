import React, { useEffect, useState } from "react"
import { Formik } from "formik"

import {
  getAllFields,
  createOrganization,
  createPerson,
  createDeal,
} from "../../services/piperdrive"
import ThankYouPage from "./thankYou"
import Loader from "../../assets/images/loading-3.gif"
import Info from "../../assets/images/icons/info.svg"

const ContactUs = () => {
  const [selectedLabel, setSelectedLabel] = useState([])
  const [allDealField, setAllDealField] = useState([])
  const [formSubmit, setFormSubmit] = useState(false)
  const [toolTip, setToolTip] = useState(false)

  useEffect(() => {
    ;(async () => {
      const result = await getAllFields()
      if (result?.data) {
        setAllDealField(result?.data)
      }
    })()
  }, [])

  return (
    <div
      // data-aos="fade-left"
      className="w-full  md:w-[535px] lg:w-[440px] min-h-[662px] bg-white rounded-3xl px-5 py-8 sm:p-8 shadow-none md:shadow-lgShadow"
    >
      {formSubmit ? (
        <ThankYouPage setFormSubmit={setFormSubmit} />
      ) : (
        <>
          <h3 className="mb-1 h3-text">Contact us</h3>
          <p className="mb-8 body-small-text text-gray_400">
            The minimum campaign spend is $1,000 USD
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              company: "",
              companyBudget: [],
              otherCompany: "",
              interested: selectedLabel,
            }}
            // enableReinitialize
            validate={values => {
              const errors = {}
              if (!values.name) {
                errors.name = "Required"
              }
              if (!values.company) {
                errors.company = "Required"
              }
              if (values.companyBudget?.length === 0) {
                errors.companyBudget = "Required"
              }

              if (values.interested?.length === 0) {
                errors.interested = "Required"
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
            onSubmit={async (values, { setSubmitting }) => {
              const org = await createOrganization({
                name: values.company,
              })

              if (org?.data?.id) {
                const person = await createPerson({
                  name: values.name,
                  email: values.email,
                  org_id: org?.data?.id,
                })

                if (person?.data?.id) {
                  const deal = await createDeal({
                    title: values.company + " deal",
                    "413baf5a43f00f7e8a8bcbf7ba9d99add75a6e4b":
                      values.otherCompany,
                    cd4eb20830f842fc341411c47a3bd4b017cefb82: [
                      parseInt(values.companyBudget),
                    ],
                    af208478806ff4ca7b798c1da1f48fab09473285: values.interested,
                    person_id: person?.data?.id,
                    org_id: org?.data?.id,
                  })

                  if (deal.data?.id) {
                    setSelectedLabel([])
                    setFormSubmit(true)
                  }
                }
              }
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
              setFieldValue,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between gap-8"
              >
                <div className="w-full">
                  <div className="flex flex-col items-start justify-between w-full gap-4 mb-4 sm:flex-row">
                    <div className="flex flex-col w-full gap-1 sm:w-1/2">
                      <label className="caption-text text-gray_400 ">
                        Name *
                      </label>
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
                    <div className="flex flex-col w-full gap-1 sm:w-1/2">
                      <label className="caption-text text-gray_400 ">
                        Email *
                      </label>
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
                  <div className="flex flex-col items-start justify-between w-full gap-4 sm:flex-row ">
                    <div className="flex flex-col w-full gap-1 sm:w-1/2">
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
                    <div className="flex flex-col w-full gap-1 sm:w-1/2">
                      <label className="caption-text text-gray_400 ">
                        Campaign budget *
                      </label>

                      <select
                        name="companyBudget"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={
                          values.companyBudget?.length
                            ? values.companyBudget
                            : "Select"
                        }
                        className="input body-small-text select-style"
                      >
                        <option value="Select" disabled>
                          Select
                        </option>
                        {allDealField
                          ?.filter(
                            check => check.name === "Campaign Budget"
                          )?.[0]
                          ?.options?.map(data => {
                            return (
                              <option value={data?.id} key={data?.label}>
                                {data?.label}
                              </option>
                            )
                          })}
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
                  <div className="mb-3 flex items-center gap-2 ">
                    <p className=" caption-text text-gray_400 m-0">
                      What partnership are you interested in?
                    </p>
                    <div className="w-fit relative  object-contain cursor-pointer">
                      {toolTip && (
                        <div className="w-[260px] absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-125%] inline-block px-3 py-2 body-small-text text-black transition-opacity duration-300 bg-white_200 rounded-lg shadow-sm shadow-smShadow">
                          Disable or remove the ad blocker extension in your
                          browser settings to remove its effects.
                        </div>
                      )}
                      <img
                        onMouseEnter={() => setToolTip(true)}
                        onMouseLeave={() => setToolTip(false)}
                        src={Info}
                        alt="info"
                        className="w-5 h-5 object-contain cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="w-full flex gap-[6px] flex-wrap">
                    {allDealField
                      ?.filter(check => check.name === "Partnership Type")?.[0]
                      ?.options?.map(data => {
                        return (
                          <label
                            key={data.name}
                            onClick={() => {
                              if (selectedLabel?.includes(data.id)) {
                                setSelectedLabel(
                                  selectedLabel?.filter(id => id !== data.id)
                                )
                                setFieldValue(
                                  "interested",
                                  selectedLabel?.filter(id => id !== data.id)
                                )
                              } else {
                                setSelectedLabel([...selectedLabel, data.id])
                                setFieldValue("interested", [
                                  ...selectedLabel,
                                  data.id,
                                ])
                              }
                            }}
                            className={` ${
                              selectedLabel?.includes(data.id) && "active"
                            } labels body-small-text`}
                          >
                            {data.label}
                          </label>
                        )
                      })}
                  </div>
                  <p className="caption-text  text-[red] m-0">
                    {errors.interested &&
                      touched.interested &&
                      errors.interested}
                  </p>
                </div>
                <div className="flex flex-col w-full gap-1">
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
                {isSubmitting ? (
                  <button className="button bg-primary-700" type="button">
                    <img src={Loader} alt="loader" className="w-24 h-auto" />
                  </button>
                ) : (
                  <button
                    className="button bg-primary-700 w-full"
                    type="submit"
                  >
                    Submit
                  </button>
                )}
              </form>
            )}
          </Formik>
        </>
      )}
    </div>
  )
}

export default ContactUs
