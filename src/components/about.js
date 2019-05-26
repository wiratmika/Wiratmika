import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"

import { SectionContainer, SectionHeader } from "../components/common"

const Subtitle = styled.p`
  @media (max-width: 640px) {
    text-align: center;
    margin-top: 1.5em;
  }
`

export default ({ data }) => (
  <SectionContainer as="section">
    <SectionHeader>About Me</SectionHeader>

    <Flex width={1} flexWrap="wrap" alignItems="center">
      <Box width={[1 / 2, 1 / 5]} px={2} mx="auto">
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
      </Box>

      <Box width={[1, 4 / 5]} px={2}>
        <Subtitle>
          I'm a social impact-driven, full-stack technologist obsessed with
          making disproportionate impact at scale. I speak both computer and
          business languages. Would love to help building Indonesian tech
          community and other engineering endeavors!
        </Subtitle>
      </Box>
    </Flex>
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
