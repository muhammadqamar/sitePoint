import React from 'react'
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
        text: "Sponsored Blog Posts"
    },
    {
        image: StarIcon,
        text: "Sponsored newsletters"
    },
    {
        image: DedicatedIcon,
        text: "Dedicated Email campaigns"
    },
    {
        image: WriteIcon,
        text: "Sponsored Content"
    },
    {
        image: BookIcon,
        text: "eBooks"
    },
    {
        image: AdsIcon,
        text: "Display Ads"
    },
]

const TargetCustomers = () => {
    return (
        <div className='max-w-full flex flex-row h-auto mt-10 mx-auto lg:w-100%'>
            <div>
                <div className="h2-text h-auto text-left lg:text-left mb-16">
                    <h1 className="h1-text text-black lg:w-[451px] mb-4">
                        Reach your target customers with flexible and effective partnership options
                    </h1>
                    <p className="w-[305px] sm:w-full lg:w-[305px] small-text text-gray-400 tracking-[-0.16px]">
                        Choose from a range of solutions to suit your budget and reach:
                    </p>
                </div>
                {data.map((item) => (
                    <div className="flex flex-row gap-4 text-black sm:flex-1">
                        <img src={item.image} alt="target Icon" className='mb-8' />
                        <div className="subheading-text">{item.text}</div>
                    </div>
                ))}
                <button className='bg-purple_200 button mt-20 sm:max-w-full'>Get in touch</button>
            </div>
            {/* <img src={MobileImage} alt="mobile image" /> */}
        </div>
    )
}

export default TargetCustomers