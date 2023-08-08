import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
// import AOS from "aos"
import "aos/dist/aos.css"
import SitePoint from "../../assets/images/sitePointLogo.svg"
import XIcon from "../../assets/images/logo/twitter.svg"
import RssIcon from "../../assets/images/logo/rss-round.svg"
import Facebook from "../../assets/images/logo/facebook.svg"
const Footer = () => {
  const [location, setLocation] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location.pathname)
    }
  }, [])
  // useEffect(() => {

  //    AOS.init()
  // }, [])
  return location === "/" ? (
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
  ) : (
    <footer className=" w-full px-[20px] md:px-[clamp(20px,12vw,122px)] py-[120px] bg-black">
      <div className="max-w-[1084px] mx-auto ">
        <div className="w-full  flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="justify-start items-start gap-5 inline-flex">
            <div className="w-64 flex-col justify-center items-start gap-8 inline-flex">
              <h4 className="subheading-text text-center !text-white ">
                Stuff we do
              </h4>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px] "
              >
                Premium
              </Link>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                Newsletters
              </Link>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                Forums
              </Link>
            </div>
            <div className="w-64 flex-col justify-center items-start gap-8 inline-flex">
              <h4 className="subheading-text text-center !text-white">About</h4>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                Our story
              </Link>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                Terms of use
              </Link>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                Privacy policy
              </Link>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                Corporate memberships
              </Link>
            </div>
            <div className="w-64 flex-col justify-center items-start gap-8 inline-flex">
              <h4 className="subheading-text text-center !text-white">
                Contact
              </h4>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                Contact us
              </Link>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                FAQ
              </Link>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                Publish your book with us
              </Link>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                Write an article with us
              </Link>
              <Link
                to="/"
                className="text-center text-gray_200 small-text tracking-[-0.16px]"
              >
                Advertise
              </Link>
            </div>
            <div className="w-64 flex-col justify-start items-start gap-8 inline-flex">
              <h4 className="subheading-text text-center !text-white">
                Connect
              </h4>
              <div className="justify-start items-start gap-2 inline-flex">
                <a href="#" className="w-8 h-8 relative rounded-full">
                  <img
                    src={XIcon}
                    alt="x-icon"
                    className="w-auto h-auto object-contain"
                  />
                </a>
                <a href="#" className="w-8 h-8 relative rounded-full">
                  <img
                    src={RssIcon}
                    alt="x-icon"
                    className="w-auto h-auto object-contain"
                  />
                </a>
                <a href="#" className="w-8 h-8 relative rounded-full">
                  <img
                    src={Facebook}
                    alt="x-icon"
                    className="w-auto h-auto object-contain"
                  />
                </a>
              </div>
              <div className="text-gray_200 small-text tracking-[-0.16px]">
                © 2000 – 2023 SitePoint Pty. Ltd.
              </div>
              <div className="self-stretch">
                <span className="text-gray_200 body-small-text">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
