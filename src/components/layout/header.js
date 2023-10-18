import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [location, setLocation] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location.pathname)
    }
  }, [])

  return location === "/" ? (
    <header className="w-full absolute top-0 left-0 z-[5] bg-black px-[30px] pt-[89px] sm:pt-6">
      <div className="max-w-[1084px] mx-auto">
        <Link to="https://sitepoint.com" target="_blank">
          <StaticImage
            src="../../assets/images/sitePoint-white.svg"
            width={154}
            height={32}
            alt="A kitten"
          />
        </Link>
      </div>
    </header>
  ) : location === "/home-v4/" ? (
    <header className="w-full absolute top-0 left-0 z-[5] px-[20px] md:px-[clamp(20px,12vw,122px)]">
      <div className="max-w-[1180px] mx-auto ">
        <div className="w-full py-4 justify-between gap-2 xsm:gap-0 items-center inline-flex">
          <div className="">
            <Link to="https://sitepoint.com" target="_blank">
              <StaticImage
                src="../../assets/images/sitePoint-black.svg"
                width={154}
                height={32}
                alt="A kitten"
              />
            </Link>
          </div>
          <div className="justify-center items-center gap-[6px] hidden lg:flex ">
            <Link
              to="https://www.sitepoint.com/premium/library/"
              target="_blank"
              className="text-center text-gray-900 small-text !font-semibold py-2 px-3py-2 px-3"
            >
              Library
            </Link>
            <Link
              to="https://www.sitepoint.com/community/"
              target="_blank"
              className="text-center text-gray-900 small-text !font-semibold py-2 px-3"
            >
              Forum
            </Link>
            <Link
              to="https://www.sitepoint.com/community/"
              target="_blank"
              className="text-center text-gray-900 small-text !font-semibold py-2 px-3"
            >
              Sitepoint Suite
            </Link>
            <Link
              to="https://www.sitepoint.com/community/"
              target="_blank"
              className="text-center text-gray-900 small-text !font-semibold py-2 px-3"
            >
              Pricing
            </Link>
            <Link
              to="https://www.sitepoint.com/community/"
              target="_blank"
              className="text-center text-gray-900 small-text !font-semibold py-2 px-3"
            >
              Our Story
            </Link>
            <Link
              to="https://www.sitepoint.com/blog/"
              target="_blank"
              className="text-center text-gray-900 small-text !font-semibold py-2 px-3"
            >
              Blog
            </Link>

            {/* <Link
                to="https://www.sitepoint.com/premium/sign-in/"
                target="_blank"
                className="text-center text-gray-900 small-text !font-semibold "
              >
                Login
              </Link> */}
          </div>

          <div className="justify-center items-center gap-6 flex">
            <Link to="" target="_blank" className="flex items-center">
              <StaticImage
                src="../../assets/images/icons/black-search.svg"
                width={24}
                height={24}
                alt="Search"
              />
            </Link>
            <Link to="" target="_blank" className="flex items-center">
              <StaticImage
                src="../../assets/images/icons/black-user.svg"
                width={24}
                height={24}
                alt="User"
              />
            </Link>
            <Link
              to="https://www.sitepoint.com/premium/pricing/?ref_source=sitepoint&ref_medium=topnav"
              target="_blank"
              className="buttontrial bg-primary-700 w-full xs:whitespace-pre xsm:whitespace-normal"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </header>
  ) : (
    <header className="w-full absolute top-0 left-0 z-[5] bg-black px-[20px] md:px-[clamp(20px,12vw,122px)]">
      <div className="max-w-[1084px] mx-auto ">
        <div className="w-full py-4 justify-between gap-2 xsm:gap-0 items-center inline-flex">
          <div className="">
            <Link to="https://sitepoint.com" target="_blank">
              <StaticImage
                src="../../assets/images/sitePoint-white.svg"
                width={154}
                height={32}
                alt="A kitten"
              />
            </Link>
          </div>
          <div className="justify-center items-center gap-8 flex">
            <div className="justify-center items-center gap-8 hidden lg:flex ">
              <Link
                to="https://www.sitepoint.com/blog/"
                target="_blank"
                className="text-center text-white small-text !font-semibold "
              >
                Blog
              </Link>
              <Link
                to="https://www.sitepoint.com/community/"
                target="_blank"
                className="text-center text-white small-text !font-semibold "
              >
                Forum
              </Link>
              <Link
                to="https://www.sitepoint.com/premium/library/"
                target="_blank"
                className="text-center text-white small-text !font-semibold "
              >
                Library
              </Link>
              <Link
                to="https://www.sitepoint.com/premium/sign-in/"
                target="_blank"
                className="text-center text-white small-text !font-semibold "
              >
                Login
              </Link>
            </div>

            <Link
              to="https://www.sitepoint.com/premium/pricing/?ref_source=sitepoint&ref_medium=topnav"
              target="_blank"
              className="button bg-primary-700 w-full xs:whitespace-pre xsm:whitespace-normal"
            >
              Join Premium
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
