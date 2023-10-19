import React from "react"
import { Writing } from "../../../dummyData"

const tabs = [
  {
    tab: "AI",
  },
  {
    tab: "Computing",
  },
  {
    tab: "Design & UX",
  },
  {
    tab: "Entrepreneur",
  },
  {
    tab: "HTML & CSS",
  },
  {
    tab: "JavaScript",
  },
  {
    tab: "Mobile",
  },
  {
    tab: "PHP",
  },
  {
    tab: "Programming",
  },
  {
    tab: "Python",
  },
  {
    tab: "Web",
  },
  {
    tab: "WordPress",
  },
]
const Index = props => {
  const { cards } = props
  return (
    <>
      {!cards ? (
        <>
          {tabs.map((item, i) => (
            <div key={{ i }} className="py-2 px-3">
              <p className="text-base whitespace-nowrap font-bold text-center text-gray-900 m-0">
                {item.tab}
              </p>
            </div>
          ))}
        </>
      ) : (
        <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5">
          {Writing.map((item, i) => (
            <div
              key={i}
              className="w-auto h-auto flex flex-col items-center gap-4 rounded-lg"
            >
              <img
                src={item.image}
                alt="A dinosaur"
                className="rounded-lg w-full flex items-center justify-center sm:h-[320px] h-full"
              />
              <div className="w-full  flex gap-2 items-center">
                <div className="flex items-center gap-1">
                  <img
                    key={i}
                    src={item.logo}
                    alt="Course_Logo"
                    className="rounded-full w-6 h-6"
                  />
                </div>
                <span className="body-small-text tracking-normal text-gray-900 m-0">
                  {item.name}
                </span>
                <span className="body-small-text tracking-normal text-gray-701 m-0">
                  {item.date}
                </span>
              </div>
              <h4 className="w-full   small-text !font-bold  text-gray-900 m-0">
                {item.subheading}
              </h4>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Index
