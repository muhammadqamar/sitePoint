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
    <div className="flex-grow xl:flex-grow-0  w-full sm:w-1/3 lg:w-[30%] xl:w-[32%]  flex-col items-start justify-between gap-11  min-h-[176px]  p-5 bg-white relative before:content-[''] before:absolute before:right-[-10px] before:top-[-10px] before:w-[1px] before:h-[111%] before:bg-[#ECECEC] after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-[106%] after:h-[1px] after:bg-[#ECECEC]">
      {Icon && (
        <div className="flex items-center mb-11">
          {TestLogo.map(item => (
            <img className="ml-[-15px]" src={item.logo} alt="logo" />
          ))}
        </div>
      )}
      <div className="flex flex-col items-start gap-1 ">
        <h3 className="small-text !font-semibold ">{subheading}</h3>
        <p className="body-small-text">{text}</p>
      </div>
    </div>
  )
}

export default CourseCard
