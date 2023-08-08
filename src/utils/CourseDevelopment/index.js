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
  const { heading, className, Icon, subheading, text } = props
  return (
    <div className="max-w-[1084px] mx-auto py-[50px] md:py-[clamp(20px,12vw,122px)] lg:py-[128px]">
      <h2 className={`h2-text pb-[56px]  ${className}`}>{heading}</h2>
      <div className="flex items-center flex-wrap gap-5 border-b border-[#ECECEC]">
        <div className=" max-w-[348px] w-full flex items-center gap-5 ">
          <div className="flex flex-col items-start justify-between gap-2 w-full min-h-[176px] bg-white rounded-[20px] p-5 ">
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
        </div>
      </div>
    </div>
  )
}

export default CourseCard
