import React, { useEffect } from "react"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"
import SitePoint from "../../assets/images/sitePointLogo.svg"
const Footer = () => {
  // useEffect(() => {
  //   AOS.init()
  // }, [])
  return (
    <footer className="m-auto flex flex-col items-center  pb-[124px]">
      <div className="h-[1px] bg-gray_500 mb-16 w-[506px] max-sm:w-full" />
      <div
        // data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col items-center gap-8"
      >
        <Link to="https://sitepoint.com" target="_blank">
          <img src={SitePoint} alt="SitePoint's Logo" className="gap-8" />
        </Link>
        <span>
          © {new Date().getFullYear()} Sitepoint. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
