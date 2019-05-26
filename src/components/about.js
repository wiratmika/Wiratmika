import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Divider, SectionContainer } from "../components/common"

const Title = styled.h2`
  text-align: center;
`

const PhotoContainer = styled.div`
  width: 220px; // TODO: use proper container instead
`

export default ({ data }) => (
  <SectionContainer>
    <Title>About Me</Title>
    <Divider />

    <div class="row">
      <PhotoContainer className="small-6 small-centered medium-3 medium-uncentered columns">
        <StaticQuery
          query={query}
          render={data => (
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Wiratmika"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0 5px #222",
              }}
            />
          )}
        />
      </PhotoContainer>

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

const query = graphql`
  query {
    file(relativePath: { eq: "wiratmika.jpg" }) {
      childImageSharp {
        fluid(quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
