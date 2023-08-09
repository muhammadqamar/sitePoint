import React from "react"
import Logo from "../../assets/images/logo/play-circle.svg"
import Star from "../../assets/images/logo/star.svg"

const SkillCard = props => {
  const { text, timer, rating, bg } = props
  return (
    <div
      className={`max-w-full md:max-w-[256px] cursor-pointer w-full min-h-[332px] flex flex-col justify-between p-4 items-start bg-white border-1 border-[#7232f800] rounded-2xl shadow-mdShadow bg-no-repeat bg-[length:cover] bg-center relative before:absolute before:w-full before:min-h-[145px] before:bottom-0 before:right-0 before:left-0 before:bg-cardGradient before:rounded-[12px] ${bg}`}
    >
      <div className="flex items-center gap-1 bg-[#00000091] rounded-full py-[2px] pr-[6px] pl-[2px]">
        <img src={Logo} alt="Icon" />
        <p className="body-small-text text-white">{timer}</p>
      </div>
      <div className="pr-4 w-full md:w-auto pt-4 flex items-end justify-between md:justify-normal gap-4 relative z-10">
        <h4 className="small-text !font-semibold text-white max-w-[155px] w-full">
          {text}
        </h4>
        <div className="flex items-center gap-1">
          <p className="small-text !font-semibold text-white">{rating}</p>
          <img src={Star} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default SkillCard
