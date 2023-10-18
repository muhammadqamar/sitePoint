import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Index = () => {
  return (
    <div className="w-auto h-auto px-4 py-5 flex items-center gap-3 rounded-lg border border-solid border-gray-201">
      <StaticImage
        src="../../../assets/images/logo/javaScript.svg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={36}
        height={36}
        className="rounded-full flex items-center justify-center"
      />
      <div className="">
        <h4 className="small-text !font-bold m-0 text-gray-900">JavaScript</h4>
        <p className="body-small-text tracking-normal text-gray-701 m-0">
          218 courses
        </p>
      </div>
    </div>
  )
}

export default Index
