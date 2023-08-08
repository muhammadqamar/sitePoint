import React, { useEffect, useState } from "react"
import { Formik } from "formik"
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

  useEffect(() => {
    setAllDealField(dataOption)
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
              console.log(values)
              // const org = await createOrganization({
              //   name: values.company,
              // })
              // if (org?.data?.id) {
              //   const person = await createPerson({
              //     name: values.name,
              //     email: values.email,
              //     org_id: org?.data?.id,
              //   })
              //   if (person?.data?.id) {
              //     const deal = await createDeal({
              //       title: values.company + " deal",
              //       "413baf5a43f00f7e8a8bcbf7ba9d99add75a6e4b":
              //         values.otherCompany,
              //       cd4eb20830f842fc341411c47a3bd4b017cefb82: [
              //         parseInt(values.companyBudget),
              //       ],
              //       af208478806ff4ca7b798c1da1f48fab09473285: values.interested,
              //       person_id: person?.data?.id,
              //       org_id: org?.data?.id,
              //     })
              //     if (deal.data?.id) {
              //       setSelectedLabel([])
              //       setFormSubmit(true)
              //     }
              //   }
              // }
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
                      ?.filter(check => check.name === "entity")?.[0]
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
                <div className="w-full">
                  <div className="mb-3">
                    <p className=" caption-text text-gray_400 m-0">
                      How many licenses are you interested in? *
                    </p>
                  </div>
                  <div className="w-full flex gap-[6px] flex-wrap">
                    {allDealField
                      ?.filter(check => check.name === "licenses")?.[0]
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
