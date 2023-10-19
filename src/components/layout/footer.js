import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import AOS from "aos"
import "aos/dist/aos.css"
import SitePoint from "../../assets/images/sitePointLogo.svg"
import XIcon from "../../assets/images/logo/twitter.svg"
import RssIcon from "../../assets/images/logo/rss-round.svg"
import Facebook from "../../assets/images/logo/facebook.svg"
import SitePointBlack from "../../assets/images/sitePoint-black.svg"
import SocialIcon from "../../assets/images/icons/social-icon.svg"
import InstaIcon from "../../assets/images/icons/insta-icon.svg"
import FacebookIcon from "../../assets/images/icons/facebook.svg"
import XLogo from "../../assets/images/icons/x-icon.svg"

const Footer = () => {
  const [location, setLocation] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location.pathname)
    }
  }, [])
  // useEffect(() => {

  //    AOS.init()
  // }, [])
  return location === "/" ? (
    <footer className="m-auto flex flex-col items-center  pb-[124px]">
      <div className="h-[1px] bg-gray_500 mb-16 w-[506px] max-sm:w-full" />
      <div
        // data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col items-center gap-8"
      >
        <Link to="https://sitepoint.com" target="_blank">
          <img src={SitePoint} alt="SitePoint's Logo" className="gap-8" />
        </Link>
        <span>
          © {new Date().getFullYear()} Sitepoint. All rights reserved.
        </span>
      </div>
    </footer>
  ) : (
    <footer
      className={`w-full px-[20px] md:px-[clamp(20px,12vw,122px)] ${
        location === "/home-v4/"
          ? "xs:py-8 xsm:py-12 md:py-[164px]"
          : "xs:py-8 xsm:py-12 md:py-[120px]"
      } ${location === "/home-v4/" ? "bg-white" : "bg-black"}`}
    >
      <div className="max-w-[1084px] mx-auto">
        <div className="w-full flex-col justify-start items-start inline-flex pb-16">
          {location === "/home-v4/" && (
            <footer className="w-full m-auto pb-16">
              <div
                data-aos-anchor-placement="top-bottom"
                className="w-full flex items-center justify-between"
              >
                <Link to="https://sitepoint.com" target="_blank">
                  <img
                    src={SitePointBlack}
                    alt="SitePoint's Logo"
                    className="gap-8"
                  />
                </Link>
                <Link
                  to="https://www.sitepoint.com/premium/pricing/?ref_source=sitepoint&ref_medium=topnav"
                  target="_blank"
                  className="buttontrial bg-primary-700 w-auto xs:whitespace-pre xsm:whitespace-normal"
                >
                  Start Free Trial
                </Link>
              </div>
            </footer>
          )}
          <div className="justify-start items-start gap-5 inline-flex flex-wrap">
            <div className="w-64 flex-col justify-center items-start gap-8 inline-flex">
              <h4
                className={`subheading-text text-center ${
                  location === "/home-v4/"
                    ? "text-gray-900 !font-bold"
                    : "!text-white"
                }`}
              >
                Stuff we do
              </h4>
              {location === "/home-v4/" ? (
                <>
                  <Link
                    to="https://www.sitepoint.com/premium/library/"
                    target="_blank"
                    className="text-center text-gray-900 small-text tracking-[-0.16px]"
                  >
                    Premium
                  </Link>
                  <Link
                    to="https://www.sitepoint.com/newsletters/"
                    target="_blank"
                    className="text-center text-gray-900 small-text tracking-[-0.16px]"
                  >
                    Newsletters
                  </Link>
                  <Link
                    to=""
                    target="_blank"
                    className="text-center text-gray-900 small-text tracking-[-0.16px]"
                  >
                    Learning paths
                  </Link>
                  <Link
                    to=""
                    target="_blank"
                    className="text-center text-gray-900 small-text tracking-[-0.16px]"
                  >
                    Library
                  </Link>
                  <Link
                    to="https://www.sitepoint.com/community/"
                    target="_blank"
                    className="text-center text-gray-900 small-text tracking-[-0.16px]"
                  >
                    Forums
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="https://www.sitepoint.com/premium/library/"
                    target="_blank"
                    className="text-center text-gray_200 small-text tracking-[-0.16px] "
                  >
                    Premium
                  </Link>
                  <Link
                    to="https://www.sitepoint.com/newsletters/"
                    target="_blank"
                    className="text-center text-gray_200 small-text tracking-[-0.16px]"
                  >
                    Newsletters
                  </Link>
                  <Link
                    to="https://www.sitepoint.com/community/"
                    target="_blank"
                    className="text-center text-gray_200 small-text tracking-[-0.16px]"
                  >
                    Forums
                  </Link>
                </>
              )}
            </div>
            <div className="w-64 flex-col justify-center items-start gap-8 inline-flex">
              <h4
                className={`subheading-text text-center ${
                  location === "/home-v4/"
                    ? "text-gray-900 !font-bold"
                    : "!text-white"
                }`}
              >
                About
              </h4>
              {location === "/home-v4/" ? (
                <>
                  <Link
                    to="https://www.sitepoint.com/about-us/"
                    target="_blank"
                    className="text-center text-gray-900 small-text tracking-[-0.16px]"
                  >
                    Our story
                  </Link>
                  <Link
                    to="https://www.sitepoint.com/premium-for-teams"
                    target="_blank"
                    className="text-center text-gray-900 small-text tracking-[-0.16px]"
                  >
                    Corporate memberships
                  </Link>
                  <Link
                    to=""
                    target="_blank"
                    className="text-center text-gray-900 small-text tracking-[-0.16px]"
                  >
                    Login
                  </Link>
                  <Link
                    to="https://www.sitepoint.com/legals/"
                    target="_blank"
                    className="text-center text-gray-900 small-text tracking-[-0.16px]"
                  >
                    Terms of use
                  </Link>
                  <Link
                    to="https://www.sitepoint.com/privacy-policy/"
                    target="_blank"
                    className="text-center text-gray-900 small-text tracking-[-0.16px]"
                  >
                    Privacy policy
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="https://www.sitepoint.com/about-us/"
                    target="_blank"
                    className="text-center text-gray_200 small-text tracking-[-0.16px]"
                  >
                    Our story
                  </Link>
                  <Link
                    to="https://www.sitepoint.com/legals/"
                    target="_blank"
                    className="text-center text-gray_200 small-text tracking-[-0.16px]"
                  >
                    Terms of use
                  </Link>
                  <Link
                    to="https://www.sitepoint.com/privacy-policy/"
                    target="_blank"
                    className="text-center text-gray_200 small-text tracking-[-0.16px]"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    to="https://www.sitepoint.com/premium-for-teams"
                    target="_blank"
                    className="text-center text-gray_200 small-text tracking-[-0.16px]"
                  >
                    Corporate memberships
                  </Link>
                </>
              )}
            </div>
            <div className="w-64 flex-col justify-center items-start gap-8 inline-flex">
              <h4
                className={`subheading-text text-center ${
                  location === "/home-v4/"
                    ? "text-gray-900 !font-bold"
                    : "!text-white"
                }`}
              >
                Contact
              </h4>
              <Link
                to="https://www.sitepoint.com/contact-us/"
                target="_blank"
                className={`text-center ${
                  location === "/home-v4/" ? "text-gray-900" : "text-gray_200"
                } small-text tracking-[-0.16px]`}
              >
                Contact us
              </Link>
              <Link
                to="https://support.sitepoint.com/hc/en-us?_ga=2.52483688.1395196030.1691389008-1817298423.1685440943"
                target="_blank"
                className={`text-center ${
                  location === "/home-v4/" ? "text-gray-900" : "text-gray_200"
                } small-text tracking-[-0.16px]`}
              >
                FAQ
              </Link>
              <Link
                to="https://sitepoint.typeform.com/to/HtAXVN"
                target="_blank"
                className={`text-center ${
                  location === "/home-v4/" ? "text-gray-900" : "text-gray_200"
                } small-text tracking-[-0.16px]`}
              >
                Publish your book with us
              </Link>
              <Link
                to="https://www.sitepoint.com/write-for-us/"
                target="_blank"
                className={`text-center ${
                  location === "/home-v4/" ? "text-gray-900" : "text-gray_200"
                } small-text tracking-[-0.16px]`}
              >
                Write an article with us
              </Link>
              <Link
                to="https://www.sitepoint.com/partnerships/"
                target="_blank"
                className={`text-center ${
                  location === "/home-v4/" ? "text-gray-900" : "text-gray_200"
                } small-text tracking-[-0.16px]`}
              >
                Advertise
              </Link>
            </div>
            <div
              className={`w-64 flex-col items-start gap-8 inline-flex ${
                location === "/home-v4/"
                  ? "justify-between min-h-[304px]"
                  : "justify-start"
              }`}
            >
              {location === "/home-v4/" ? (
                <div className="flex flex-col items-start gap-4">
                  <h4
                    className={`subheading-text text-center text-gray-900 !font-bold`}
                  >
                    Connect
                  </h4>
                  <div
                    className={`justify-start items-start gap-4 inline-flex`}
                  >
                    <a
                      href="https://twitter.com/sitepointdotcom"
                      target="_blank"
                      className="w-9 h-9 flex justify-center border border-solid border-gray-900 rounded-lg"
                    >
                      <img
                        src={SocialIcon}
                        alt="x-icon"
                        className="w-6 h-w-6 object-contain"
                      />
                    </a>
                    <a
                      href="https://www.sitepoint.com/feed/"
                      target="_blank"
                      className="w-9 h-9 flex justify-center border border-solid border-gray-900 rounded-lg"
                    >
                      <img
                        src={FacebookIcon}
                        alt="x-icon"
                        className="w-6 h-w-6 object-contain"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/sitepoint"
                      target="_blank"
                      className="w-9 h-9 flex justify-center border border-solid border-gray-900 rounded-lg"
                    >
                      <img
                        src={XLogo}
                        alt="x-icon"
                        className="w-6 h-w-6 object-contain"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/sitepoint"
                      target="_blank"
                      className="w-9 h-9 flex justify-center border border-solid border-gray-900 rounded-lg"
                    >
                      <img
                        src={InstaIcon}
                        alt="x-icon"
                        className="w-6 h-w-6 object-contain"
                      />
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <h4
                    className={`subheading-text text-center !text-white
                `}
                  >
                    Connect
                  </h4>
                  <div
                    className={`justify-start items-start gap-2 inline-flex`}
                  >
                    <a
                      href="https://twitter.com/sitepointdotcom"
                      target="_blank"
                      className="w-8 h-8 relative rounded-full"
                    >
                      <img
                        src={XIcon}
                        alt="x-icon"
                        className="w-auto h-auto object-contain"
                      />
                    </a>
                    <a
                      href="https://www.sitepoint.com/feed/"
                      target="_blank"
                      className="w-8 h-8 relative rounded-full"
                    >
                      <img
                        src={RssIcon}
                        alt="x-icon"
                        className="w-auto h-auto object-contain"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/sitepoint"
                      target="_blank"
                      className="w-8 h-8 relative rounded-full"
                    >
                      <img
                        src={Facebook}
                        alt="x-icon"
                        className="w-auto h-auto object-contain"
                      />
                    </a>
                  </div>
                </>
              )}
              {location === "/home-v4/" ? null : (
                <div className="text-gray_200 small-text tracking-[-0.16px]">
                  © 2000 – 2023 SitePoint Pty. Ltd.
                </div>
              )}
              <div className="self-stretch">
                <span className="text-gray_200 body-small-text">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </span>
              </div>
            </div>
          </div>
        </div>
        {location === "/home-v4/" ? (
          <div className="text-gray_200 small-text text-center tracking-[-0.16px]">
            © 2000 – 2023 SitePoint Pty. Ltd.
          </div>
        ) : null}
      </div>
    </footer>
  )
}

export default Footer
