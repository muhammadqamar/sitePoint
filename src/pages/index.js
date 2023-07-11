import * as React from "react"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="bg-primary1">
    <h1 className="text-primary1">hello</h1>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
