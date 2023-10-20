/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, homev4 }) => {
  return (
    <div className="sitepoint-new-marketing">
      <Header homev4={homev4} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
