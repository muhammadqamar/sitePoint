import React from "react"
import Logo1 from "../../assets/images/logo/js.svg"
import Logo2 from "../../assets/images/logo/react.svg"
import Logo3 from "../../assets/images/logo/jsColor.svg"

const TestLogo = [
  {
    logo: Logo1,
  },
  {
    logo: Logo2,
  },
  {
    logo: Logo3,
  },
]

const CourseCard = props => {
  const { Icon, subheading, text } = props
  return (
    <div className="max-w-[348px] flex flex-col items-start justify-between gap-2 w-full min-h-[176px] bg-white rounded-[20px] p-5 ">
      {Icon && (
        <div className="flex items-center">
          {TestLogo.map(item => (
            <img className="ml-[-15px]" src={item.logo} alt="logo" />
          ))}
        </div>
      )}
      <div className="flex flex-col items-start gap-1">
        <h3 className="small-text !font-semibold ">{subheading}</h3>
        <p className="body-small-text">{text}</p>
      </div>
    </div>
  )
}

export default CourseCard
