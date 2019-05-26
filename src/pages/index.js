import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faCode,
  faDesktop,
  faEnvelopeSquare,
  faMobileAlt,
  faRssSquare,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Specialties from "../components/specialties"
import Contact from "../components/contact"

import "./global.css"

library.add(fab, faCode, faDesktop, faEnvelopeSquare, faMobileAlt, faRssSquare)

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
