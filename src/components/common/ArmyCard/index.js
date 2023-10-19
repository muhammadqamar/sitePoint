import React from "react"
import CommentIcon from "../../../assets/images/icons/comit.svg"

const Index = props => {
  const { heading, profileLogo, name, date, comment } = props
  return (
    <div className="w-auto h-[233px] p-4 flex items-start justify-between flex-col  gap-3 rounded-lg border border-solid border-gray-201">
      <div className="">
        <h4 className="small-text !font-bold mb-[17px] text-gray-900">
          {heading}
        </h4>

        <div className="flex flex-wrap items-center gap-2">
          <img
            src={profileLogo}
            alt="Profile_Logo"
            className="rounded-full flex items-center justify-center w-[24px] h-[24px]"
          />
          <span className="body-small-text tracking-normal text-gray-900 m-0">
            {name}
          </span>
          <span className="body-small-text tracking-normal text-gray-701 m-0">
            {date}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img src={CommentIcon} alt="commit" />
        <p className="body-small-text tracking-normal text-gray-900 m-0">
          {comment}
        </p>
      </div>
    </div>
  )
}

export default Index
