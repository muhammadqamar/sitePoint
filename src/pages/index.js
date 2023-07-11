import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Inbox from "../assets/images/inbox.svg"
const IndexPage = () => (
  <Layout>
    <h1 className="h1-text">h1 heading</h1>
    <h2 className="h2-text">h2 heading</h2>
    <h2 className="h3-text">h3 heading</h2>
    <p className="subheading-text"> subheading text</p>
    <p className="small-text"> small text</p>
    <button className="button bg-purple_200">subment</button>
    <h2>Our Audience</h2>
    <div className="pt-5 pb-5 pl-5 rounded-[20px] bg-white w-[348px]">
      <div>
        <img src={Inbox} alt="Inbox's Icon!" className="mb-5" />
        <h3 className="h3-text">325,000</h3>
        <h6 className="small-text">Email subscribers</h6>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
