import React from "react"

const Index = props => {
  const {
    image,
    height,
    logos,
    logo,
    logo1,
    logo2,
    logo3,
    name,
    step,
    date,
    subheading,
  } = props
  return (
    <div className="w-auto h-auto flex flex-col items-center gap-4 rounded-lg">
      <img
        src={image}
        alt="A dinosaur"
        // width={280}
        // height={height || 320}
        className="rounded-lg w-full flex items-center justify-center sm:h-[320px] h-full"
      />
      <div className="w-full  flex gap-2 items-center">
        <div className="flex items-center gap-1">
          {logos ? (
            <>
              <img
                src={logo1}
                alt="Course_Logo"
                className="rounded-full w-6 h-6"
              />
              <img
                src={logo2}
                alt="Course_Logo"
                className="rounded-full w-6 h-6"
              />
              <img
                src={logo3}
                alt="Course_Logo"
                className="rounded-full w-6 h-6"
              />
            </>
          ) : (
            <img
              src={logo}
              alt="Course_Logo"
              className="rounded-full w-6 h-6"
            />
          )}
        </div>
        <span className="body-small-text tracking-normal text-gray-900 m-0">
          {name}
        </span>
        <span className="body-small-text tracking-normal text-gray-701 m-0">
          {date ? date : step}
        </span>
      </div>
      <h4 className="w-full   small-text !font-bold  text-gray-900 m-0">
        {subheading}
      </h4>
    </div>
  )
}

export default Index
