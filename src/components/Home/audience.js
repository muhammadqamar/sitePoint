import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Mail from "../../assets/images/icons/mail.svg"
import Eye from "../../assets/images/icons/eye.svg"
import Loader from "../../assets/images/icons/loader.svg"
import Flag from "../../assets/images/icons/flag.svg"
import Group from "../../assets/images/icons/group.svg"

const Cards = [
  {
    image: Mail,
    title: "325,000",
    text: "Email subscribers",
  },
  {
    image: Eye,
    title: "1 Million",
    text: "Pageviews per month",
  },
  {
    image: Loader,
    title: "82% influence ",
    text: "Tech purchasing decisions",
  },
  {
    image: Flag,
    title: "U.S.A",
    text: "Highest traffic source",
  },
  {
    image: Group,
    title: "Male, 25-34yrs",
    text: "Highest demographic",
  },
]

const Audience = () => {
  // useEffect(() => {
  //   AOS.init()
  // }, [])
  return (
    <div className="w-full px-[20px] md:px-[clamp(20px,12vw,122px)] lg:px-8 ">
      <div className="max-w-[1084px] mx-auto">
        <h2
          // data-aos="zoom-in-up"
          className="text-center mb-16 max-sm:mb-8 h2-text"
        >
          Our Audience
        </h2>
        <div className="flex flex-wrap m-auto gap-x-5 gap-y-6 justify-center">
          {Cards.map((item, index) => {
            return (
              <div
                key={index}
                // data-aos="zoom-in-up"
                className="p-5 w-full md:w-[348px]  rounded-[20px]  bg-white"
              >
                <div className="bg-black w-11 h-11 rounded-[50px] flex mb-5">
                  <img
                    src={item.image}
                    alt="Inbox's icon"
                    className=" bg-black m-auto"
                  />
                </div>
                <h3 className="h3-text">{item.title}</h3>
                <h6 className="small-text">{item.text}</h6>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Audience
