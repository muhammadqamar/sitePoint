import React from "react"

import Slider from "react-slick"
import logo1 from "../../assets/images/logo/microsoft.svg"
import logo2 from "../../assets/images/logo/shopify.svg"
import logo3 from "../../assets/images/logo/stanford.svg"
import logo4 from "../../assets/images/logo/99designs.svg"
import logo5 from "../../assets/images/logo/microsoft.svg"
import logo6 from "../../assets/images/logo/shopify.svg"
import logo7 from "../../assets/images/logo/stanford.svg"
import logo8 from "../../assets/images/logo/99designs.svg"

const Index = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  }

  const logos = [
    {
      logo: logo1,
    },
    {
      logo: logo2,
    },
    {
      logo: logo3,
    },
    {
      logo: logo4,
    },
    {
      logo: logo5,
    },
    {
      logo: logo6,
    },
    {
      logo: logo7,
    },
    {
      logo: logo8,
    },
    {
      logo: logo1,
    },
  ]

  return (
    <>
      <Slider {...settings}>
        {logos.map((item, i) => (
          <img
            key={i}
            className="w-[114px] h-auto"
            src={item.logo}
            alt="logo"
          />
        ))}
      </Slider>
    </>
  )
}

export default Index
