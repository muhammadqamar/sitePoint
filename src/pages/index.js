import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1 className="text-3xl font-bold underline text-primary1">Hello world!</h1>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
