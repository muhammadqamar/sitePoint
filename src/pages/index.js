import * as React from "react"
import Seo from "../components/layout/seo"
import Layout from "../components/layout"
import Home from "../components/Home/home"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const IndexPage = () => (
  <Layout>
    <Home />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
