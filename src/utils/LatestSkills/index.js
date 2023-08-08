import React from "react"
import Logo from "../../assets/images/logo/play-circle.svg"
import Star from "../../assets/images/logo/star.svg"

const SkillCard = props => {
  const { heading, className, text, timer, rating } = props
  return (
    <div className="max-w-[1084px] mx-auto py-[50px] md:py-[clamp(20px,12vw,122px)] lg:py-[128px]">
      <h2 className={`h2-text pb-[56px] ${className}`}>{heading}</h2>
      <div className="flex items-center flex-wrap gap-5">
        <div className="max-w-[256px] w-full min-h-[332px] flex flex-col justify-between p-4 items-start bg-white border-1 border-[#7232f800] rounded-2xl shadow-mdShadow bg-no-repeat bg-center bg-[url('../../assets/images/bg-skill-img.png')] relative before:absolute before:w-full before:min-h-[145px] before:bottom-0 before:right-0 before:left-0 before:bg-cardGradient before:rounded-[12px]">
          <div className="flex items-center gap-1 bg-[#00000091] rounded-full py-[2px] pr-[6px] pl-[2px]">
            <img src={Logo} alt="Icon" />
            <p className="body-small-text text-white">{timer}</p>
          </div>
          <div className="pr-4 pt-4 flex items-end gap-4 relative z-10">
            <h4 className="small-text !font-semibold text-white max-w-[155px] w-full">
              {text}
            </h4>
            <div className="flex items-center gap-1">
              <p className="small-text !font-semibold text-white">{rating}</p>
              <img src={Star} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
