import React, { useEffect, useState } from "react"
import { Formik } from "formik"

import {
  getAllFields,
  createOrganization,
  createPerson,
  createDeal,
} from "../../services/piperdrive"
import ThankYouPage from "../Home/thankYou"
import Loader from "../../assets/images/loading-3.gif"

const dataOption = [
  {
    name: "entity",
    options: [
      {
        id: 1,
        label: "Business",
      },
      {
        id: 2,
        label: "Educational Institution",
      },
      {
        id: 3,
        label: "Other",
      },
    ],
  },
  {
    name: "licenses",
    options: [
      {
        id: 11,
        label: "3-10",
      },
      {
        id: 21,
        label: "11-50",
      },
      {
        id: 13,
        label: "51+",
      },
    ],
  },
]

const KnowledgeSection = () => {
  const [selectedLabel, setSelectedLabel] = useState([])
  const [selectedLicensesLabel, setSelectedLicensesLabel] = useState([])
  const [allDealField, setAllDealField] = useState([])
  const [formSubmit, setFormSubmit] = useState(false)

  console.log("allDealField", allDealField)

  useEffect(() => {
    ;(async () => {
      const result = await getAllFields()
      if (result?.data) {
        setAllDealField(result?.data)
      }
    })()
  }, [])

  return (
    <div className="w-full flex items-center justify-between gap-9 lg:gap-5 xs:pb-14 xsm:pb-16 md:pb-[135px] flex-wrap lg:flex-nowrap">
      <div className="max-w-[517px]">
        <h2 className="h2-text md:!leading-[44px] ">
          Reach out to us and equip your team with knowledge
        </h2>
      </div>
      <div className="w-full md:w-[440px] min-h-[648px] flex-shrink-0 p-8 bg-white rounded-[25px] shadow-lgShadow flex-col justify-start items-center gap-8 inline-flex">
        {formSubmit ? (
          <ThankYouPage setFormSubmit={setFormSubmit} />
        ) : (
          <Formik
            initialValues={{
              name: "",
              email: "",
              otherCompany: "",
              typeOfEntity: selectedLabel,
              name_of_business: "",
              licensesInterested: selectedLicensesLabel,
            }}
            // enableReinitialize
            validate={values => {
              const errors = {}
              if (!values.name) {
                errors.name = "Required"
              }

              if (values.typeOfEntity?.length === 0) {
                errors.typeOfEntity = "Required"
              }
              if (values.licensesInterested?.length === 0) {
                errors.licensesInterested = "Required"
              }
              if (!values.otherCompany) {
                errors.otherCompany = "Required"
              }
              if (!values.name_of_business) {
                errors.name_of_business = "Required"
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
                name: values.name_of_business,
              })

              if (org?.data?.id) {
                const person = await createPerson({
                  name: values.name,
                  email: values.email,
                  org_id: org?.data?.id,
                })
                if (person?.data?.id) {
                  const deal = await createDeal({
                    title: values.name_of_business + " deal",
                    "cadbaec326f420e0c168e263626acb5cd1e28e9e":
                      values.otherCompany,
                    "9e4cd248a2088bd2a0e72054ea8e8028d87287f6":
                      values.typeOfEntity,
                    e511dbc5e324d1ee22786d507a7171b44892ee61:
                      values.licensesInterested,
                    person_id: person?.data?.id,
                    org_id: org?.data?.id,
                  })
                  if (deal.data?.id) {
                    setSelectedLabel([])
                    setSelectedLicensesLabel([])
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
                className="w-full flex flex-col justify-between gap-8"
              >
                <div className="flex flex-col w-full gap-1 ">
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
                <div className="flex flex-col w-full gap-1 ">
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

                <div className="w-full">
                  <div className="mb-3">
                    <p className=" caption-text text-gray_400 m-0">
                      What type of entity are you? *
                    </p>
                  </div>
                  <div className="w-full flex gap-[6px] flex-wrap">
                    {allDealField
                      ?.filter(check => check.name === "Entity Type")?.[0]
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
                                  "typeOfEntity",
                                  selectedLabel?.filter(id => id !== data.id)
                                )
                              } else {
                                setSelectedLabel([...selectedLabel, data.id])
                                setFieldValue("typeOfEntity", [
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
                    {errors.typeOfEntity &&
                      touched.typeOfEntity &&
                      errors.typeOfEntity}
                  </p>
                </div>

                <div className="flex flex-col w-full gap-1 ">
                  <label className="caption-text text-gray_400 ">
                    Name of business/institution *
                  </label>
                  <input
                    className="input body-small-text "
                    type="text"
                    name="name_of_business"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name_of_business}
                  />
                  <p className="caption-text text-[red] m-0">
                    {errors.name_of_business &&
                      touched.name_of_business &&
                      errors.name_of_business}
                  </p>
                </div>

                <div className="w-full">
                  <div className="mb-3">
                    <p className=" caption-text text-gray_400 m-0">
                      How many licenses are you interested in? *
                    </p>
                  </div>
                  <div className="w-full flex gap-[6px] flex-wrap">
                    {allDealField
                      ?.filter(
                        check => check.name === "Number of Licenses"
                      )?.[0]
                      ?.options?.map(data => {
                        return (
                          <label
                            key={data.name}
                            onClick={() => {
                              if (selectedLicensesLabel?.includes(data.id)) {
                                setSelectedLicensesLabel(
                                  selectedLicensesLabel?.filter(
                                    id => id !== data.id
                                  )
                                )
                                setFieldValue(
                                  "licensesInterested",
                                  selectedLicensesLabel?.filter(
                                    id => id !== data.id
                                  )
                                )
                              } else {
                                setSelectedLicensesLabel([
                                  ...selectedLicensesLabel,
                                  data.id,
                                ])
                                setFieldValue("licensesInterested", [
                                  ...selectedLicensesLabel,
                                  data.id,
                                ])
                              }
                            }}
                            className={` ${
                              selectedLicensesLabel?.includes(data.id) &&
                              "active"
                            } labels body-small-text`}
                          >
                            {data.label}
                          </label>
                        )
                      })}
                  </div>
                  <p className="caption-text  text-[red] m-0">
                    {errors.licensesInterested &&
                      touched.licensesInterested &&
                      errors.licensesInterested}
                  </p>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label className="caption-text text-gray_400 ">
                    Anything else we should know? *
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
        )}
      </div>
    </div>
  )
}

export default KnowledgeSection
