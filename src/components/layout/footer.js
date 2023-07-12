import React from "react"
import SitePoint from "../../assets/images/sitePointLogo.svg"
const Footer = () => {
  return (
    <footer className="m-auto flex flex-col items-center pt-16 pb-[124px]">
      <div className="h-[1px] bg-gray_500 mb-16 w-[506px] max-sm:w-full" />
      <div className="flex flex-col items-center gap-8">
        <img src={SitePoint} alt="SitePoint's Logo" className="gap-8" />
        <span>
          © {new Date().getFullYear()} Sitepoint. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
