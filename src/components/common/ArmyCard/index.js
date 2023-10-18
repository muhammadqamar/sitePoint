import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ComitIcon from "../../../assets/images/icons/comit.svg"

const Index = () => {
  return (
    <div className="w-auto h-[233px] p-4 flex items-start justify-between flex-col  gap-3 rounded-lg border border-solid border-gray-201">
      <div className="">
        <h4 className="small-text !font-bold mb-[17px] text-gray-900">
          The usage of Artificial Intelligence in the sitepoint community
        </h4>

        <div className="flex items-center gap-2">
          <StaticImage
            src="../../../assets/images/logo/javaScript.svg"
            alt="A dinosaur"
            placeholder="blurred"
            layout="fixed"
            width={24}
            height={24}
            className="rounded-full flex items-center justify-center"
          />
          <span className="body-small-text tracking-normal text-gray-900 m-0">
            DaveMaxxwell
          </span>
          <span className="body-small-text tracking-normal text-gray-701 m-0">
            Mar 8
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img src={ComitIcon} alt="commit" />
        <p className="body-small-text tracking-normal text-gray-900 m-0">
          218 courses
        </p>
      </div>
    </div>
  )
}

export default Index
