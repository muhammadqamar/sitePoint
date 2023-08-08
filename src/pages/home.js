import * as React from "react"
import Seo from "../components/layout/seo"
import Layout from "../components/layout"
import Home from "../components/Home1/home"
import CardTest from "../components/Home1/cardTest"

const HomePage = () => (
  <Layout>
    <Home />
    <CardTest />
  </Layout>
)

export const Head = () => <Seo title="Home1" />

export default HomePage
