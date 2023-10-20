import React from "react"
import Seo from "../components/layout/seo"
import Layout from "../components/layout"
import HomeV4Page from "../components/HomeV4"

const HomeV4 = () => {
  return (
    <Layout homev4>
      <HomeV4Page />
    </Layout>
  )
}
export const Head = () => (
  <Seo
    title="Home V4"
    description="Access a library of books and courses on Javascript, Phython, AI, and more with a community of over 500,000 developers."
  />
)
export default HomeV4
