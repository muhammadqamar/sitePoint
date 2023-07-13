import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Trusted = () => {
  return (
    <div className="">
      <h3
        // data-aos="fade-right"
        className="h3-text mb-10 text-center lg:text-left"
      >
        Trusted by
      </h3>
      <div
        // data-aos="fade-right"
        className="w-full sm:w-[532px] flex items-start content-start sm:content-start justify-center sm:justify-start flex-wrap  gap-x-1  gap-y-[19px]  sm:gap-x-5 sm:gap-y-6 mx-auto lg:mx-0"
      >
        <StaticImage
          src="../../assets/images/logo/atlassian.svg"
          width={164}
          height={48}
          alt="Atlassian"
        />

        <StaticImage
          src="../../assets/images/logo/hellosign.svg"
          width={164}
          height={48}
          alt="Hellosign"
        />
        <StaticImage
          src="../../assets/images/logo/monday.svg"
          width={164}
          height={48}
          alt="Monday"
        />
        <StaticImage
          src="../../assets/images/logo/pagerDuty.svg"
          width={164}
          height={48}
          alt="PagerDuty"
        />
        <StaticImage
          src="../../assets/images/logo/abstract.svg"
          width={164}
          height={48}
          alt="Absolute"
        />
        <StaticImage
          src="../../assets/images/logo/cloudapp.svg"
          width={164}
          height={48}
          alt="Cloudapp"
        />
      </div>
    </div>
  )
}

export default Trusted
