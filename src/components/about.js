import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Divider, SectionContainer } from "../components/common"

const Title = styled.h2`
  text-align: center;
`

export default ({ data }) => (
  <SectionContainer>
    <Title>About Me</Title>
    <Divider />

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
              fixed={data.file.childImageSharp.fixed}
              alt="Wiratmika"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0 5px #222",
              }}
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
  </SectionContainer>
)
