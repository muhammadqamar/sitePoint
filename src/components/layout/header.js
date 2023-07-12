import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className=" w-full absolute top-0 left-0 z-[5] bg-black px-[30px] pt-[89px] sm:pt-6">
    <div className="max-w-[1084px] mx-auto">
      <Link to="/">
        <StaticImage
          src="../../assets/images/sitePoint-white.svg"
          width={154}
          height={32}
          alt="A kitten"
        />
      </Link>
    </div>
  </header>
)

export default Header
