import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Specialties from "../components/specialties"
import Contact from "../components/contact"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Hero />
    <Layout>
      <About />
      <Portfolio />
      <Specialties />
      <Contact />
    </Layout>
  </React.Fragment>
)

export default IndexPage
