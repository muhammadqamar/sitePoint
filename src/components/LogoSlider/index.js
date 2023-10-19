import React from "react"

import Slider from "react-slick"
import logo1 from "../../assets/images/logo/microsoft.svg"

const Index = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const logos = [
    {
      logo: logo1,
    },
    {
      logo: logo1,
    },
    {
      logo: logo1,
    },
    {
      logo: logo1,
    },
    {
      logo: logo1,
    },
    {
      logo: logo1,
    },
    {
      logo: logo1,
    },
    {
      logo: logo1,
    },
    {
      logo: logo1,
    },
  ]

  return (
    <>
      <Slider {...settings}>
        {logos.map((item, i) => (
          <div key={i} className="flex items-center">
            <img src={item.logo} alt="logo" />
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Index
