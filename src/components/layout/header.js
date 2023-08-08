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
                to="/"
                className="text-center text-white small-text !font-semibold "
              >
                Blog
              </Link>
              <Link
                to="/"
                className="text-center text-white small-text !font-semibold "
              >
                Forum
              </Link>
              <Link
                to="/"
                className="text-center text-white small-text !font-semibold "
              >
                Library
              </Link>
              <Link
                t0="/"
                className="text-center text-white small-text !font-semibold "
              >
                Login
              </Link>
            </div>

            <button
              className="button bg-primary-700 w-full xs:whitespace-pre xsm:whitespace-normal"
              type="button"
            >
              Join Premium
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
