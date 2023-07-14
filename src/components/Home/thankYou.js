import React from "react"

import Check from "../../assets/images/icons/check.svg"

const ThankYouPage = ({ setFormSubmit }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[inherit]">
      <img src={Check} alt="check-icon" />
      <h3 className="text-black mt-6 text-center h3-text">
        Thanks for your submission!
      </h3>
      <p className="text-gray_400 text-center body-small-text">
        We will get back to you as soon as possible.
      </p>
      <button
        onClick={() => setFormSubmit(false)}
        className="flex items-center justify-center py-2 px-6 border font-semibold text-gray_400 border-gray_600 bg-white rounded-[54px] h-[56px] text-base mt-8"
      >
        Send another form
      </button>
    </div>
  )
}

export default ThankYouPage
