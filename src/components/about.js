import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <section id="about">
    <h2 class="text-center" data-magellan-destination="about">
      About Me
    </h2>
    <div class="divider" />

    <div class="row">
      <div class="small-6 small-centered medium-3 medium-uncentered columns">
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "wiratmika.jpg" }) {
                childImageSharp {
                  fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          `}
          render={data => (
            <Img
              class="wiratmika"
              fixed={data.file.childImageSharp.fixed}
              alt="Wiratmika"
            />
          )}
        />
      </div>

      <div class="small-12 medium-9 columns">
        <p>
          I'm a social impact-driven, full-stack technologist obsessed with
          making disproportionate impact at scale. I speak both computer and
          business languages. Would love to help building Indonesian tech
          community and other engineering endeavors!
        </p>
      </div>
    </div>
  </section>
)
