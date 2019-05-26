import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"

import { Divider, SectionContainer } from "../components/common"

const Title = styled.h2`
  text-align: center;
`

export default ({ data }) => (
  <SectionContainer as="section">
    <Flex flexDirection="column" width={1}>
      <Title>About Me</Title>
      <Divider />
    </Flex>
    <Flex width={1} flexWrap="wrap">
      {/* className="small-6 small-centered medium-3 medium-uncentered columns" */}
      <Box width={[1 / 2, 1 / 4]} px={2}>
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

      {/* class="small-12 medium-9 columns" */}
      <Box width={[1, 3 / 4]} px={2}>
        <p>
          I'm a social impact-driven, full-stack technologist obsessed with
          making disproportionate impact at scale. I speak both computer and
          business languages. Would love to help building Indonesian tech
          community and other engineering endeavors!
        </p>
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
