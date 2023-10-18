import React from "react"

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
const Index = () => {
  return (
    <>
      {tabs.map((item, i) => (
        <div key={{ i }} className="py-2 px-3">
          <p className="text-base whitespace-nowrap font-bold text-center text-gray-900 m-0">
            {item.tab}
          </p>
        </div>
      ))}
    </>
  )
}

export default Index
