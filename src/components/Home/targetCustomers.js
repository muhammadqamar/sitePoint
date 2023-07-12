import React from "react"
import AdsIcon from "../../assets/images/icons/ads.svg"
import BookIcon from "../../assets/images/icons/book.svg"
import WriteIcon from "../../assets/images/icons/write.svg"
import StarIcon from "../../assets/images/icons/star.svg"
import SponsoredIcon from "../../assets/images/icons/rss.svg"
import DedicatedIcon from "../../assets/images/icons/local_post_office.svg"
import MobileImage from "../../assets/images/mobile-img.png"

const data = [
  {
    image: SponsoredIcon,
    text: "Sponsored Blog Posts",
  },
  {
    image: StarIcon,
    text: "Sponsored newsletters",
  },
  {
    image: DedicatedIcon,
    text: "Dedicated Email campaigns",
  },
  {
    image: WriteIcon,
    text: "Sponsored Content",
  },
  {
    image: BookIcon,
    text: "eBooks",
  },
  {
    image: AdsIcon,
    text: "Display Ads",
  },
]

const TargetCustomers = () => {
  return (
    <div className="max-w-full justify-between flex flex-col-reverse md:flex-row h-auto mt-10 mx-auto lg:w-full">
      <div>
        <div className=" h-auto text-left lg:text-left mb-16">
          <h1 className="h2-text text-black w-full md:w-[347px] lg:w-[488px] mb-4">
            Reach your target customers with flexible and effective partnership
            options
          </h1>
          <p className=" w-full md:w-[259px] small-text text-gray-400 tracking-[-0.16px]">
            Choose from a range of solutions to suit your budget and reach:
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col flex-wrap  md:gap-x-5 gap-y-8 lg:gap-8">
          {data.map(item => (
            <div className="w-auto md:w-[194px] lg:w-auto flex flex-row gap-4 text-black">
              <img src={item.image} alt="target Icon" className="" />
              <p className="subheading-text m-0">{item.text}</p>
            </div>
          ))}
        </div>
        <button className="bg-purple_200 button mt-20 w-full sm:w-fit">
          Get in touch
        </button>
      </div>
      <img
        src={MobileImage}
        alt="mobile image"
        className="w-auto sm:w-[318px] lg:w-[532px] object-contain h-[480px] sm:h-auto"
      />
    </div>
  )
}

export default TargetCustomers
