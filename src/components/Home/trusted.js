import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Trusted = () => {
  return (
    <div className="">
      <h3 className="h3-text mb-10 text-center lg:text-left">Trusted by</h3>
      <div className="w-full sm:w-[532px] flex items-start content-start flex-wrap  gap-x-5 gap-y-6 mx-auto lg:mx-0">
        <StaticImage
          src="../../assets/images/logo/atlassian.png"
          width={164}
          height={48}
          alt="Atlassian"
        />

        <StaticImage
          src="../../assets/images/logo/hellosign.png"
          width={164}
          height={48}
          alt="Hellosign"
        />
        <StaticImage
          src="../../assets/images/logo/monday.png"
          width={164}
          height={48}
          alt="Monday"
        />
        <StaticImage
          src="../../assets/images/logo/pagerDuty.png"
          width={164}
          height={48}
          alt="PagerDuty"
        />
        <StaticImage
          src="../../assets/images/logo/abstract.png"
          width={164}
          height={48}
          alt="Absolute"
        />
        <StaticImage
          src="../../assets/images/logo/cloudapp.png"
          width={164}
          height={48}
          alt="Cloudapp"
        />
      </div>
    </div>
  )
}

export default Trusted
